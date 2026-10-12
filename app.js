/**
 * Noor al-Tajweed (نور التجويد) — Mobile Application Engine
 * Curated for Mum: English-first guidance, full Quranic Tashkeel & orthography symbols, 100% emoji-free
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'NOOR_AL_TAJWEED_STATE_V3';

  // Default App State
  const DEFAULT_STATE = {
    settings: {
      theme: 'sacred-emerald', // 'sacred-emerald' | 'light-parchment'
      fontSize: 'large',       // 'large' | 'xlarge'
      soundEnabled: true
    },
    bookmark: {
      surah: "Surah Al-Kahf (سُورَةُ الكَهْفِ)",
      ayah: 1,
      juz: 15,
      notes: "Recited every Friday for divine light and blessing."
    },
    tasbeeh: {
      currentCount: 0,
      currentPresetId: "tasbeeh-zahra",
      currentTarget: 33,
      currentRound: 1,
      todayTotal: 0,
      currentArabic: "سُبْحَانَ اللَّهِ",
      currentTranslit: "SubḥānAllāh",
      currentMeaning: "Glory be to Allah"
    },
    khatmah: {
      completedJuz: [1, 15] // Default completed Juz numbers
    },
    quizState: {
      currentIdx: 0,
      score: 0,
      answered: false
    }
  };

  let state = {};
  let deferredPrompt = null; // PWA installation prompt event

  // ==================== STATE MANAGEMENT ====================
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        state = JSON.parse(saved);
        if (!state.settings) state.settings = { ...DEFAULT_STATE.settings };
        if (!state.bookmark) state.bookmark = { ...DEFAULT_STATE.bookmark };
        if (!state.tasbeeh) state.tasbeeh = { ...DEFAULT_STATE.tasbeeh };
        if (!state.khatmah) state.khatmah = { ...DEFAULT_STATE.khatmah };
        if (!state.quizState) state.quizState = { ...DEFAULT_STATE.quizState };
      } else {
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState(false);
      }
    } catch (e) {
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  }

  function saveState(triggerRender = false) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      if (triggerRender) renderAll();
    } catch (e) {
      console.warn('Could not save state to localStorage:', e);
    }
  }

  // ==================== AUDIO & HAPTIC SYNTHESIS ====================
  function playTactileClick() {
    if (!state.settings || !state.settings.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.04); // A5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (e) {}

    if (navigator.vibrate) {
      try { navigator.vibrate(25); } catch (e) {}
    }
  }

  function playTargetCelebrationChime() {
    if (!state.settings || !state.settings.soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const tones = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      tones.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.07, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.35);
      });
    } catch (e) {}

    if (navigator.vibrate) {
      try { navigator.vibrate([40, 50, 40]); } catch (e) {}
    }
  }

  // ==================== TOAST NOTIFICATIONS (100% EMOJI-FREE) ====================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="font-weight:700; color:var(--text-gold);">[ Done ]</span> <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ==================== THEME & ACCESSIBILITY CONTROLS ====================
  function applySettings() {
    const s = state.settings || {};
    document.documentElement.setAttribute('data-theme', s.theme || 'sacred-emerald');
    document.documentElement.setAttribute('data-font', s.fontSize || 'large');

    const fontLabel = document.getElementById('font-size-label');
    if (fontLabel) {
      fontLabel.textContent = s.fontSize === 'xlarge' ? 'A' : 'A+';
    }

    const audioToggleBtn = document.getElementById('btn-tasbeeh-audio-toggle');
    if (audioToggleBtn) {
      audioToggleBtn.textContent = s.soundEnabled ? 'Sound: On' : 'Sound: Muted';
    }
  }

  function toggleFontSize() {
    state.settings.fontSize = state.settings.fontSize === 'large' ? 'xlarge' : 'large';
    saveState(false);
    applySettings();
    showToast(state.settings.fontSize === 'xlarge' ? 'Text size enlarged for Mum' : 'Standard text size');
  }

  function toggleTheme() {
    state.settings.theme = state.settings.theme === 'sacred-emerald' ? 'light-parchment' : 'sacred-emerald';
    saveState(false);
    applySettings();
    showToast(state.settings.theme === 'sacred-emerald' ? 'Theme: Sacred Emerald' : 'Theme: Mushaf Parchment');
  }

  function toggleAudio() {
    state.settings.soundEnabled = !state.settings.soundEnabled;
    saveState(false);
    applySettings();
    showToast(state.settings.soundEnabled ? 'Sound enabled' : 'Sound muted');
  }

  // ==================== VIEW SWITCHER (BOTTOM NAV) ====================
  function switchView(viewName) {
    const views = document.querySelectorAll('.mobile-view');
    views.forEach(v => v.classList.remove('active'));

    const tabButtons = document.querySelectorAll('#app-bottom-nav .nav-tab-btn');
    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-view') === viewName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
      targetView.classList.add('active');
      const scrollContainer = document.getElementById('main-scroll-content');
      if (scrollContainer) scrollContainer.scrollTop = 0;
    }

    if (viewName === 'tasbeeh') renderTasbeeh();
    if (viewName === 'quiz') renderQuiz();
    if (viewName === 'quran') renderQuranKhatmah();
    if (viewName === 'duas') renderDuas();
    if (viewName === 'tajweed') renderTajweedRules();
  }

  // ==================== VIEW 1: TAJWEED RULES (ENGLISH-FIRST FOR MUM) ====================
  function renderTajweedRules() {
    const listContainer = document.getElementById('tajweed-rules-mobile-list');
    const selector = document.getElementById('tajweed-chapter-selector');
    if (!listContainer || typeof TAJWEED_DATA === 'undefined') return;

    const selectedChapterId = selector ? selector.value : 'all';
    let chaptersToRender = TAJWEED_DATA.chapters;

    if (selectedChapterId !== 'all') {
      chaptersToRender = TAJWEED_DATA.chapters.filter(c => c.id === selectedChapterId);
    }

    let html = '';

    chaptersToRender.forEach(ch => {
      html += `
        <div style="margin-bottom:1.5rem;">
          <div style="padding:0.4rem 0.2rem; border-bottom:1.5px solid var(--border-gold); margin-bottom:0.75rem; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <h2 style="font-size:1.15rem; font-weight:800; color:var(--text-gold); margin:0;">${ch.titleEnglish}</h2>
              <div style="font-size:0.75rem; color:var(--text-muted);">${ch.titleUrdu || ''}</div>
            </div>
            <span style="font-size:0.85rem; padding:3px 10px; border-radius:6px; background:var(--bg-card-alt); border:1px solid var(--border-gold-subtle); color:var(--text-gold); font-weight:700;">${ch.mark}</span>
          </div>
          <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.6; margin-bottom:0.85rem;">${ch.summaryEnglish}</p>
      `;

      ch.rules.forEach(rule => {
        const lettersBadges = (rule.letters || []).map(l => `<span class="letter-badge">${l}</span>`).join('');
        
        // Examples rendering
        let examplesHtml = '';
        if (rule.examples && rule.examples.length > 0) {
          examplesHtml = `
            <div style="margin-top:0.85rem;">
              <div style="font-size:0.82rem; font-weight:700; color:var(--text-gold); margin-bottom:0.4rem;">Quranic Recitation Examples:</div>
              ${rule.examples.map(ex => `
                <div class="quran-ayah">
                  <div class="quran-ayah-highlight" dir="rtl">${ex.arabic}</div>
                  <div class="quran-ayah-translit">${escapeHtml(ex.transliteration)}</div>
                  ${ex.translation ? `<div style="font-size:0.82rem; color:var(--text-primary); font-style:italic; margin-top:2px;">"${escapeHtml(ex.translation)}"</div>` : ''}
                  <div style="margin-top:5px; font-size:0.8rem; line-height:1.5; color:var(--text-secondary); background:rgba(0,0,0,0.12); padding:4px 8px; border-radius:6px;">
                    <strong style="color:var(--text-gold);">Why:</strong> ${ex.noteEnglish || ''}
                  </div>
                  <div style="font-size:0.74rem; color:var(--text-muted); margin-top:3px; text-align:right;">
                    ${ex.surah}
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }

        // Subtypes (e.g. Qalqalah degrees or Madd types)
        let subtypesHtml = '';
        if (rule.subtypes && rule.subtypes.length > 0) {
          subtypesHtml = `
            <div style="margin-top:0.85rem; display:flex; flex-direction:column; gap:0.75rem;">
              ${rule.subtypes.map(sub => `
                <div style="background:var(--bg-card-alt); border:1px solid var(--border-gold-subtle); border-radius:10px; padding:0.75rem 0.85rem;">
                  <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
                    <strong style="color:var(--text-gold); font-size:0.95rem;">${sub.titleEnglish}</strong>
                    <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${sub.duration || ''}</span>
                  </div>
                  <div style="font-size:0.85rem; line-height:1.5; color:var(--text-secondary); margin-bottom:6px;">${sub.explanationEnglish || ''}</div>
                  
                  ${(sub.examples || []).map(ex => `
                    <div class="quran-ayah" style="padding:0.45rem 0.65rem; margin-top:6px;">
                      <div class="quran-ayah-highlight" dir="rtl" style="font-size:1.15rem;">${ex.arabic}</div>
                      <div class="quran-ayah-translit" style="font-size:0.8rem;">${ex.transliteration}</div>
                      ${ex.translation ? `<div style="font-size:0.78rem; color:var(--text-primary); font-style:italic;">"${ex.translation}"</div>` : ''}
                      ${ex.noteEnglish ? `<div style="font-size:0.78rem; color:var(--text-secondary); margin-top:3px;"><strong style="color:var(--text-gold);">Note:</strong> ${ex.noteEnglish}</div>` : ''}
                      ${ex.surah ? `<div style="font-size:0.72rem; color:var(--text-muted); text-align:right;">${ex.surah}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              `).join('')}
            </div>
          `;
        }

        // Signs (Stop marks in Mushaf)
        let signsHtml = '';
        if (rule.signs && rule.signs.length > 0) {
          signsHtml = `
            <div style="margin-top:0.85rem; display:flex; flex-direction:column; gap:0.75rem;">
              ${rule.signs.map(sgn => `
                <div style="background:var(--bg-card-alt); border:1px solid var(--border-gold-subtle); border-radius:10px; padding:0.75rem 0.85rem; display:flex; gap:0.75rem; align-items:flex-start;">
                  <div class="letter-badge" style="font-size:1.3rem; padding:0.3rem 0.65rem; min-width:48px; text-align:center; font-weight:800;">${sgn.symbol}</div>
                  <div style="flex:1;">
                    <div style="font-weight:800; color:var(--text-gold); font-size:0.95rem;">${sgn.nameEnglish}</div>
                    <div style="font-size:0.85rem; line-height:1.5; color:var(--text-primary); margin-top:3px;">${sgn.meaningEnglish}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">${sgn.urduExplanation}</div>
                    
                    ${sgn.exampleArabic ? `
                      <div class="quran-ayah" style="margin-top:6px; padding:0.4rem 0.6rem;">
                        <div class="quran-ayah-highlight" dir="rtl" style="font-size:1.1rem;">${sgn.exampleArabic}</div>
                        <div style="font-size:0.76rem; color:var(--text-muted); margin-top:2px;">${sgn.exampleSurah} • ${sgn.exampleNote}</div>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }

        html += `
          <div class="sacred-card">
            <div class="card-title-row">
              <div>
                <div style="font-size:1.05rem; font-weight:800; color:var(--text-gold);">${rule.nameEnglish}</div>
                <div style="font-size:0.82rem; color:var(--text-muted); font-family:var(--font-arabic);" dir="rtl">${rule.nameArabic}</div>
              </div>
              ${rule.durationEnglish ? `<div style="font-size:0.75rem; font-weight:700; color:var(--text-gold); background:var(--bg-card-alt); padding:3px 8px; border-radius:6px; border:1px solid var(--border-gold-subtle); text-align:right;">${rule.durationEnglish}</div>` : ''}
            </div>

            <div style="font-size:0.88rem; line-height:1.65; color:var(--text-primary); margin-bottom:0.75rem;">
              <div style="margin-bottom:0.4rem;">${rule.explanationEnglish}</div>
              ${rule.explanationUrdu ? `<div style="font-size:0.82rem; color:var(--text-muted);">${rule.explanationUrdu}</div>` : ''}
            </div>

            ${rule.lettersNamesEnglish ? `
              <div style="background:var(--bg-card-alt); border-radius:8px; padding:0.5rem 0.75rem; font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.75rem; border:1px solid var(--border-gold-subtle);">
                <strong style="color:var(--text-gold);">Letters:</strong> ${rule.lettersNamesEnglish}
              </div>
            ` : ''}

            ${lettersBadges ? `
              <div style="margin-bottom:0.75rem;">
                <div style="font-size:0.76rem; font-weight:700; color:var(--text-muted); margin-bottom:4px;">Arabic Letters:</div>
                <div class="letter-badge-group" dir="rtl">${lettersBadges}</div>
              </div>
            ` : ''}

            ${subtypesHtml}
            ${signsHtml}
            ${examplesHtml}
          </div>
        `;
      });

      html += `</div>`;
    });

    listContainer.innerHTML = html;
  }

  // ==================== VIEW 2: TAJWEED PRACTICE & QUIZ ====================
  function renderQuiz() {
    const container = document.getElementById('quiz-mobile-container');
    const scoreLabel = document.getElementById('quiz-mobile-score');
    if (!container || typeof TAJWEED_DATA === 'undefined') return;

    const quizList = TAJWEED_DATA.quiz || [];
    if (quizList.length === 0) return;

    const currIdx = state.quizState.currentIdx % quizList.length;
    const q = quizList[currIdx];

    if (scoreLabel) {
      scoreLabel.textContent = `Question ${currIdx + 1} of ${quizList.length} • Score: ${state.quizState.score}`;
    }

    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
      optionsHtml += `
        <button class="topbar-icon-btn font-size-btn quiz-option-btn" data-opt-idx="${idx}" style="width:100%; min-height:48px; padding:0.75rem 1rem; border-radius:10px; justify-content:flex-start; text-align:left; font-size:0.92rem; font-weight:700; line-height:1.5;">
          <span style="color:var(--text-gold); margin-right:0.6rem;">[ ${idx + 1} ]</span> ${opt.text}
        </button>
      `;
    });

    container.innerHTML = `
      <div class="sacred-card">
        <div style="font-size:0.8rem; font-weight:700; color:var(--text-gold); margin-bottom:0.35rem; text-transform:uppercase; letter-spacing:0.04em;">
          Question ${currIdx + 1}
        </div>
        
        <div style="font-size:1.15rem; font-weight:800; color:var(--text-primary); margin-bottom:0.6rem; line-height:1.5;">
          ${q.questionEnglish}
        </div>

        ${q.arabicSnippet ? `
          <div class="quran-ayah" style="text-align:center; margin-bottom:0.85rem; padding:0.6rem;">
            <div class="quran-ayah-highlight" dir="rtl" style="font-size:1.35rem;">${q.arabicSnippet}</div>
          </div>
        ` : ''}

        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.15rem;">
          ${q.questionUrdu || ''}
        </div>

        <div id="quiz-options-wrapper" style="display:flex; flex-direction:column; gap:0.6rem;">
          ${optionsHtml}
        </div>

        <div id="quiz-explanation-box" style="display:none; margin-top:1.25rem; padding:0.85rem; border-radius:10px; background:var(--bg-card-alt); border:1px solid var(--border-gold-subtle);">
        </div>

        <div style="margin-top:1.25rem; display:flex; gap:0.75rem;">
          <button id="btn-quiz-next" class="topbar-icon-btn font-size-btn" style="flex:1; height:46px; justify-content:center; background:var(--border-gold); color:#0c1c14; font-weight:800; display:none;">
            Next Question
          </button>
          <button id="btn-quiz-reset-score" class="topbar-icon-btn font-size-btn" style="padding:0 1rem; height:46px;">
            Restart Quiz
          </button>
        </div>
      </div>
    `;

    // Bind option click handlers
    const optionBtns = container.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.quizState.answered) return;
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        const selected = q.options[optIdx];
        state.quizState.answered = true;

        const explanationBox = document.getElementById('quiz-explanation-box');
        const nextBtn = document.getElementById('btn-quiz-next');

        if (selected.isCorrect) {
          playTargetCelebrationChime();
          state.quizState.score += 1;
          btn.style.borderColor = '#22c55e';
          btn.style.background = 'rgba(34, 197, 94, 0.15)';
          showToast('Well done Ammi! Correct answer');
        } else {
          playTactileClick();
          btn.style.borderColor = '#ef4444';
          btn.style.background = 'rgba(239, 68, 68, 0.15)';
          optionBtns.forEach((b, bIdx) => {
            if (q.options[bIdx].isCorrect) {
              b.style.borderColor = '#22c55e';
              b.style.background = 'rgba(34, 197, 94, 0.12)';
            }
          });
        }

        if (explanationBox) {
          explanationBox.style.display = 'block';
          explanationBox.innerHTML = `
            <div style="font-weight:800; color:${selected.isCorrect ? '#4ade80' : 'var(--text-gold)'}; margin-bottom:4px;">
              ${selected.isCorrect ? '[ Correct! BarakAllahu Feeki ]' : '[ Rule Explanation ]'}
            </div>
            <div style="font-size:0.88rem; line-height:1.6; color:var(--text-primary);">${q.explanationEnglish}</div>
            ${q.explanationUrdu ? `<div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">${q.explanationUrdu}</div>` : ''}
          `;
        }

        if (nextBtn) nextBtn.style.display = 'inline-flex';
        saveState(false);
        if (scoreLabel) {
          scoreLabel.textContent = `Question ${currIdx + 1} of ${quizList.length} • Score: ${state.quizState.score}`;
        }
      });
    });

    const nextBtn = document.getElementById('btn-quiz-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        state.quizState.currentIdx += 1;
        state.quizState.answered = false;
        saveState(false);
        renderQuiz();
      });
    }

    const resetScoreBtn = document.getElementById('btn-quiz-reset-score');
    if (resetScoreBtn) {
      resetScoreBtn.addEventListener('click', () => {
        state.quizState.currentIdx = 0;
        state.quizState.score = 0;
        state.quizState.answered = false;
        saveState(false);
        renderQuiz();
        showToast('Quiz restarted');
      });
    }
  }

  // ==================== VIEW 3: DIGITAL TASBEEH ====================
  function renderTasbeeh() {
    const arabicDisplay = document.getElementById('tasbeeh-dhikr-arabic');
    const translitDisplay = document.getElementById('tasbeeh-dhikr-translit');
    const meaningDisplay = document.getElementById('tasbeeh-dhikr-meaning');
    const countDisplay = document.getElementById('tasbeeh-number-display');
    const targetDisplay = document.getElementById('tasbeeh-target-num');
    const roundDisplay = document.getElementById('tasbeeh-round-num');
    const presetsContainer = document.getElementById('tasbeeh-mobile-presets');

    if (!countDisplay) return;

    const t = state.tasbeeh;
    if (arabicDisplay) arabicDisplay.textContent = t.currentArabic;
    if (translitDisplay) translitDisplay.textContent = t.currentTranslit;
    if (meaningDisplay) meaningDisplay.textContent = t.currentMeaning;
    countDisplay.textContent = t.currentCount;
    if (targetDisplay) targetDisplay.textContent = t.currentTarget;
    if (roundDisplay) roundDisplay.textContent = t.currentRound;

    // Render Dhikr Presets
    if (presetsContainer && typeof TAJWEED_DATA !== 'undefined' && TAJWEED_DATA.adhkarPresets) {
      let presetsHtml = '';
      TAJWEED_DATA.adhkarPresets.forEach(preset => {
        preset.items.forEach((item) => {
          const isSelected = (t.currentArabic === item.arabic);
          presetsHtml += `
            <div class="sacred-card" style="padding:0.75rem 1rem; cursor:pointer; border:1px solid ${isSelected ? 'var(--border-gold)' : 'var(--border-gold-subtle)'}; background:${isSelected ? 'var(--bg-card-alt)' : 'var(--bg-card)'};" data-preset-arabic="${item.arabic}" data-preset-translit="${item.translit}" data-preset-meaning="${item.meaning}" data-preset-target="${preset.target}">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div style="font-weight:700; font-size:0.95rem; color:${isSelected ? 'var(--text-gold)' : 'var(--text-primary)'};">${item.translit}</div>
                  <div style="font-size:0.8rem; color:var(--text-muted);">${item.meaning}</div>
                </div>
                <div style="text-align:right;">
                  <div style="font-family:var(--font-arabic); font-size:1.2rem; color:var(--text-gold);" dir="rtl">${item.arabic}</div>
                  <span style="font-size:0.72rem; padding:2px 6px; border-radius:4px; background:var(--bg-card-alt); color:var(--text-muted);">${preset.target}×</span>
                </div>
              </div>
            </div>
          `;
        });
      });
      presetsContainer.innerHTML = presetsHtml;

      presetsContainer.querySelectorAll('[data-preset-arabic]').forEach(card => {
        card.addEventListener('click', () => {
          t.currentArabic = card.getAttribute('data-preset-arabic');
          t.currentTranslit = card.getAttribute('data-preset-translit');
          t.currentMeaning = card.getAttribute('data-preset-meaning');
          t.currentTarget = parseInt(card.getAttribute('data-preset-target'), 10) || 33;
          t.currentCount = 0;
          t.currentRound = 1;
          saveState(false);
          renderTasbeeh();
          showToast(`Selected: ${t.currentTranslit}`);
        });
      });
    }
  }

  function incrementTasbeeh() {
    const t = state.tasbeeh;
    t.currentCount += 1;
    t.todayTotal = (t.todayTotal || 0) + 1;

    if (t.currentCount >= t.currentTarget) {
      playTargetCelebrationChime();
      showToast(`Masha'Allah! Completed round ${t.currentRound} (${t.currentTarget} counts)`);
      t.currentCount = 0;
      t.currentRound += 1;
    } else {
      playTactileClick();
    }

    saveState(false);
    renderTasbeeh();
  }

  function resetTasbeeh() {
    state.tasbeeh.currentCount = 0;
    state.tasbeeh.currentRound = 1;
    saveState(false);
    renderTasbeeh();
    showToast('Tasbeeh count reset');
  }

  // ==================== VIEW 4: DAILY DUAS (ENGLISH-FIRST FOR MUM) ====================
  function renderDuas() {
    const listContainer = document.getElementById('duas-mobile-list');
    const filter = document.getElementById('dua-mobile-cat-filter');
    if (!listContainer || typeof TAJWEED_DATA === 'undefined') return;

    const selectedCat = filter ? filter.value : 'all';
    let duasToRender = TAJWEED_DATA.duas || [];

    if (selectedCat !== 'all') {
      duasToRender = duasToRender.filter(d => d.category === selectedCat);
    }

    let html = '';
    duasToRender.forEach((dua) => {
      html += `
        <div class="sacred-card">
          <div class="card-title-row">
            <div>
              <div style="font-size:1.05rem; font-weight:800; color:var(--text-gold);">${dua.title}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${dua.reference}</div>
            </div>
            <span style="font-size:0.72rem; color:var(--text-gold); background:var(--bg-card-alt); padding:2px 8px; border-radius:6px; border:1px solid var(--border-gold-subtle);">${dua.category}</span>
          </div>

          <div class="quran-ayah" style="margin-top:0.6rem;">
            <div class="quran-ayah-highlight" dir="rtl" style="font-size:1.45rem;">${dua.arabic}</div>
            <div class="quran-ayah-translit" style="font-size:0.88rem; margin-top:6px;">${escapeHtml(dua.translit)}</div>
          </div>

          <div style="font-size:0.9rem; line-height:1.6; color:var(--text-primary); margin-top:0.75rem;">
            <div style="margin-bottom:4px;"><strong style="color:var(--text-gold);">Translation:</strong> "${dua.translationEnglish}"</div>
            ${dua.translationUrdu ? `<div style="font-size:0.84rem; color:var(--text-muted); margin-top:4px;"><strong style="color:var(--text-gold);">اردو ترجمہ:</strong> ${dua.translationUrdu}</div>` : ''}
          </div>

          <div style="display:flex; justify-content:flex-end; align-items:center; margin-top:0.85rem; padding-top:0.6rem; border-top:1px solid var(--border-gold-subtle);">
            <button class="topbar-icon-btn font-size-btn btn-copy-dua" data-dua-arabic="${escapeHtml(dua.arabic)}" style="padding:0 0.85rem; height:34px;">
              Copy Arabic Dua
            </button>
          </div>
        </div>
      `;
    });

    listContainer.innerHTML = html;

    listContainer.querySelectorAll('.btn-copy-dua').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-dua-arabic');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            showToast('Dua copied to clipboard');
          });
        }
      });
    });
  }

  // ==================== VIEW 5: QURAN & KHATMAH ====================
  function renderQuranKhatmah() {
    const surahDisplay = document.getElementById('quran-bookmark-surah');
    const ayahDisplay = document.getElementById('quran-bookmark-ayah');
    const notesDisplay = document.getElementById('quran-bookmark-notes');
    const juzGrid = document.getElementById('juz-mobile-grid');
    const progressFill = document.getElementById('juz-progress-fill');
    const progressLabel = document.getElementById('juz-progress-label');

    const bm = state.bookmark || DEFAULT_STATE.bookmark;
    if (surahDisplay) surahDisplay.textContent = bm.surah;
    if (ayahDisplay) ayahDisplay.textContent = `Ayah ${bm.ayah} • Juz ${bm.juz || 1}`;
    if (notesDisplay) notesDisplay.textContent = bm.notes || 'May Allah bless Mum with divine light and peace.';

    const bmSurahInput = document.getElementById('bm-input-surah');
    const bmAyahInput = document.getElementById('bm-input-ayah');
    const bmJuzInput = document.getElementById('bm-input-juz');
    const bmNotesInput = document.getElementById('bm-input-notes');
    if (bmSurahInput) bmSurahInput.value = bm.surah;
    if (bmAyahInput) bmAyahInput.value = bm.ayah;
    if (bmJuzInput) bmJuzInput.value = bm.juz || 1;
    if (bmNotesInput) bmNotesInput.value = bm.notes || '';

    // Render 30 Juz Grid
    if (juzGrid && typeof TAJWEED_DATA !== 'undefined' && TAJWEED_DATA.juzList) {
      const completed = state.khatmah.completedJuz || [];
      const pct = Math.round((completed.length / 30) * 100);

      if (progressFill) progressFill.style.width = `${pct}%`;
      if (progressLabel) progressLabel.textContent = `${pct}% (${completed.length} of 30 Completed)`;

      let html = '';
      TAJWEED_DATA.juzList.forEach(juz => {
        const isDone = completed.includes(juz.number);
        html += `
          <div class="juz-chip ${isDone ? 'completed' : ''}" data-juz-num="${juz.number}">
            <div class="juz-chip-number">Juz ${juz.number}</div>
            <div class="juz-chip-name" dir="rtl">${juz.nameArabic}</div>
            <div style="font-size:0.7rem; color:var(--text-muted); margin-top:1px;">${juz.surahs}</div>
            <div style="font-size:0.72rem; margin-top:3px; font-weight:700;">${isDone ? '[ Completed ]' : 'Tap to complete'}</div>
          </div>
        `;
      });
      juzGrid.innerHTML = html;

      juzGrid.querySelectorAll('.juz-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const num = parseInt(chip.getAttribute('data-juz-num'), 10);
          const list = state.khatmah.completedJuz || [];
          if (list.includes(num)) {
            state.khatmah.completedJuz = list.filter(n => n !== num);
            playTactileClick();
            showToast(`Juz ${num} marked as unread`);
          } else {
            state.khatmah.completedJuz.push(num);
            playTargetCelebrationChime();
            showToast(`Masha'Allah! Juz ${num} marked complete`);
          }
          saveState(false);
          renderQuranKhatmah();
        });
      });
    }
  }

  // ==================== MODALS MANAGEMENT ====================
  function initModals() {
    const btnOpenInstall = document.getElementById('btn-open-install');
    const modalInstall = document.getElementById('modal-install-sheet');
    if (btnOpenInstall && modalInstall) {
      btnOpenInstall.addEventListener('click', () => {
        modalInstall.classList.add('active');
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
        }
      });
    }

    const btnOpenBookmark = document.getElementById('btn-open-bookmark-sheet');
    const modalBookmark = document.getElementById('modal-bookmark-sheet');
    if (btnOpenBookmark && modalBookmark) {
      btnOpenBookmark.addEventListener('click', () => {
        modalBookmark.classList.add('active');
      });
    }

    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
          modal.classList.remove('active');
        });
      });
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });

    const bookmarkForm = document.getElementById('form-mobile-bookmark');
    if (bookmarkForm) {
      bookmarkForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const surah = document.getElementById('bm-input-surah').value.trim();
        const ayah = parseInt(document.getElementById('bm-input-ayah').value, 10) || 1;
        const juz = parseInt(document.getElementById('bm-input-juz').value, 10) || 1;
        const notes = document.getElementById('bm-input-notes').value.trim();

        state.bookmark = { surah, ayah, juz, notes };
        saveState(false);
        renderQuranKhatmah();
        if (modalBookmark) modalBookmark.classList.remove('active');
        showToast('Reading bookmark saved');
      });
    }
  }

  // ==================== RENDER ALL ENGINE ====================
  function renderAll() {
    applySettings();
    renderTajweedRules();
    renderQuiz();
    renderTasbeeh();
    renderDuas();
    renderQuranKhatmah();
  }

  // ==================== PWA INSTALL & SERVICE WORKER ====================
  function initPWA() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      const btnInstall = document.getElementById('btn-open-install');
      if (btnInstall) {
        btnInstall.style.border = '1px solid var(--border-gold)';
      }
    });

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(reg => {
          console.log('Noor al-Tajweed Service Worker active:', reg.scope);
          reg.update();
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  window.location.reload();
                }
              });
            }
          });
        })
        .catch(err => {
          console.warn('Service worker registration failed:', err);
        });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }
  }

  // ==================== INITIALIZATION ====================
  function init() {
    loadState();
    applySettings();

    const btnFont = document.getElementById('btn-toggle-font');
    if (btnFont) btnFont.addEventListener('click', toggleFontSize);

    const btnTheme = document.getElementById('btn-toggle-theme');
    if (btnTheme) btnTheme.addEventListener('click', toggleTheme);

    const navTabs = document.querySelectorAll('#app-bottom-nav .nav-tab-btn');
    navTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const view = tab.getAttribute('data-view');
        switchView(view);
      });
    });

    const chapterSelector = document.getElementById('tajweed-chapter-selector');
    if (chapterSelector) {
      chapterSelector.addEventListener('change', () => {
        renderTajweedRules();
      });
    }

    const duaCatFilter = document.getElementById('dua-mobile-cat-filter');
    if (duaCatFilter) {
      duaCatFilter.addEventListener('change', () => {
        renderDuas();
      });
    }

    const tasbeehBtn = document.getElementById('btn-tasbeeh-circle');
    if (tasbeehBtn) {
      tasbeehBtn.addEventListener('click', incrementTasbeeh);
    }

    const resetTasbeehBtn = document.getElementById('btn-tasbeeh-reset');
    if (resetTasbeehBtn) {
      resetTasbeehBtn.addEventListener('click', resetTasbeeh);
    }

    const audioToggleBtn = document.getElementById('btn-tasbeeh-audio-toggle');
    if (audioToggleBtn) {
      audioToggleBtn.addEventListener('click', toggleAudio);
    }

    initModals();
    initPWA();
    renderAll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

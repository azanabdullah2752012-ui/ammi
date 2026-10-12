// Noor al-Tajweed (نور التجويد) — Authoritative Tajweed & Quranic Knowledge Base
// Tailored for Mum: Clear English Explanations, Full Quranic Tashkeel & Symbols, 0 Emojis.

const TAJWEED_DATA = {
  chapters: [
    {
      id: "noon-sakinah",
      titleArabic: "أَحْكَامُ النُّونِ السَّاكِنَةِ وَالتَّنْوِينِ",
      titleEnglish: "1. Rules of Noon Saakin & Tanween",
      titleUrdu: "نون ساکن اور تنوین کے چار احکام",
      summaryEnglish: "The 4 essential recitation rules when a resting Noon (نْ) or Tanween double-vowels (ـً ـٍ ـٌ) appears: Izhar (Clarity), Idgham (Merging), Iqlab (Converting to Meem), and Ikhfa (Hiding with nasal hum).",
      mark: "نْ",
      rules: [
        {
          id: "izhar-halqi",
          nameArabic: "الإِظْهَارُ الحَلْقِيُّ",
          nameEnglish: "Izhar Halqi — Clear Throat Pronunciation",
          nameUrdu: "اظہارِ حلقی (صاف اور واضح ادا کرنا)",
          explanationEnglish: "How to pronounce: Pronounce the 'N' sound crisp, clear, and clean using the tip of your tongue against the upper gum. Do NOT hold any humming or buzzing in your nose.",
          explanationUrdu: "نون ساکن یا تنوین کے بعد حروفِ حلقی آئیں تو نون کو بغیر کسی غنہ کے بالکل صاف اور واضح ادا کیا جائے گا۔",
          durationEnglish: "1 natural count (standard quick 'N', no extra holding)",
          letters: ["ء", "هـ", "ع", "ح", "غ", "خ"],
          lettersNamesEnglish: "Hamzah (ء), Haa (هـ), 'Ayn (ع), Haa (ح), Ghayn (غ), Khaa (خ)",
          lettersMnemonic: "The 6 Throat Letters (حُرُوفُ الحَلْقِ)",
          colorCode: "izhar",
          examples: [
            {
              arabic: "﴿ مَنْ ءَامَنَ ﴾",
              transliteration: "man āmana",
              translation: "Whoever believes",
              surah: "Surah Al-Baqarah",
              noteEnglish: "Notice the Noon Saakin (نْ) is followed by Hamzah (ء). Pronounce the 'N' cleanly with no nasal hum."
            },
            {
              arabic: "﴿ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ ﴾",
              transliteration: "an'amta 'alayhim",
              translation: "The path of those upon whom You have bestowed favor",
              surah: "Surah Al-Fatihah (Ayah 7)",
              noteEnglish: "Inside the word 'an'amta', the Noon (نْ) is followed by 'Ayn (ع). Say 'an-' cleanly without pausing or buzzing."
            },
            {
              arabic: "﴿ عَنْهُمْ ﴾",
              transliteration: "'anhum",
              translation: "From them",
              surah: "Surah Al-Bayyinah",
              noteEnglish: "The Noon Saakin is followed by Haa (هـ). Pronounce the 'N' crisp and proceed immediately to Haa."
            },
            {
              arabic: "﴿ عَلِيمٌ حَكِيمٌ ۝ ﴾",
              transliteration: "'aleemun ḥakeem",
              translation: "All-Knowing, All-Wise",
              surah: "Surah An-Nisa",
              noteEnglish: "The Tanween '-un' meets the throat letter Haa (ح). Say '-un' clearly without nasal elongation."
            },
            {
              arabic: "﴿ مِنْ غِلٍّ ﴾",
              transliteration: "min ghill",
              translation: "Any resentment or rancor",
              surah: "Surah Al-A'raf",
              noteEnglish: "The Noon (نْ) meets Ghayn (غ). Clear articulation without nasal hum."
            },
            {
              arabic: "﴿ عَلِيمًا خَبِيرًا ۝ ﴾",
              transliteration: "'aleeman khabeerā",
              translation: "All-Knowing, All-Aware",
              surah: "Surah Al-Hujurat",
              noteEnglish: "The Tanween '-an' meets Khaa (خ). Clear articulation without buzzing."
            }
          ]
        },
        {
          id: "idgham",
          nameArabic: "الإِدْغَامُ",
          nameEnglish: "Idgham — Merging & Blending",
          nameUrdu: "ادغام (ملا کر پڑھنا)",
          explanationEnglish: "How to pronounce: The 'N' sound disappears completely and merges into the next letter, making the next letter doubled. The 6 Idgham letters are combined in the word: YARMALOON (يَرْمَلُونَ).",
          explanationUrdu: "نون ساکن یا تنوین کو اگلے حرف میں داخل کر کے ملا دینا تاکہ اگلا حرف تشدید کے ساتھ پڑھا جائے۔ اس کے چھ حروف ہیں: «يَرْمَلُونَ»۔",
          durationEnglish: "2 counts with Ghunnah (for YANMOO letters) / 0 counts extra (for R and L)",
          letters: ["ي", "ر", "م", "ل", "و", "ن"],
          lettersNamesEnglish: "Yaa, Raa, Meem, Laam, Waw, Noon (Gathered in: Yarmaloon)",
          colorCode: "idgham",
          subtypes: [
            {
              nameArabic: "إِدْغَامٌ بِغُنَّةٍ",
              titleEnglish: "Idgham with Ghunnah (Merging with Nasal Hum)",
              lettersEnglish: "Letters: Yaa (ي), Noon (ن), Meem (م), Waw (و) — grouped in 'YANMOO' (يَنْمُو)",
              duration: "Hold nasal hum for 2 counts",
              explanationEnglish: "Merge the Noon into the next letter and hold a pleasant, melodic nasal humming sound (Ghunnah) for 2 counts.",
              examples: [
                {
                  arabic: "﴿ فَمَن يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهُ ۝ ﴾",
                  transliteration: "famay-ya'mal ... khayray-yarah",
                  translation: "So whoever does an atom's weight of good will see it",
                  surah: "Surah Az-Zalzalah",
                  noteEnglish: "The Noon merges into Yaa (ي): say 'famay-ya'mal' while holding the nasal sound for 2 counts."
                },
                {
                  arabic: "﴿ مِّن مَّالِ اللَّهِ ﴾",
                  transliteration: "mim-mālil-lāh",
                  translation: "From the wealth of Allah",
                  surah: "Surah An-Nur",
                  noteEnglish: "The Noon blends into Meem (م): say 'mim-māl' with a 2-count nasal hum."
                },
                {
                  arabic: "﴿ مِن وَالٍ ﴾",
                  transliteration: "miw-wālin",
                  translation: "Any protector",
                  surah: "Surah Ar-Ra'd",
                  noteEnglish: "The Noon blends into Waw (و): say 'miw-wālin' with a 2-count nasal hum."
                }
              ]
            },
            {
              nameArabic: "إِدْغَامٌ بِغَيْرِ غُنَّةٍ",
              titleEnglish: "Idgham without Ghunnah (Complete Merge, No Hum)",
              lettersEnglish: "Letters: Raa (ر) and Laam (ل)",
              duration: "Seamless blend, 0 extra hum",
              explanationEnglish: "Merge the Noon completely into Raa or Laam with NO nasal humming. The 'N' vanishes 100%.",
              examples: [
                {
                  arabic: "﴿ مِن رَّبِّهِمْ ﴾",
                  transliteration: "mir-rabbihim",
                  translation: "From their Lord",
                  surah: "Surah Al-Baqarah",
                  noteEnglish: "Do NOT say 'min-rabbihim'. The Noon vanishes completely into R: say 'mir-rabbihim' directly."
                },
                {
                  arabic: "﴿ هُدًى لِّلْمُتَّقِينَ ۝ ﴾",
                  transliteration: "hudal-lil-muttaqeen",
                  translation: "Guidance for the mindful of Allah",
                  surah: "Surah Al-Baqarah (Ayah 2)",
                  noteEnglish: "The Tanween merges into Laam (ل): say 'hudal-lil' with no humming."
                }
              ]
            }
          ]
        },
        {
          id: "iqlab",
          nameArabic: "الإِقْلَابُ",
          nameEnglish: "Iqlab — Converting Noon into Meem (ـۢ)",
          nameUrdu: "اقلاب (نون کو میم سے بدلنا)",
          explanationEnglish: "How to pronounce: When a Noon Saakin (نْ) or Tanween is followed by the letter Bā' (ب), turn the 'N' into a gentle 'M' sound. Close your lips gently and hold a soft nasal hum for 2 counts. In the Quran, this is clearly marked by a small elevated Meem: (ـۢ).",
          explanationUrdu: "نون ساکن یا تنوین کے بعد حرف 'ب' آئے تو نون کی آواز کو میم میں بدل کر 2 حرکات غنہ کے ساتھ پڑھا جاتا ہے۔ اس پر چھوٹی میم (ـۢ) لکھی ہوتی ہے۔",
          durationEnglish: "2 counts with soft nasal hum",
          letters: ["ب"],
          lettersNamesEnglish: "Bā' (ب) only",
          colorCode: "iqlab",
          examples: [
            {
              arabic: "﴿ مِنۢ بَعْدِ ﴾",
              transliteration: "mim-ba'd",
              translation: "After that",
              surah: "Surah Al-Baqarah",
              noteEnglish: "Look at the small Meem (ـۢ) above the Noon. Read it as 'mim-ba'd' with lips gently touching and a 2-count nasal hum."
            },
            {
              arabic: "﴿ أَنۢبِئْهُم بِأَسْمَآئِهِمْ ﴾",
              transliteration: "ambi'hum",
              translation: "Inform them of their names",
              surah: "Surah Al-Baqarah (Ayah 33)",
              noteEnglish: "Inside the word, the Noon before Bā' turns into M: pronounce as 'ambi'hum'."
            },
            {
              arabic: "﴿ وَاللَّهُ عَلِيمٌۢ بِذَاتِ الصُّدُورِ ۝ ﴾",
              transliteration: "'aleemum-bidhātis-sudoor",
              translation: "And Allah is All-Knowing of what is in the hearts",
              surah: "Surah Ali 'Imran",
              noteEnglish: "The Tanween has a small Meem symbol (ـۢ) next to Dammah. Read as '-mum-bi'."
            }
          ]
        },
        {
          id: "ikhfa-haqiqi",
          nameArabic: "الإِخْفَاءُ الحَقِيقِيُّ",
          nameEnglish: "Ikhfa Haqiqi — Hiding the 'N' with Nasal Hum",
          nameUrdu: "اخفاء حقیقی (ناک میں چھپا کر غنہ کرنا)",
          explanationEnglish: "How to pronounce: Hide the 'N' sound by preparing your mouth for the next letter, letting the breath flow primarily through your nose with a continuous hum held for 2 counts. If the next letter is heavy, make the hum deep and full; if light, keep it soft and light.",
          explanationUrdu: "نون کی آواز کو ظاہر کیے بغیر، اگلے حرف کی تیاری کرتے ہوئے ناک کے بانسے میں 2 حرکات تک غنہ کرنا۔",
          durationEnglish: "2 counts with continuous nasal hum",
          letters: ["ت", "ث", "ج", "د", "ذ", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ف", "ق", "ك"],
          lettersNamesEnglish: "15 Letters: Taa, Thaa, Jeem, Daal, Dhaal, Zaa, Seen, Sheen, Saad, Daad, Taa, Dhaa, Faa, Qaaf, Kaaf",
          colorCode: "ikhfa",
          examples: [
            {
              arabic: "﴿ كُنتُمْ خَيْرَ أُمَّةٍ ﴾",
              transliteration: "kuntum khayra ummah",
              translation: "You are the best nation produced for mankind",
              surah: "Surah Ali 'Imran (Ayah 110)",
              noteEnglish: "Inside 'kuntum', prepare your tongue for Taa (ت) while holding a soft 2-count nasal sound."
            },
            {
              arabic: "﴿ مِن قَبْلُ ﴾",
              transliteration: "ming-qabl",
              translation: "From before",
              surah: "Surah Al-Baqarah",
              noteEnglish: "Because Qaaf (ق) is a deep heavy letter, make the nasal hum heavy and full (Tafkheem)."
            },
            {
              arabic: "﴿ وَمَا مِن دَآبَّةٍ ﴾",
              transliteration: "min-dāaaabbah",
              translation: "And there is no creature on earth",
              surah: "Surah Hud",
              noteEnglish: "Because Daal (د) is a light letter, keep the nasal hum sweet and light (Tarqeeq)."
            },
            {
              arabic: "﴿ أَنفُسَكُمْ ﴾",
              transliteration: "anfusakum",
              translation: "Yourselves",
              surah: "Surah Al-Baqarah",
              noteEnglish: "Position your top teeth against your lower lip for Faa (ف) while humming for 2 counts."
            }
          ]
        }
      ]
    },

    {
      id: "meem-sakinah",
      titleArabic: "أَحْكَامُ المِيمِ السَّاكِنَةِ",
      titleEnglish: "2. Rules of Meem Saakin",
      titleUrdu: "میم ساکن کے تین احکام",
      summaryEnglish: "The 3 rules when encountering a resting Meem (مْ): Ikhfa Shafawi (Hiding with lips), Idgham Mithlayn (Merging identical Meems), and Izhar Shafawi (Clear lip pronunciation).",
      mark: "مْ",
      rules: [
        {
          id: "ikhfa-shafawi",
          nameArabic: "الإِخْفَاءُ الشَّفَوِيُّ",
          nameEnglish: "Ikhfa Shafawi — Labial Hiding",
          nameUrdu: "اخفاء شفوی (ہونٹوں سے چھپانا)",
          explanationEnglish: "How to pronounce: When a Meem Saakin (مْ) meets the letter Bā' (ب), touch your lips together softly without squeezing hard, and hold a 2-count nasal hum.",
          explanationUrdu: "میم ساکن کے بعد 'ب' آئے تو میم کو ہونٹوں سے نرمی کے ساتھ چھپا کر 2 حرکات غنہ کے ساتھ پڑھا جائے گا۔",
          durationEnglish: "2 counts with gentle lip contact and nasal hum",
          letters: ["ب"],
          lettersNamesEnglish: "Bā' (ب) only",
          colorCode: "ikhfa",
          examples: [
            {
              arabic: "﴿ تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ ۝ ﴾",
              transliteration: "tarmeehim bi-ḥijārah",
              translation: "Striking them with stones of baked clay",
              surah: "Surah Al-Feel (Ayah 4)",
              noteEnglish: "The Meem meets Bā': close your lips softly and hum for 2 counts before releasing into 'bi-ḥijārah'."
            },
            {
              arabic: "﴿ وَمَن يَعْتَصِم بِاللَّهِ ﴾",
              transliteration: "ya'tasim billāh",
              translation: "And whoever holds firmly to Allah",
              surah: "Surah Ali 'Imran",
              noteEnglish: "Soft lip contact on Meem with a 2-count hum transitioning into Bā'."
            }
          ]
        },
        {
          id: "idgham-shafawi",
          nameArabic: "إِدْغَامُ المِثْلَيْنِ الصَّغِيرُ",
          nameEnglish: "Idgham Mithlayn — Merging Two Meems",
          nameUrdu: "ادغامِ مثلین / ادغام شفوی",
          explanationEnglish: "How to pronounce: When a Meem Saakin (مْ) is followed by another Meem (م), combine them into one doubled Meem (مّ) with a full 2-count nasal hum.",
          explanationUrdu: "میم ساکن کے بعد دوسری میم آئے تو دونوں کو ملا کر مشدد میم کی طرح 2 حرکات غنہ کے ساتھ ادا کیا جاتا ہے۔",
          durationEnglish: "2 counts with full nasal hum",
          letters: ["م"],
          lettersNamesEnglish: "Meem (م) only",
          colorCode: "idgham",
          examples: [
            {
              arabic: "﴿ لَهُم مَّا يَشَاءُونَ فِيهَا ﴾",
              transliteration: "lahum-mā yashāaa'oon",
              translation: "They will have whatever they desire therein",
              surah: "Surah Qaf (Ayah 35)",
              noteEnglish: "The two Meems become one doubled 'M': hold 'lahum-mā' for 2 counts."
            },
            {
              arabic: "﴿ فِي قُلُوبِهِم مَّرَضٌ ﴾",
              transliteration: "fee quloobihim-maraḍ",
              translation: "In their hearts is disease",
              surah: "Surah Al-Baqarah (Ayah 10)",
              noteEnglish: "Blend both Meems into a single doubled Meem with a 2-count hum."
            }
          ]
        },
        {
          id: "izhar-shafawi",
          nameArabic: "الإِظْهَارُ الشَّفَوِيُّ",
          nameEnglish: "Izhar Shafawi — Clear Lip Pronunciation",
          nameUrdu: "اظہارِ شفوی (صاف ادا کرنا)",
          explanationEnglish: "How to pronounce: When Meem Saakin meets any of the remaining 26 letters (everything except B and M), pronounce the 'M' cleanly with closed lips. Do NOT hold any nasal hum. Be especially careful before Waw (و) and Faa (ف) so the Meem doesn't accidentally vanish!",
          explanationUrdu: "میم ساکن کے بعد ب اور م کے علاوہ باقی 26 حروف میں سے کوئی حرف آئے تو میم کو بغیر غنہ کے بالکل صاف پڑھا جائے گا۔",
          durationEnglish: "1 natural count (clean closure, no hum)",
          letters: ["All remaining 26 letters"],
          lettersNamesEnglish: "All Arabic letters except Bā' (ب) and Meem (م)",
          colorCode: "izhar",
          examples: [
            {
              arabic: "﴿ أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ ﴾",
              transliteration: "alam tara",
              translation: "Have you not seen how your Lord dealt with...",
              surah: "Surah Al-Feel (Ayah 1)",
              noteEnglish: "Close lips cleanly for 'alam' and move straight to 'tara' without holding any hum."
            },
            {
              arabic: "﴿ عَلَيْهِمْ وَلَا الضَّآلِّينَ ۝ ﴾",
              transliteration: "'alayhim wa lad-dāaaalleen",
              translation: "Upon them, nor of those who have gone astray",
              surah: "Surah Al-Fatihah (Ayah 7)",
              noteEnglish: "Important reminder for Mum: Make sure the 'M' in 'alayhim' is clearly heard before moving to 'wa'."
            }
          ]
        }
      ]
    },

    {
      id: "qalqalah",
      titleArabic: "حُرُوفُ القَلْقَلَةِ وَمَرَاتِبُهَا",
      titleEnglish: "3. Qalqalah — Echo & Bouncing Letters",
      titleUrdu: "حروفِ قلقلہ (جھٹکے سے ادا ہونے والے حروف)",
      summaryEnglish: "The 5 bouncing letters: Qaaf (ق), Taa (ط), Bā' (ب), Jeem (ج), Daal (د). When resting on a Sukoon or stopping at an Ayah end, they produce an energetic echoing bounce.",
      mark: "قُطْبُ جَدٍّ",
      rules: [
        {
          id: "maratib-qalqalah",
          nameArabic: "مَرَاتِبُ القَلْقَلَةِ الثَّلَاثُ",
          nameEnglish: "The 3 Levels of Qalqalah Echo",
          nameUrdu: "قلقلہ کے تین درجات (مضبوط، درمیانہ، اور ہلکا)",
          explanationEnglish: "How to pronounce: The 5 letters gathered in 'QATB JADD' (قُطْبُ جَدٍّ) must bounce off your vocal tract when resting. Do not swallow the letter; let it echo cleanly like a bouncing ball.",
          explanationUrdu: "حروفِ قلقلہ (ق، ط، ب، ج، د) جب ساکن ہوں تو ان کی آواز کو مخرج سے ایک جھٹکے یا گونج کے ساتھ الگ کیا جاتا ہے۔",
          letters: ["ق", "ط", "ب", "ج", "د"],
          lettersNamesEnglish: "Qaaf (ق), Taa (ط), Bā' (ب), Jeem (ج), Daal (د) — grouped in 'QATB JADD'",
          colorCode: "qalqalah",
          subtypes: [
            {
              nameArabic: "قَلْقَلَةٌ كُبْرَى",
              titleEnglish: "1. Major Qalqalah (Strongest Echo)",
              duration: "Maximum resonant bounce",
              explanationEnglish: "Occurs when you stop at the end of an Ayah on a doubled (Shaddah) letter.",
              examples: [
                {
                  arabic: "﴿ تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ ﴾",
                  transliteration: "wa-tabb ۝",
                  translation: "Perished were the two hands of Abu Lahab, and perished is he",
                  surah: "Surah Al-Masad (Ayah 1)",
                  noteEnglish: "Stopping on the doubled Bā' (بّ) gives the strongest, most resonant bounce."
                },
                {
                  arabic: "﴿ ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الحَقُّ ۝ ﴾",
                  transliteration: "al-ḥaqq ۝",
                  translation: "That is because Allah is the Truth",
                  surah: "Surah Al-Hajj",
                  noteEnglish: "Stopping on the doubled Qaaf (قّ) produces a deep, powerful echo."
                }
              ]
            },
            {
              nameArabic: "قَلْقَلَةٌ وُسْطَى",
              titleEnglish: "2. Medium Qalqalah (Clear End-of-Word Bounce)",
              duration: "Clear noticeable bounce",
              explanationEnglish: "Occurs when you stop at the end of an Ayah on a single Qalqalah letter.",
              examples: [
                {
                  arabic: "﴿ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ ﴾",
                  transliteration: "al-falaq ۝",
                  translation: "Say, I seek refuge in the Lord of daybreak",
                  surah: "Surah Al-Falaq (Ayah 1)",
                  noteEnglish: "The final Qaaf (ق) bounces cleanly when you stop on the verse."
                },
                {
                  arabic: "﴿ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ ﴾",
                  transliteration: "aḥad ۝",
                  translation: "Say, He is Allah, [who is] One",
                  surah: "Surah Al-Ikhlas (Ayah 1)",
                  noteEnglish: "The final Daal (د) echoes with a clear, crisp tap."
                }
              ]
            },
            {
              nameArabic: "قَلْقَلَةٌ صُغْرَى",
              titleEnglish: "3. Minor Qalqalah (Quick Mid-Word Bounce)",
              duration: "Quick internal tap",
              explanationEnglish: "Occurs inside a word or mid-sentence when the letter has a Sukoon (ْ).",
              examples: [
                {
                  arabic: "﴿ يَقْطَعُونَ ﴾",
                  transliteration: "yaq-ṭa'oon",
                  translation: "They sever",
                  surah: "Surah Al-Baqarah",
                  noteEnglish: "The Qaaf (قْ) in the middle gets a quick, clean tap without breaking the rhythm."
                },
                {
                  arabic: "﴿ تَجْرِي مِن تَحْتِهَا الأَنْهَارُ ﴾",
                  transliteration: "taj-ree",
                  translation: "Flowing beneath which are rivers",
                  surah: "Surah Al-Baqarah",
                  noteEnglish: "The Jeem (جْ) in 'taj-ree' has a subtle, pleasant bounce."
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "madd-rules",
      titleArabic: "أَحْكَامُ المَدِّ وَأَقْسَامُهُ",
      titleEnglish: "4. Rules of Madd (Prolongation & Counts)",
      titleUrdu: "مد کے احکام اور کھینچنے کی مقداریں",
      summaryEnglish: "How to elongate vowels on Alif (ا), Waw (و), and Yaa (ي). Understand 2 counts, 4-5 counts, and the compulsory 6 counts (Madd Lazim).",
      mark: "ـٓـ",
      rules: [
        {
          id: "madd-tabiee",
          nameArabic: "المَدُّ الطَّبِيعِيُّ",
          nameEnglish: "Madd Tabī'ī — Natural 2 Counts",
          nameUrdu: "مدِ طبعی / اصلی (قدرتی 2 حرکات)",
          explanationEnglish: "How to pronounce: The standard, natural prolongation of 2 counts on the 3 vowel letters (Alif preceded by Fathah, Waw preceded by Dammah, Yaa preceded by Kasrah). Do not rush it, and do not over-stretch it.",
          explanationUrdu: "کسی سبب (ہمزہ یا سکون) کے بغیر حرفِ مد کو اپنی قدرتی مقدار یعنی 2 حرکات تک کھینچنا۔",
          durationEnglish: "2 counts (approx. 1 second, the time to fold/unfold a finger)",
          letters: ["ا", "و", "ي"],
          lettersNamesEnglish: "Alif (ا), Waw (و), Yaa (ي)",
          colorCode: "madd",
          examples: [
            {
              arabic: "﴿ نُوحِيهَآ إِلَيْكَ ﴾",
              transliteration: "noo-ḥee-hā",
              translation: "We reveal it to you",
              surah: "Surah Hud (Ayah 49)",
              noteEnglish: "This single word contains all 3 natural Madd letters: 'noo' (Waw), 'ḥee' (Yaa), 'hā' (Alif) — each held for 2 counts."
            },
            {
              arabic: "﴿ قَالَ رَبِّ اغْفِرْ لِي ﴾",
              transliteration: "qāla rabbigh-fir lee",
              translation: "He said, My Lord, forgive me",
              surah: "Surah Sad",
              noteEnglish: "The Alif in 'qāla' is held for a natural 2 counts."
            }
          ]
        },
        {
          id: "madd-muttasil",
          nameArabic: "المَدُّ الوَاجِبُ المُتَّصِلُ",
          nameEnglish: "Madd Muttaṣil — Connected Mandatory Madd (4 to 5 Counts)",
          nameUrdu: "مدِ متصل (ایک ہی کلمہ میں مد کی لہر اور ہمزہ)",
          explanationEnglish: "How to pronounce: When a Madd letter and a Hamzah (ء) appear inside the EXACT SAME word. Obligatory to stretch for 4 to 5 counts. Look for the wavy wave sign (ـٓ) above the letter.",
          explanationUrdu: "جب حرفِ مد کے بعد ہمزہ اسی ایک لفظ کے اندر آئے تو اسے 4 سے 5 حرکات تک کھینچنا واجب ہے۔",
          durationEnglish: "4 to 5 counts (marked by wave ~ symbol)",
          letters: ["Wavy sign (ـٓ) followed by Hamzah inside same word"],
          colorCode: "madd",
          examples: [
            {
              arabic: "﴿ إِذَا جَآءَ نَصْرُ اللَّهِ وَالفَتْحُ ۝ ﴾",
              transliteration: "jāaa'a",
              translation: "When the victory of Allah has come and the conquest",
              surah: "Surah An-Nasr (Ayah 1)",
              noteEnglish: "Look at the wave on 'jāaa'a'. The Alif and Hamzah are in one word. Stretch for 4 to 5 counts."
            },
            {
              arabic: "﴿ وَالسَّمَآءِ وَالطَّارِقِ ۝ ﴾",
              transliteration: "as-samāaa'i",
              translation: "By the sky and the night comer",
              surah: "Surah At-Tariq (Ayah 1)",
              noteEnglish: "Stretch 'as-samāaa'i' for 4 to 5 counts before pronouncing the Hamzah."
            }
          ]
        },
        {
          id: "madd-munfasil",
          nameArabic: "المَدُّ الجَائِزُ المُنْفَصِلُ",
          nameEnglish: "Madd Munfaṣil — Separated Madd (4 to 5 Counts)",
          nameUrdu: "مدِ منفصل (دو الگ الفاظ کے درمیان مد)",
          explanationEnglish: "How to pronounce: When the Madd letter ends the first word, and the Hamzah starts the very next word. Stretch for 4 to 5 counts.",
          explanationUrdu: "حرفِ مد پہلے لفظ کے آخر میں ہو اور ہمزہ اگلے لفظ کے شروع میں آئے تو اسے 4 سے 5 حرکات تک کھینچا جاتا ہے۔",
          durationEnglish: "4 to 5 counts",
          letters: ["Madd letter at end of word + Hamzah at start of next word"],
          colorCode: "madd",
          examples: [
            {
              arabic: "﴿ إِنَّآ أَعْطَيْنَاكَ الْكَوْثَرَ ۝ ﴾",
              transliteration: "innāaa a'ṭaynākal-kawthar",
              translation: "Indeed, We have granted you al-Kawthar (abundance)",
              surah: "Surah Al-Kawthar (Ayah 1)",
              noteEnglish: "Notice 'innā' ends with Alif, and 'a'ṭaynāk' starts with Hamzah. Stretch 'innāaa' for 4 to 5 counts."
            },
            {
              arabic: "﴿ يَآ أَيُّهَا الَّذِينَ ءَامَنُوا ﴾",
              transliteration: "yāaa ayyuhā",
              translation: "O you who have believed",
              surah: "Surah Al-Baqarah",
              noteEnglish: "Stretch 'yāaa' for 4 to 5 counts before saying 'ayyuhā'."
            }
          ]
        },
        {
          id: "madd-lazim",
          nameArabic: "المَدُّ اللَّازِمُ",
          nameEnglish: "Madd Lāzim — Compulsory Maximum 6 Counts",
          nameUrdu: "مدِ لازم (سب سے طویل مد - 6 حرکات لازمی)",
          explanationEnglish: "How to pronounce: The longest Madd in the Quran. When a Madd letter is followed by a permanent Sukoon or Shaddah. You MUST hold this for the full 6 counts (approx. 3 seconds) without shortening it.",
          explanationUrdu: "حرفِ مد کے بعد اصلی سکون یا تشدید آئے تو اس کو پورے 6 حرکات تک کھینچنا ہر قاری پر لازم ہے۔",
          durationEnglish: "Full 6 counts (Mandatory, non-negotiable)",
          letters: ["Madd letter + Shaddah (ّ) or permanent Sukoon (ْ)"],
          colorCode: "madd",
          examples: [
            {
              arabic: "﴿ غَيْرِ المَغْضُوبِ عَلَيْهِمْ وَلَا الضَّآلِّينَ ۝ ﴾",
              transliteration: "wa lad-dāaaaaalleen",
              translation: "Not of those who have evoked [Your] anger or of those who are astray",
              surah: "Surah Al-Fatihah (Ayah 7)",
              noteEnglish: "The famous ending of Surah Al-Fatihah. Hold 'dāaaaaal-' for a full, steady 6 counts before pressing into the doubled Laam."
            },
            {
              arabic: "﴿ الٓمٓ ۝ ﴾",
              transliteration: "Alif-Lāaaam-Meeeeeem",
              translation: "Alif, Lam, Meem",
              surah: "Surah Al-Baqarah (Ayah 1)",
              noteEnglish: "Hold Laam for 6 counts, merge with Ghunnah, and hold Meem for 6 counts."
            }
          ]
        },
        {
          id: "madd-arid",
          nameArabic: "مَدُّ العَارِضِ لِلسُّكُونِ",
          nameEnglish: "Madd 'Āriḍ — Stop-Induced Madd (2, 4, or 6 Counts)",
          nameUrdu: "مدِ عارض للسکون (آیت کے آخر پر وقف کی مد)",
          explanationEnglish: "How to pronounce: When stopping at the end of a verse where the second-to-last letter is an Alif, Waw, or Yaa. You may hold it for 2, 4, or 6 counts (4 counts is the recommended balanced choice).",
          explanationUrdu: "آیت کے خاتمے پر وقف کرتے ہوئے آخری سے پہلے والے حرفِ مد کو 2، 4 یا 6 حرکات تک کھینچ سکتے ہیں۔ 4 حرکات سب سے افضل ہے۔",
          durationEnglish: "2, 4, or 6 counts (4 counts is ideal)",
          colorCode: "madd",
          examples: [
            {
              arabic: "﴿ الرَّحْمَٰنِ الرَّحِيمِ ۝ ﴾",
              transliteration: "ar-raḥmānir-raḥeeeem ۝",
              translation: "The Entirely Merciful, the Especially Merciful",
              surah: "Surah Al-Fatihah (Ayah 3)",
              noteEnglish: "Stopping at the end of the Ayah on 'ar-raḥeeem' allows Mum to hold the Yaa comfortably for 4 counts."
            },
            {
              arabic: "﴿ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ ﴾",
              transliteration: "al-'ālameeeen ۝",
              translation: "[All] praise is [due] to Allah, Lord of the worlds",
              surah: "Surah Al-Fatihah (Ayah 2)",
              noteEnglish: "Hold '-meeeen' for 4 counts as you pause at the Ayah stop circle ۝."
            }
          ]
        }
      ]
    },

    {
      id: "special-rules",
      titleArabic: "أَحْكَامُ الرَّاءِ وَاللَّامِ وَرُمُوزُ الأَوْقَافِ",
      titleEnglish: "5. Heavy Letters & Quranic Stop Signs",
      titleUrdu: "راء، لام اور قرآن مجید کے رموزِ اوقاف",
      summaryEnglish: "How to pronounce heavy/light letters (Raa and Laam in Allah's name) and the authoritative pause marks (Waqf) found in the Mushaf.",
      mark: "۝",
      rules: [
        {
          id: "ahkam-ra",
          nameArabic: "أَحْكَامُ الرَّاءِ",
          nameEnglish: "Rules of Rā' — Heavy (Full) vs Light (Smile)",
          nameUrdu: "راء کے احکام (پر اور باریک پڑھنا)",
          explanationEnglish: "How to pronounce: When Rā' (ر) has a Fathah (رَ) or Dammah (رُ), pronounce it thick and heavy with mouth fullness (Tafkheem). When it has a Kasrah (رِ), pronounce it light and thin like a gentle smile (Tarqeeq).",
          explanationUrdu: "راء پر زبر یا پیش ہو تو منہ بھر کر موٹی (پر)، اور زیر ہو تو مسکراہٹ کے ساتھ باریک پڑھی جاتی ہے۔",
          durationEnglish: "Normal duration with tongue curvature",
          letters: ["ر"],
          colorCode: "ra",
          subtypes: [
            {
              nameArabic: "رَاءٌ مُفَخَّمَةٌ",
              titleEnglish: "Heavy / Thick Rā' (Tafkheem)",
              explanationEnglish: "Read with a deep, full sound when it has Fathah (رَ) or Dammah (رُ).",
              examples: [
                {
                  arabic: "﴿ رَبَّنَآ ءَاتِنَا فِي الدُّنْيَا حَسَنَةً ﴾",
                  transliteration: "Rabbanā ātinā...",
                  translation: "Our Lord, give us in this world [that which is] good",
                  surah: "Surah Al-Baqarah",
                  noteEnglish: "Rā' with Fathah: pronounce 'Rabbanā' with a full, strong mouth."
                },
                {
                  arabic: "﴿ رُزِقْنَا مِن قَبْلُ ﴾",
                  transliteration: "Ruziqnā",
                  translation: "We were provided with before",
                  surah: "Surah Al-Baqarah",
                  noteEnglish: "Rā' with Dammah: pronounce 'Ruziqnā' deep and thick."
                }
              ]
            },
            {
              nameArabic: "رَاءٌ مُرَقَّقَةٌ",
              titleEnglish: "Light / Thin Rā' (Tarqeeq)",
              explanationEnglish: "Read with a light, sweet smile sound when it has Kasrah (رِ).",
              examples: [
                {
                  arabic: "﴿ رِجَالٌ لَّا تُلْهِيهِمْ تِجَارَةٌ ﴾",
                  transliteration: "Rijālun",
                  translation: "Men whom neither commerce nor sale distracts",
                  surah: "Surah An-Nur",
                  noteEnglish: "Rā' with Kasrah: pronounce 'Rijāl' thin and soft, smiling slightly."
                },
                {
                  arabic: "﴿ فِرْعَوْنَ وَهَامَانَ ﴾",
                  transliteration: "Fir'awn",
                  translation: "Pharaoh and Haman",
                  surah: "Surah Al-Qasas",
                  noteEnglish: "Rā' resting after a Kasrah: keep 'Fir-' delicate and light."
                }
              ]
            }
          ]
        },
        {
          id: "lam-jalalah",
          nameArabic: "لَامُ لَفْظِ الجَلَالَةِ «اللَّهِ»",
          nameEnglish: "The Lām in the Name of Allah (اللَّه)",
          nameUrdu: "لفظِ اللہ کا لام (پر اور باریک)",
          explanationEnglish: "How to pronounce: If the letter before 'ALLAH' has a Fathah or Dammah, pronounce the Lām deep, heavy, and majestic. If the letter before it has a Kasrah, pronounce it light and gentle.",
          explanationUrdu: "لفظِ اللہ سے پہلے زبر یا پیش ہو تو لام موٹا (پر)، اور زیر ہو تو باریک پڑھا جاتا ہے۔",
          durationEnglish: "Majestic hold",
          letters: ["ل فِي «اللَّهِ»"],
          colorCode: "lam",
          examples: [
            {
              arabic: "﴿ شَهِدَ اللَّهُ أَنَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ﴾",
              transliteration: "Shahidal-lāhu",
              translation: "Allah witnesses that there is no deity except Him",
              surah: "Surah Ali 'Imran (Ayah 18)",
              noteEnglish: "Preceded by Fathah (شَهِدَ): pronounce the 'L' deep and heavy: 'Shahidal-Lāh'."
            },
            {
              arabic: "﴿ نَصْرُ اللَّهِ وَالفَتْحُ ﴾",
              transliteration: "Nasrul-lāhi",
              translation: "The victory of Allah and the conquest",
              surah: "Surah An-Nasr",
              noteEnglish: "Preceded by Dammah (نَصْرُ): pronounce 'Nasrul-Lāh' full and grand."
            },
            {
              arabic: "﴿ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ ﴾",
              transliteration: "Bismil-lāhir-Raḥmānir-Raḥeem",
              translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
              surah: "Surah Al-Fatihah",
              noteEnglish: "Preceded by Kasrah (بِسْمِ): pronounce 'Bismil-lāh' light, sweet, and soft."
            }
          ]
        },
        {
          id: "stop-signs",
          nameArabic: "رُمُوزُ ضَبْطِ الوَقْفِ فِي المُصْحَفِ",
          nameEnglish: "Quranic Stop Signs (Where to Pause & Breathe)",
          nameUrdu: "رموزِ اوقاف (ٹھہرنے اور سانس لینے کے نشانات)",
          explanationEnglish: "These small letters placed above words tell you exactly where it is recommended to pause, where you must not pause, and where you may catch your breath.",
          explanationUrdu: "تلاوت کے دوران کہاں رکنا ضروری ہے، کہاں رکنا منع ہے، اور کہاں مرضی ہے، اس کے واضح نشانات۔",
          colorCode: "waqf",
          signs: [
            {
              symbol: "(مـ)",
              nameArabic: "الوَقْفُ اللَّازِمُ",
              nameEnglish: "Must Stop (Compulsory Pause)",
              meaningEnglish: "You MUST stop here. Continuing without a pause will connect two different ideas and alter the meaning of the verse.",
              urduExplanation: "یہاں رکنا لازم ہے ورنہ معانی میں خرابی کا اندیشہ ہے۔",
              exampleArabic: "﴿ إِنَّمَا يَسْتَجِيبُ الَّذِينَ يَسْمَعُونَ ۘ وَالْمَوْتَىٰ يَبْعَثُهُمُ اللَّهُ ﴾",
              exampleSurah: "Surah Al-An'am (Ayah 36)",
              exampleNote: "Stop at 'yasma'oon ۘ' before reciting 'and the dead Allah will resurrect'."
            },
            {
              symbol: "(لا)",
              nameArabic: "النَّهْيُ عَنِ الوَقْفِ",
              nameEnglish: "Do Not Stop (Keep Reading)",
              meaningEnglish: "Do NOT stop here. The sentence is not yet complete. Keep reading through to complete the meaning.",
              urduExplanation: "یہاں نہیں رکنا؛ بات آگے جڑی ہوئی ہے، تلاوت جاری رکھیں۔",
              exampleArabic: "﴿ الَّذِينَ تَتَوَفَّاهُمُ الْمَلَائِكَةُ طَيِّبِينَ ۙ يَقُولُونَ ﴾",
              exampleSurah: "Surah An-Nahl (Ayah 32)",
              exampleNote: "Do not pause between 'good' and 'they say'."
            },
            {
              symbol: "(ج)",
              nameArabic: "الوَقْفُ الجَائِزُ",
              nameEnglish: "Allowed to Stop (Permissible Pause)",
              meaningEnglish: "You are allowed to pause and take a breath, or keep reading. Both choices are completely fine.",
              urduExplanation: "جائز وقف: رکنا اور آگے پڑھنا دونوں درست ہیں۔",
              exampleArabic: "﴿ ذَٰلِكَ الْفَضْلُ مِنَ اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ عَلِيمًا ۝ ﴾",
              exampleSurah: "Surah An-Nisa (Ayah 70)",
              exampleNote: "Pause or continue smoothly at the (ۚ) mark."
            },
            {
              symbol: "(قلى)",
              nameArabic: "الوَقْفُ أَوْلَى",
              nameEnglish: "Better to Stop (Recommended Pause)",
              meaningEnglish: "It is preferred and better to stop here and take a breath, though continuing is still permissible.",
              urduExplanation: "ٹھہرنا بہتر ہے، اگرچہ ملانا بھی جائز ہے۔",
              exampleArabic: "﴿ قُل رَّبِّي أَعْلَمُ بِعِدَّتِهِم ۗ مَّا يَعْلَمُهُمْ إِلَّا قَلِيلٌ ﴾",
              exampleSurah: "Surah Al-Kahf (Ayah 22)",
              exampleNote: "Pausing here (ۗ) completes the first thought clearly."
            },
            {
              symbol: "(صلى)",
              nameArabic: "الوَصْلُ أَوْلَى",
              nameEnglish: "Better to Continue (Recommended to Keep Reading)",
              meaningEnglish: "It is preferred to continue reading without stopping, though stopping is allowed if you run out of breath.",
              urduExplanation: "ملا کر پڑھنا بہتر ہے، لیکن سانس ٹوٹے تو رکنا بھی جائز ہے۔",
              exampleArabic: "﴿ وَإِن يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ ۖ ﴾",
              exampleSurah: "Surah Al-An'am (Ayah 17)",
              exampleNote: "Continue reciting smoothly through the (ۖ) mark."
            },
            {
              symbol: "(ۛ ... ۛ)",
              nameArabic: "تَعَانُقُ الوَقْفِ",
              nameEnglish: "Embrace Stop (Three Dots: Pause at One Only)",
              meaningEnglish: "Whenever you see two sets of three dots: you may pause at the first OR the second, but NEVER pause at both.",
              urduExplanation: "تین نقطوں کے دو جوڑے: کسی ایک پر رک سکتے ہیں، دونوں پر نہیں۔",
              exampleArabic: "﴿ ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ ۝ ﴾",
              exampleSurah: "Surah Al-Baqarah (Ayah 2)",
              exampleNote: "Pause either after 'lā rayb' OR after 'feeh', never at both."
            }
          ]
        }
      ]
    }
  ],

  quiz: [
    {
      id: "q1",
      questionEnglish: "In the verse ﴿ مَنْ ءَامَنَ ﴾, what Tajweed rule applies to the Noon Saakin?",
      questionUrdu: "﴿ مَنْ ءَامَنَ ﴾ میں نون ساکن پر کون سا قاعدہ لاگو ہوتا ہے؟",
      arabicSnippet: "﴿ مَنْ ءَامَنَ ﴾",
      options: [
        { text: "Izhar Halqi — Clear Pronunciation (No Nasal Hum)", isCorrect: true },
        { text: "Idgham — Merging with Nasal Hum", isCorrect: false },
        { text: "Iqlab — Converting to Meem", isCorrect: false },
        { text: "Ikhfa — Hiding with Nasal Hum", isCorrect: false }
      ],
      explanationEnglish: "Correct! Because the letter following Noon is Hamzah (ء), which is one of the 6 Throat Letters. Throat letters always require Izhar: pronounce the 'N' crisp and clear with no humming.",
      explanationUrdu: "بالکل درست! کیونکہ نون کے بعد ہمزہ ہے جو حلق کے 6 حروف میں سے ہے، اس لیے یہاں نون کو بغیر غنہ کے صاف پڑھیں گے۔"
    },
    {
      id: "q2",
      questionEnglish: "Which letters produce the bouncing echo sound called Qalqalah?",
      questionUrdu: "حروفِ قلقلہ کن پانچ حروف پر مشتمل ہیں؟",
      arabicSnippet: "« قُطْبُ جَدٍّ »",
      options: [
        { text: "YARMALOON (ي ، ر ، م ، ل ، و ، ن)", isCorrect: false },
        { text: "QATB JADD (ق ، ط ، ب ، ج ، د)", isCorrect: true },
        { text: "YANMOO (ي ، ن ، م ، و)", isCorrect: false },
        { text: "Throat Letters (ء ، هـ ، ع ، ح ، غ ، خ)", isCorrect: false }
      ],
      explanationEnglish: "Correct! The 5 echoing letters are Qaaf (ق), Taa (ط), Bā' (ب), Jeem (ج), and Daal (د), gathered in the mnemonic 'Qatb Jadd'.",
      explanationUrdu: "صحیح! قلقلہ کے پانچوں حروف (ق، ط، ب، ج، د) ہیں جنہیں 'قطب جد' میں یاد رکھا جاتا ہے۔"
    },
    {
      id: "q3",
      questionEnglish: "How many counts must you hold Madd Lāzim in ﴿ وَلَا الضَّآلِّينَ ۝ ﴾?",
      questionUrdu: "﴿ وَلَا الضَّآلِّينَ ﴾ میں مدِ لازم کو کتنی حرکات تک کھینچنا ضروری ہے؟",
      arabicSnippet: "﴿ وَلَا الضَّآلِّينَ ۝ ﴾",
      options: [
        { text: "2 counts (quick)", isCorrect: false },
        { text: "4 counts (medium)", isCorrect: false },
        { text: "6 full counts (compulsory maximum)", isCorrect: true },
        { text: "1 count (no elongation)", isCorrect: false }
      ],
      explanationEnglish: "Correct! Madd Lāzim is compulsory for the full 6 counts (approx. 3 seconds). It is the longest stretch in the Quran.",
      explanationUrdu: "بالکل درست! مدِ لازم کو پورے 6 حرکات تک کھینچنا واجب اور لازمی ہے۔"
    },
    {
      id: "q4",
      questionEnglish: "When Noon Saakin meets the letter Bā' (ب) in Iqlāb, what letter does the 'N' turn into?",
      questionUrdu: "اقلاب کے قاعدے میں نون ساکن کی آواز کس حرف میں بدل جاتی ہے؟",
      arabicSnippet: "﴿ مِنۢ بَعْدِ ﴾",
      options: [
        { text: "A gentle Meem (M) with a 2-count nasal hum (ـۢ)", isCorrect: true },
        { text: "A Waw (W)", isCorrect: false },
        { text: "A Yaa (Y)", isCorrect: false },
        { text: "A Laam (L)", isCorrect: false }
      ],
      explanationEnglish: "Correct! The Noon turns into a soft Meem (م) sound with lips gently closed, marked in the Quran by the small Meem symbol (ـۢ).",
      explanationUrdu: "صحیح! نون کی آواز میم میں تبدیل ہو جاتی ہے اور قرآن پاک میں اس پر چھوٹی میم (ـۢ) لکھی ہوتی ہے۔"
    },
    {
      id: "q5",
      questionEnglish: "What does the Quranic stop sign (مـ) mean when you see it above a word?",
      questionUrdu: "قرآن پاک میں لفظ کے اوپر (مـ) کی علامت کا کیا مطلب ہے؟",
      arabicSnippet: "علامة (مـ)",
      options: [
        { text: "Must Stop (Compulsory Pause to protect the meaning)", isCorrect: true },
        { text: "Do Not Stop (Keep reading)", isCorrect: false },
        { text: "Better to continue", isCorrect: false },
        { text: "Read faster", isCorrect: false }
      ],
      explanationEnglish: "Correct! The small (مـ) indicates Waqf Lazim — a mandatory stop to ensure the sentence is not misunderstood.",
      explanationUrdu: "بالکل درست! یہ وقفِ لازم ہے جس پر ٹھہرنا ضروری ہے تاکہ بات کا مفہوم درست رہے۔"
    }
  ],

  adhkarPresets: [
    {
      id: "tasbeeh-zahra",
      titleEnglish: "Tasbeeh of Fatimah (After Salah)",
      titleUrdu: "تسبیحِ فاطمہ الزہراء (بعد نماز)",
      target: 33,
      items: [
        {
          arabic: "سُبْحَانَ اللَّهِ",
          translit: "SubḥānAllāh",
          meaning: "Glory be to Allah",
          urduMeaning: "اللہ پاک اور بے عیب ہے"
        },
        {
          arabic: "الْحَمْدُ لِلَّهِ",
          translit: "Alḥamdulillāh",
          meaning: "All praise belongs to Allah",
          urduMeaning: "تمام تعریفیں اللہ کے لیے ہیں"
        },
        {
          arabic: "اللَّهُ أَكْبَرُ",
          translit: "Allāhu Akbar",
          meaning: "Allah is the Greatest",
          urduMeaning: "اللہ سب سے بڑا ہے"
        }
      ]
    },
    {
      id: "istighfar",
      titleEnglish: "Daily Istighfar (Seeking Forgiveness)",
      titleUrdu: "استغفار اور توبہ",
      target: 100,
      items: [
        {
          arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ",
          translit: "Astaghfirullāhal-'Aẓeem wa atoobu ilayh",
          meaning: "I seek forgiveness of Allah the Magnificent and repent to Him",
          urduMeaning: "میں اللہ عظیم سے بخشش مانگتی ہوں اور اس کے حضور توبہ کرتی ہوں"
        }
      ]
    },
    {
      id: "durood",
      titleEnglish: "Salawat & Durood on the Prophet ﷺ",
      titleUrdu: "درودِ پاک پر نور",
      target: 100,
      items: [
        {
          arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ",
          translit: "Allāhumma salli 'alā Muḥammadin wa 'alā āli Muḥammad",
          meaning: "O Allah, send blessings upon Muhammad and upon the family of Muhammad",
          urduMeaning: "اے اللہ! محمد ﷺ اور ان کی آل پر رحمتیں نازل فرما"
        }
      ]
    },
    {
      id: "tahlil",
      titleEnglish: "Kalimah of Tawheed (Best of Remembrance)",
      titleUrdu: "کلمہ توحید",
      target: 100,
      items: [
        {
          arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
          translit: "Lā ilāha illallāhu waḥdahu lā shareeka lah",
          meaning: "There is no deity except Allah alone, without partner",
          urduMeaning: "اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں"
        }
      ]
    },
    {
      id: "subhanallah-wa-bihamdihi",
      titleEnglish: "Two Words Beloved to the Most Merciful",
      titleUrdu: "سبحان اللہ وبحمدہ سبحان اللہ العظیم",
      target: 100,
      items: [
        {
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
          translit: "SubḥānAllāhi wa biḥamdih, SubḥānAllāhil-'Aẓeem",
          meaning: "Glory be to Allah and His is the praise; Glory be to Allah the Magnificent",
          urduMeaning: "اللہ اپنی حمد کے ساتھ پاک ہے، اللہ عظمت والا پاک ہے"
        }
      ]
    },
    {
      id: "hawqalah",
      titleEnglish: "Treasure from Beneath the Throne",
      titleUrdu: "لا حول ولا قوة إلا بالله",
      target: 33,
      items: [
        {
          arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
          translit: "Lā ḥawla wa lā quwwata illā billāhil-'Aliyyil-'Aẓeem",
          meaning: "There is no power nor might except with Allah, the Most High",
          urduMeaning: "گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ کی مدد سے ہے"
        }
      ]
    }
  ],

  duas: [
    {
      id: "dua-parents",
      title: "Dua for Parents (Mercy & Goodness)",
      category: "Family & Parents",
      arabic: "﴿ رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا ۝ ﴾",
      translit: "Rabbir-ḥamhumā kamā rabbayānee ṣagheerā",
      translationEnglish: "My Lord! Bestow on them Your Mercy even as they cherished and brought me up when I was little.",
      translationUrdu: "اے میرے رب! ان دونوں (والدین) پر رحم فرما جیسا کہ انہوں نے بچپن میں مجھے پیار سے پالا۔",
      reference: "Surah Al-Isra (Ayah 24)"
    },
    {
      id: "dua-ease",
      title: "Dua for Ease & Removing Hardship",
      category: "Daily Life & Peace",
      arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
      translit: "Allāhumma lā sahla illā mā ja'altahu sahlā, wa anta taj'alul-ḥazna idhā shi'ta sahlā",
      translationEnglish: "O Allah, there is no ease except in that which You make easy, and You make hardship easy when You will.",
      translationUrdu: "اے اللہ! کوئی کام آسان نہیں مگر جسے تو آسان کر دے، اور تو جب چاہتا ہے مشکل کو آسان بنا دیتا ہے۔",
      reference: "Sahih Ibn Hibban"
    },
    {
      id: "dua-health",
      title: "Dua for Health, Healing & Wellbeing",
      category: "Health & Healing",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",
      translit: "Allāhumma innee as'alukal-'afwa wal-'āfiyata fid-dunyā wal-ākhirah",
      translationEnglish: "O Allah, I ask You for complete forgiveness and enduring health in this world and in the Hereafter.",
      translationUrdu: "اے اللہ! میں تجھ سے دنیا اور آخرت میں بخشش اور کامل صحت و عافیت مانگتی ہوں۔",
      reference: "Sunan Abi Dawud"
    },
    {
      id: "dua-knowledge",
      title: "Dua for Knowledge & Understanding the Quran",
      category: "Quran & Learning",
      arabic: "﴿ رَّبِّ زِدْنِي عِلْمًا ۝ ﴾",
      translit: "Rabbi zidnee 'ilmā",
      translationEnglish: "My Lord, increase me in beneficial knowledge.",
      translationUrdu: "اے میرے رب! میرے علم میں اضافہ فرما۔",
      reference: "Surah Ta-Ha (Ayah 114)"
    },
    {
      id: "dua-anxiety",
      title: "Dua for Peace of Mind & Relieving Worry",
      category: "Daily Life & Peace",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ",
      translit: "Allāhumma innee a'oodhu bika minal-hammi wal-ḥazan, wa minal-'ajzi wal-kasal",
      translationEnglish: "O Allah, I seek refuge in You from grief and worry, and from weakness and laziness.",
      translationUrdu: "اے اللہ! میں فکر اور غم، اور عاجزی اور سستی سے تیری پناہ مانگتی ہوں۔",
      reference: "Sahih al-Bukhari"
    }
  ],

  juzList: [
    { number: 1, nameArabic: "الم ۝", surahs: "Al-Fatihah 1 - Al-Baqarah 141" },
    { number: 2, nameArabic: "سَيَقُولُ ۝", surahs: "Al-Baqarah 142 - Al-Baqarah 252" },
    { number: 3, nameArabic: "تِلْكَ الرُّسُلُ ۝", surahs: "Al-Baqarah 253 - Ali 'Imran 92" },
    { number: 4, nameArabic: "لَن تَنَالُوا ۝", surahs: "Ali 'Imran 93 - An-Nisa 23" },
    { number: 5, nameArabic: "وَالْمُحْصَنَاتُ ۝", surahs: "An-Nisa 24 - An-Nisa 147" },
    { number: 6, nameArabic: "لَا يُحِبُّ اللَّهُ ۝", surahs: "An-Nisa 148 - Al-Ma'idah 81" },
    { number: 7, nameArabic: "وَإِذَا سَمِعُوا ۝", surahs: "Al-Ma'idah 82 - Al-An'am 110" },
    { number: 8, nameArabic: "وَلَوْ أَنَّنَا ۝", surahs: "Al-An'am 111 - Al-A'raf 87" },
    { number: 9, nameArabic: "قَالَ الْمَلَأُ ۝", surahs: "Al-A'raf 88 - Al-Anfal 40" },
    { number: 10, nameArabic: "وَاعْلَمُوا ۝", surahs: "Al-Anfal 41 - At-Tawbah 92" },
    { number: 11, nameArabic: "يَعْتَذِرُونَ ۝", surahs: "At-Tawbah 93 - Hud 5" },
    { number: 12, nameArabic: "وَمَا مِن دَابَّةٍ ۝", surahs: "Hud 6 - Yusuf 52" },
    { number: 13, nameArabic: "وَمَا أُبَرِّئُ ۝", surahs: "Yusuf 53 - Ibrahim 52" },
    { number: 14, nameArabic: "رُبَمَا ۝", surahs: "Al-Hijr 1 - An-Nahl 128" },
    { number: 15, nameArabic: "سُبْحَانَ الَّذِي ۝", surahs: "Al-Isra 1 - Al-Kahf 74" },
    { number: 16, nameArabic: "قَالَ أَلَمْ ۝", surahs: "Al-Kahf 75 - Ta-Ha 135" },
    { number: 17, nameArabic: "اقْتَرَبَ ۝", surahs: "Al-Anbiya 1 - Al-Hajj 78" },
    { number: 18, nameArabic: "قَدْ أَفْلَحَ ۝", surahs: "Al-Mu'minun 1 - Al-Furqan 20" },
    { number: 19, nameArabic: "وَقَالَ الَّذِينَ ۝", surahs: "Al-Furqan 21 - An-Naml 55" },
    { number: 20, nameArabic: "أَمَّنْ خَلَقَ ۝", surahs: "An-Naml 56 - Al-'Ankabut 45" },
    { number: 21, nameArabic: "اتْلُ مَا أُوحِيَ ۝", surahs: "Al-'Ankabut 46 - Al-Ahzab 30" },
    { number: 22, nameArabic: "وَمَن يَقْنُتْ ۝", surahs: "Al-Ahzab 31 - Ya-Sin 27" },
    { number: 23, nameArabic: "وَمَا لِيَ ۝", surahs: "Ya-Sin 28 - Az-Zumar 31" },
    { number: 24, nameArabic: "فَمَنْ أَظْلَمُ ۝", surahs: "Az-Zumar 32 - Fussilat 46" },
    { number: 25, nameArabic: "إِلَيْهِ يُرَدُّ ۝", surahs: "Fussilat 47 - Al-Jathiyah 37" },
    { number: 26, nameArabic: "حم ۝", surahs: "Al-Ahqaf 1 - Adh-Dhariyat 30" },
    { number: 27, nameArabic: "قَالَ فَمَا خَطْبُكُمْ ۝", surahs: "Adh-Dhariyat 31 - Al-Hadid 29" },
    { number: 28, nameArabic: "قَدْ سَمِعَ اللَّهُ ۝", surahs: "Al-Mujadila 1 - At-Tahrim 12" },
    { number: 29, nameArabic: "تَبَارَكَ الَّذِي ۝", surahs: "Al-Mulk 1 - Al-Mursalat 50" },
    { number: 30, nameArabic: "عَمَّ يَتَسَاءَلُونَ ۝", surahs: "An-Naba 1 - An-Nas 6" }
  ]
};

if (typeof window !== 'undefined') {
  window.TAJWEED_DATA = TAJWEED_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TAJWEED_DATA;
}

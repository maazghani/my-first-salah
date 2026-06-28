export type SalatPassage = {
  label: string
  /** When this passage is said, e.g. "Only in the last sitting". */
  when?: string
  say: string
  meaning: string
}

export type SalatStep = {
  id: string
  number: number
  name: string
  arabic: string
  meaning: string
  image: string
  imageAlt: string
  /** Which rakah this step belongs to (used for the progress map). */
  rakah: number
  /** A short label telling the child where they are, e.g. "Rakah 2 of 4". */
  context: string
  /** True for the final sitting / tasleem so we can celebrate. */
  isEnding?: boolean
  /** Short, kid-friendly instruction of what your body does. */
  whatToDo: string
  /** The words you say, written the easy way to read out loud. */
  say: string
  /** What those beautiful words mean. */
  sayMeaning: string
  /** A little encouraging tip for kids. */
  funTip: string
  /** Extra passages that follow the main words (e.g. Darood, final dua). */
  extraPassages?: SalatPassage[]
}

export type Prayer = {
  id: string
  name: string
  arabic: string
  time: string
  /** Number of fard (must-do) rakahs. */
  rakahs: number
  blurb: string
  /** lucide-react icon name handled in the picker. */
  icon: 'sunrise' | 'sun' | 'cloud-sun' | 'sunset' | 'moon'
}

export const prayers: Prayer[] = [
  {
    id: 'fajr',
    name: 'Fajr',
    arabic: '\u0641\u064e\u062c\u0631',
    time: 'Dawn',
    rakahs: 2,
    blurb: 'The early morning prayer, before the sun comes up.',
    icon: 'sunrise',
  },
  {
    id: 'dhuhr',
    name: 'Dhuhr',
    arabic: '\u0638\u064f\u0647\u0631',
    time: 'Midday',
    rakahs: 4,
    blurb: 'The prayer after the sun passes its highest point.',
    icon: 'sun',
  },
  {
    id: 'asr',
    name: 'Asr',
    arabic: '\u0639\u064e\u0635\u0631',
    time: 'Afternoon',
    rakahs: 4,
    blurb: 'The prayer in the late afternoon.',
    icon: 'cloud-sun',
  },
  {
    id: 'maghrib',
    name: 'Maghrib',
    arabic: '\u0645\u064e\u063a\u0631\u0650\u0628',
    time: 'Sunset',
    rakahs: 3,
    blurb: 'The prayer just after the sun sets.',
    icon: 'sunset',
  },
  {
    id: 'isha',
    name: 'Isha',
    arabic: '\u0639\u0650\u0634\u064e\u0627\u0621',
    time: 'Night',
    rakahs: 4,
    blurb: 'The night prayer, after the sky is dark.',
    icon: 'moon',
  },
]

export function getPrayer(id: string): Prayer | undefined {
  return prayers.find((p) => p.id === id)
}

/* ---------------------------------------------------------------- */
/*  The words said in the sittings                                  */
/* ---------------------------------------------------------------- */

const TASHAHHUD = {
  say: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu \u02bbalaika ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. As-salamu \u02bbalaina wa \u02bbala \u02bbibadillahis-salihin. Ashhadu alla ilaha illallah, wa ashhadu anna Muhammadan \u02bbabduhu wa rasuluh.',
  meaning:
    'All greetings, prayers and pure words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon all the righteous servants of Allah. I bear witness that there is no god but Allah, and that Muhammad is His servant and Messenger.',
}

const DAROOD_IBRAHIM: SalatPassage = {
  label: 'Darood Ibrahim',
  when: 'Last sitting only',
  say: 'Allahumma salli \u02bbala Muhammadin wa \u02bbala ali Muhammad, kama sallaita \u02bbala Ibrahima wa \u02bbala ali Ibrahim, innaka Hamidum Majid. Allahumma barik \u02bbala Muhammadin wa \u02bbala ali Muhammad, kama barakta \u02bbala Ibrahima wa \u02bbala ali Ibrahim, innaka Hamidum Majid.',
  meaning:
    'O Allah, send Your grace upon Muhammad and the family of Muhammad, as You sent it upon Ibrahim and the family of Ibrahim; You are truly Praiseworthy, Glorious. O Allah, send Your blessings upon Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim; You are truly Praiseworthy, Glorious.',
}

const RABBI_JALNI: SalatPassage = {
  label: 'Rabbi-j\u02bbalni',
  when: 'Last sitting only',
  say: 'Rabbi-j\u02bbalni muqimas-salati wa min dhurriyyati, Rabbana wa taqabbal du\u02bba\u02be.',
  meaning:
    'My Lord, make me and my children keep up the prayer. Our Lord, accept my dua.',
}

const RABBANAGHFIRLI: SalatPassage = {
  label: 'Rabbana-ghfir li',
  when: 'Last sitting only',
  say: 'Rabbana-ghfir li wa li-walidayya wa lil-mu\u02beminina yawma yaqumul-hisab.',
  meaning:
    'Our Lord, forgive me and my parents and all the believers on the Day the accounting takes place.',
}

/* ---------------------------------------------------------------- */
/*  Build the full set of steps for a chosen prayer                 */
/* ---------------------------------------------------------------- */

export function buildSalatSteps(prayer: Prayer): SalatStep[] {
  const total = prayer.rakahs
  const steps: SalatStep[] = []
  let n = 0

  const add = (step: Omit<SalatStep, 'number'>) => {
    n += 1
    steps.push({ ...step, number: n })
  }

  // Opening Takbir (said once, at the very start of rakah 1)
  add({
    id: 'takbir',
    name: 'Takbir',
    arabic: '\u062a\u064e\u0643\u0628\u0650\u064a\u0631',
    meaning: 'Starting the prayer',
    image: '/images/step-takbir.png',
    imageAlt:
      'A child standing on a prayer mat with both hands raised up beside the ears to begin the prayer.',
    rakah: 1,
    context: `Start of Rakah 1 of ${total}`,
    whatToDo:
      'Stand up tall and face the Qiblah. Lift both hands up next to your ears with your palms facing forward, and make your intention in your heart.',
    say: 'Allahu Akbar',
    sayMeaning: 'Allah is the Greatest.',
    funTip:
      'This is like saying "let\u2019s begin!" When you say it, you leave all your worries behind and talk to Allah.',
  })

  for (let r = 1; r <= total; r += 1) {
    const context = `Rakah ${r} of ${total}`
    const recitesSurah = r <= 2

    // Qiyam (standing and reciting)
    add({
      id: `qiyam-${r}`,
      name: 'Qiyam',
      arabic: '\u0642\u0650\u064a\u064e\u0627\u0645',
      meaning: 'Standing and reading',
      image: '/images/step-qiyam.png',
      imageAlt:
        'A child standing calmly on a prayer mat with hands folded gently over the chest.',
      rakah: r,
      context,
      whatToDo:
        r === 1
          ? 'Rest your right hand over your left on your chest and look down. Read Surah Al-Fatihah, then a short surah.'
          : recitesSurah
            ? 'Hands folded on your chest again. Read Surah Al-Fatihah, then a short surah.'
            : 'Hands folded on your chest. This time read only Surah Al-Fatihah \u2014 no extra surah.',
      say: recitesSurah
        ? 'Bismillah ir-Rahman ir-Raheem. Alhamdulillahi Rabbil-\u02bbalameen... (Surah Al-Fatihah), then a short surah like Surah Al-Ikhlas.'
        : 'Surah Al-Fatihah only: Bismillah ir-Rahman ir-Raheem. Alhamdulillahi Rabbil-\u02bbalameen...',
      sayMeaning:
        'In the name of Allah... All praise belongs to Allah, the Lord of all the worlds. Al-Fatihah is the most special surah in the Quran.',
      funTip: recitesSurah
        ? 'In the first two rakahs we read Al-Fatihah and one more short surah. Say it slowly, like you really mean it.'
        : 'In the later rakahs we read just Al-Fatihah. Nice and calm.',
    })

    // Ruku (bowing)
    add({
      id: `ruku-${r}`,
      name: 'Ruku',
      arabic: '\u0631\u064f\u0643\u0648\u0639',
      meaning: 'Bowing down',
      image: '/images/step-ruku.png',
      imageAlt:
        'A child bowing forward with a straight back and both hands resting on the knees.',
      rakah: r,
      context,
      whatToDo:
        'Say "Allahu Akbar" and bow down. Keep your back straight and flat, and hold your knees with your hands.',
      say: 'Subhana Rabbiyal-\u02bbAdheem',
      sayMeaning: 'Glory be to my Lord, the Most Great.',
      funTip: 'Say these words three times slowly. Bowing shows that we respect Allah.',
    })

    // I'tidal (standing back up)
    add({
      id: `itidal-${r}`,
      name: 'Standing Up',
      arabic: '\u0627\u0650\u0639\u062a\u0650\u062f\u064e\u0627\u0644',
      meaning: 'Rising from bowing',
      image: '/images/step-qiyam.png',
      imageAlt: 'A child standing upright again on the prayer mat after bowing.',
      rakah: r,
      context,
      whatToDo:
        'Stand up straight again and let your arms rest by your sides. Stay calm and still for a moment.',
      say: 'Sami\u02bba-llahu liman hamidah, Rabbana wa lakal-hamd',
      sayMeaning:
        'Allah hears the one who praises Him. Our Lord, all praise is for You.',
      funTip:
        'Standing back up tall is a little thank-you to Allah for listening to us.',
    })

    // First Sujud
    add({
      id: `sujud1-${r}`,
      name: 'Sujud',
      arabic: '\u0633\u064f\u062c\u0648\u062f',
      meaning: 'First prostration',
      image: '/images/step-sujud.png',
      imageAlt:
        'A child in prostration with forehead, nose and hands resting gently on the prayer mat.',
      rakah: r,
      context,
      whatToDo:
        'Say "Allahu Akbar" and go down so your forehead, nose, palms, knees, and toes all touch the ground.',
      say: 'Subhana Rabbiyal-A\u02bbla',
      sayMeaning: 'Glory be to my Lord, the Most High.',
      funTip:
        'Sujud is the closest you can be to Allah. It is the perfect time to feel calm and make a little dua in your heart.',
    })

    // Jalsa (sitting between the two sujood)
    add({
      id: `jalsa-${r}`,
      name: 'Sit a Moment',
      arabic: '\u062c\u0650\u0644\u0633\u064e\u0629',
      meaning: 'Sitting between the two sujood',
      image: '/images/step-tashahhud.png',
      imageAlt: 'A child sitting calmly on the knees with hands resting on the thighs.',
      rakah: r,
      context,
      whatToDo:
        'Say "Allahu Akbar" and sit up on your knees for a short, calm moment. Rest your hands on your thighs.',
      say: 'Rabbi-ghfir li, Rabbi-ghfir li',
      sayMeaning: 'My Lord, forgive me. My Lord, forgive me.',
      funTip: 'A tiny rest between the two sujood, and a sweet little dua for forgiveness.',
    })

    // Second Sujud
    add({
      id: `sujud2-${r}`,
      name: 'Sujud Again',
      arabic: '\u0633\u064f\u062c\u0648\u062f',
      meaning: 'Second prostration',
      image: '/images/step-sujud.png',
      imageAlt:
        'A child in prostration again with forehead, nose and hands resting gently on the prayer mat.',
      rakah: r,
      context,
      whatToDo:
        'Say "Allahu Akbar" and go down into prostration one more time, just like before.',
      say: 'Subhana Rabbiyal-A\u02bbla',
      sayMeaning: 'Glory be to my Lord, the Most High.',
      funTip:
        'Two sujoods in every rakah. You are doing so well \u2014 keep going!',
    })

    const isLastRakah = r === total
    const isFirstSitting = r === 2 && total > 2

    if (isFirstSitting) {
      // Middle sitting: Tashahhud ONLY, then stand up again.
      add({
        id: `tashahhud-first-${r}`,
        name: 'First Sitting',
        arabic: '\u062a\u064e\u0634\u064e\u0647\u0651\u064f\u062f',
        meaning: 'The middle Tashahhud',
        image: '/images/step-tashahhud.png',
        imageAlt:
          'A child sitting on the knees with hands on the thighs and the right index finger gently raised.',
        rakah: r,
        context: `After Rakah ${r} of ${total} \u00b7 First sitting`,
        whatToDo:
          'Sit on your knees, hands on your thighs. Gently raise your right finger when you say "Ashhadu alla ilaha illallah", then lower it.',
        say: TASHAHHUD.say,
        sayMeaning: TASHAHHUD.meaning,
        funTip:
          'In the FIRST sitting we read only the Tashahhud. Then say "Allahu Akbar" and stand up for the next rakah \u2014 do NOT read the Darood here.',
      })
    }

    if (isLastRakah) {
      // Final sitting: Tashahhud + Darood + the two duas.
      add({
        id: `tashahhud-final-${r}`,
        name: 'Last Sitting',
        arabic: '\u062a\u064e\u0634\u064e\u0647\u0651\u064f\u062f',
        meaning: 'The final Tashahhud',
        image: '/images/step-tashahhud.png',
        imageAlt:
          'A child sitting on the knees with hands on the thighs and the right index finger gently raised.',
        rakah: r,
        context: `After Rakah ${r} of ${total} \u00b7 Last sitting`,
        isEnding: true,
        whatToDo:
          'Sit on your knees, hands on your thighs. Raise your right finger when you say "Ashhadu alla ilaha illallah". Now read the Tashahhud, then everything below it.',
        say: TASHAHHUD.say,
        sayMeaning: TASHAHHUD.meaning,
        funTip:
          'In the LAST sitting we read the Tashahhud AND the three passages below, one after the other, before saying Salam.',
        extraPassages: [DAROOD_IBRAHIM, RABBI_JALNI, RABBANAGHFIRLI],
      })
    }
  }

  // Tasleem (said once, at the very end)
  add({
    id: 'tasleem',
    name: 'Tasleem',
    arabic: '\u062a\u064e\u0633\u0644\u0650\u064a\u0645',
    meaning: 'Ending with peace',
    image: '/images/step-tasleem.png',
    imageAlt:
      'A child sitting and gently turning the head to the right to give greetings of peace.',
    rakah: total,
    context: 'Finishing your prayer',
    isEnding: true,
    whatToDo:
      'Turn your head to the right and say the words, then turn to the left and say them again. Your prayer is complete!',
    say: 'Assalamu \u02bbalaikum wa rahmatullah',
    sayMeaning: 'Peace and the mercy of Allah be upon you.',
    funTip:
      'You did it! Turning your head shares peace with the angels and everyone around you. Masha\u02beAllah!',
  })

  return steps
}

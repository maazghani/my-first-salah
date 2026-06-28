export type SalatStep = {
  id: string
  number: number
  name: string
  arabic: string
  meaning: string
  image: string
  imageAlt: string
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

export type SalatPassage = {
  label: string
  /** When this passage is said, e.g. "Only in the last sitting". */
  when?: string
  say: string
  meaning: string
}

export const salatSteps: SalatStep[] = [
  {
    id: 'takbir',
    number: 1,
    name: 'Takbir',
    arabic: 'تَكْبِير',
    meaning: 'Starting the prayer',
    image: '/images/step-takbir.png',
    imageAlt:
      'A child standing on a prayer mat with both hands raised up beside the ears to begin the prayer.',
    whatToDo:
      'Stand up tall and face the Qiblah. Lift both hands up next to your ears with your palms facing forward.',
    say: 'Allahu Akbar',
    sayMeaning: 'Allah is the Greatest.',
    funTip:
      'This is like saying "let\'s begin!" When you say it, you leave all your worries behind and talk to Allah.',
  },
  {
    id: 'qiyam',
    number: 2,
    name: 'Qiyam',
    arabic: 'قِيَام',
    meaning: 'Standing and reading',
    image: '/images/step-qiyam.png',
    imageAlt:
      'A child standing calmly on a prayer mat with hands folded gently over the chest.',
    whatToDo:
      'Place your right hand over your left, resting them on your chest. Look down at the spot where your head will go. Then read Surah Al-Fatihah.',
    say: 'Bismillah... Alhamdulillahi Rabbil-\u02bbalameen...',
    sayMeaning:
      'In the name of Allah... All praise belongs to Allah, the Lord of all the worlds...',
    funTip:
      'Surah Al-Fatihah is the most special surah. Take your time and say it gently, like you really mean it.',
  },
  {
    id: 'ruku',
    number: 3,
    name: 'Ruku',
    arabic: 'رُكُوع',
    meaning: 'Bowing down',
    image: '/images/step-ruku.png',
    imageAlt:
      'A child bowing forward with a straight back and both hands resting on the knees.',
    whatToDo:
      'Say "Allahu Akbar" and bow down. Keep your back straight and flat, and hold your knees with your hands.',
    say: 'Subhana Rabbiyal-\u02bbAdheem',
    sayMeaning: 'Glory be to my Lord, the Most Great.',
    funTip: 'Say these words three times slowly. Bowing shows that we respect Allah.',
  },
  {
    id: 'itidal',
    number: 4,
    name: 'Standing Up',
    arabic: 'اِعْتِدَال',
    meaning: 'Rising from bowing',
    image: '/images/step-qiyam.png',
    imageAlt: 'A child standing upright again on the prayer mat after bowing.',
    whatToDo:
      'Stand up straight again and let your arms rest by your sides. Stay calm and still for a moment.',
    say: 'Sami\u02bba-llahu liman hamidah, Rabbana wa lakal-hamd',
    sayMeaning:
      'Allah hears the one who praises Him. Our Lord, all praise is for You.',
    funTip: 'Standing back up tall is a little thank-you to Allah for listening to us.',
  },
  {
    id: 'sujud',
    number: 5,
    name: 'Sujud',
    arabic: 'سُجُود',
    meaning: 'Prostration',
    image: '/images/step-sujud.png',
    imageAlt:
      'A child in prostration with forehead, nose and hands resting gently on the prayer mat.',
    whatToDo:
      'Say "Allahu Akbar" and go down so your forehead, nose, palms, knees, and toes all touch the ground.',
    say: 'Subhana Rabbiyal-A\u02bbla',
    sayMeaning: 'Glory be to my Lord, the Most High.',
    funTip:
      'Sujud is the closest you can be to Allah. It is the perfect time to feel calm and make a little dua in your heart.',
  },
  {
    id: 'tashahhud',
    number: 6,
    name: 'Tashahhud',
    arabic: 'تَشَهُّد',
    meaning: 'Sitting and witnessing',
    image: '/images/step-tashahhud.png',
    imageAlt:
      'A child sitting on the knees with hands on the thighs and the right index finger gently raised.',
    whatToDo:
      'Sit calmly on your knees with your hands on your thighs. Gently raise your right index finger when you say "Ashhadu alla ilaha illallah", then lower it again.',
    say: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu \u02bbalaika ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. As-salamu \u02bbalaina wa \u02bbala \u02bbibadillahis-salihin. Ashhadu alla ilaha illallah, wa ashhadu anna Muhammadan \u02bbabduhu wa rasuluh.',
    sayMeaning:
      'All greetings, prayers and pure words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon all the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.',
    funTip:
      'This is the whole Tashahhud. Say it gently \u2014 you are sending greetings of peace to Allah, to the Prophet (peace be upon him), and to all good people.',
    extraPassages: [
      {
        label: 'Darood Ibrahim',
        when: 'In the last sitting, right after the Tashahhud',
        say: 'Allahumma salli \u02bbala Muhammadin wa \u02bbala ali Muhammad, kama sallaita \u02bbala Ibrahima wa \u02bbala ali Ibrahim, innaka Hamidum Majid. Allahumma barik \u02bbala Muhammadin wa \u02bbala ali Muhammad, kama barakta \u02bbala Ibrahima wa \u02bbala ali Ibrahim, innaka Hamidum Majid.',
        meaning:
          'O Allah, send Your grace upon Muhammad and the family of Muhammad, as You sent it upon Ibrahim and the family of Ibrahim; You are truly Praiseworthy, Glorious. O Allah, send Your blessings upon Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim; You are truly Praiseworthy, Glorious.',
      },
      {
        label: 'Rabbi-j\u02bbalni (a beautiful dua)',
        when: 'In the last sitting, after the Darood',
        say: 'Rabbi-j\u02bbalni muqimas-salati wa min dhurriyyati, Rabbana wa taqabbal du\u02bba\u02be.',
        meaning:
          'My Lord, make me and my children keep up the prayer. Our Lord, and accept my dua.',
      },
    ],
  },
  {
    id: 'tasleem',
    number: 7,
    name: 'Tasleem',
    arabic: 'تَسْلِيم',
    meaning: 'Ending with peace',
    image: '/images/step-tasleem.png',
    imageAlt:
      'A child sitting and gently turning the head to the right to give greetings of peace.',
    whatToDo:
      'Turn your head to the right and say the words, then turn to the left and say them again. Your prayer is complete!',
    say: 'Assalamu \u02bbalaikum wa rahmatullah',
    sayMeaning: 'Peace and the mercy of Allah be upon you.',
    funTip:
      'You did it! Turning your head shares peace with the angels and everyone around you. Masha\u02beAllah!',
  },
]

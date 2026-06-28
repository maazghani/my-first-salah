export type WuduStep = {
  id: string
  number: number
  name: string
  arabic: string
  meaning: string
  image: string
  imageAlt: string
  /** How many times this part is washed/wiped. */
  times: string
  /** Kid-friendly instruction of what to do. */
  whatToDo: string
  /** A little encouraging tip for kids. */
  funTip: string
}

export const wuduSteps: WuduStep[] = [
  {
    id: 'intention',
    number: 1,
    name: 'Make Intention',
    arabic: '\u0646\u0650\u064a\u0651\u064e\u0629',
    meaning: 'Niyyah \u2014 a quiet plan in your heart',
    image: '/images/wudu-intention.png',
    imageAlt:
      'A child standing calmly near a water tap with a hand on the heart, making intention.',
    times: 'Just once',
    whatToDo:
      'Stand near the water, roll up your sleeves, and make a quiet intention in your heart that you are making Wudu to get clean for Allah. Then say "Bismillah".',
    funTip:
      'Bismillah means "In the name of Allah". It is a lovely way to start anything good!',
  },
  {
    id: 'hands',
    number: 2,
    name: 'Wash Your Hands',
    arabic: '\u063a\u064e\u0633\u0644 \u0627\u0644\u064a\u064e\u062f\u064e\u064a\u0646',
    meaning: 'Up to the wrists',
    image: '/images/wudu-hands.png',
    imageAlt: 'A child washing both hands under flowing water from a tap.',
    times: '3 times',
    whatToDo:
      'Wash both hands up to the wrists, three times. Make sure the water goes between your fingers too.',
    funTip: 'Start with your right hand, then your left. Clean hands, ready to begin!',
  },
  {
    id: 'mouth',
    number: 3,
    name: 'Rinse Your Mouth',
    arabic: '\u0627\u0644\u0645\u064e\u0636\u0645\u064e\u0636\u064e\u0629',
    meaning: 'Swish and spit',
    image: '/images/wudu-mouth.png',
    imageAlt: 'A child cupping water in the right hand toward the mouth to rinse it.',
    times: '3 times',
    whatToDo:
      'Take a little water in your right hand, swish it around your mouth, then gently spit it out. Do this three times.',
    funTip: 'Like a gentle little gargle. Fresh and clean!',
  },
  {
    id: 'nose',
    number: 4,
    name: 'Rinse Your Nose',
    arabic: '\u0627\u0644\u0627\u0633\u062a\u0650\u0646\u0634\u064e\u0627\u0642',
    meaning: 'Sniff and blow out',
    image: '/images/wudu-nose.png',
    imageAlt: 'A child bringing a cupped handful of water toward the nose to rinse it.',
    times: '3 times',
    whatToDo:
      'Sniff a little water into your nose with your right hand, then gently blow it out using your left hand. Do this three times.',
    funTip: 'Just a tiny sniff \u2014 not too much! This cleans your nose nicely.',
  },
  {
    id: 'face',
    number: 5,
    name: 'Wash Your Face',
    arabic: '\u063a\u064e\u0633\u0644 \u0627\u0644\u0648\u064e\u062c\u0647',
    meaning: 'Forehead to chin, ear to ear',
    image: '/images/wudu-face.png',
    imageAlt: 'A child washing the face with both hands and flowing water.',
    times: '3 times',
    whatToDo:
      'Wash your whole face three times \u2014 from the top of your forehead down to your chin, and from one ear to the other.',
    funTip: 'Cover your whole face with water, like giving it a happy splash!',
  },
  {
    id: 'arms',
    number: 6,
    name: 'Wash Your Arms',
    arabic: '\u063a\u064e\u0633\u0644 \u0627\u0644\u064a\u064e\u062f\u064e\u064a\u0646',
    meaning: 'Up to and including the elbows',
    image: '/images/wudu-arms.png',
    imageAlt: 'A child washing the right forearm up to the elbow under flowing water.',
    times: '3 times',
    whatToDo:
      'Wash your right arm up to and including the elbow, three times. Then do the same with your left arm.',
    funTip: 'Right arm first, then left. Make sure the elbow gets wet too!',
  },
  {
    id: 'head',
    number: 7,
    name: 'Wipe Your Head',
    arabic: '\u0645\u064e\u0633\u062d \u0627\u0644\u0631\u0651\u064e\u0623\u0633',
    meaning: 'Masah \u2014 a gentle wipe',
    image: '/images/wudu-head.png',
    imageAlt: 'A child wiping over the head with both wet hands from front to back.',
    times: 'Just once',
    whatToDo:
      'Wet your hands, then wipe them over your head from the front to the back, and back to the front. This is called masah.',
    funTip: 'No need to pour water here \u2014 just a soft wipe with wet hands.',
  },
  {
    id: 'ears',
    number: 8,
    name: 'Wipe Your Ears',
    arabic: '\u0645\u064e\u0633\u062d \u0627\u0644\u0623\u064f\u0630\u064f\u0646\u064e\u064a\u0646',
    meaning: 'Inside and behind',
    image: '/images/wudu-ears.png',
    imageAlt: 'A child wiping the ears with wet fingers, index inside and thumbs behind.',
    times: 'Just once',
    whatToDo:
      'With your wet fingers, wipe the inside of your ears with your index fingers and behind them with your thumbs.',
    funTip: 'Your fingers fit perfectly \u2014 index inside, thumb behind. Easy!',
  },
  {
    id: 'feet',
    number: 9,
    name: 'Wash Your Feet',
    arabic: '\u063a\u064e\u0633\u0644 \u0627\u0644\u0631\u0650\u062c\u0644\u064e\u064a\u0646',
    meaning: 'Up to and including the ankles',
    image: '/images/wudu-feet.png',
    imageAlt: 'A child washing the right foot up to the ankle under flowing water.',
    times: '3 times',
    whatToDo:
      'Wash your right foot up to and including the ankle, three times, then your left foot. Wash between your toes too!',
    funTip:
      'Right foot first, then left. Wiggle your toes so the water gets everywhere. All done!',
  },
]

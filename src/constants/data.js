import {colors, images} from '@/constants';

export const welcomeData = [
  {
    id: 1,
    img: require('@/assets/images/welcome.png'),
    title: 'Wherever you are health is number one',
    subTitle: 'There is no instant way to a healthy life',
  },
  {
    id: 2,
    img: require('@/assets/images/welcome2.jpg'),
    title: 'Wherever you are health is number two',
    subTitle: 'There is no instant way to a healthy life',
  },
  {
    id: 3,
    img: require('@/assets/images/welcome3.jpg'),
    title: 'Wherever you are health is number three',
    subTitle: 'There is no instant way to a healthy life',
  },
];

export const popularData = [
  {
    id: 1,
    img: require('@/assets/images/popular2.jpg'),
    title: 'Lower Body Training',
    kol: '500 kol',
    time: '50 min',
  },
  {
    id: 2,
    img: require('@/assets/images/popular1.png'),
    title: 'handling Training',
    kol: '600 kol',
    time: '40 min',
  },
];
export const todayData = [
  {
    id: 11,
    img: require('@/assets/images/today1.png'),
    title: 'sit up',
    subTitle: '20 sit up a day',
    status: 'begginer',
    precent: '45%',
  },
  {
    id: 22,
    img: require('@/assets/images/today3.png'),
    title: 'knee push up',
    subTitle: '20 sit up a day',
    status: 'inetmediate',
    precent: '75%',
  },
  {
    id: 31,
    img: require('@/assets/images/today2.png'),
    title: 'push up',
    subTitle: '100 push up a day',
    status: 'begginer',
    precent: '87%',
  },
];

export const bestData = [
  {
    id: 1,
    img: require('@/assets/images/best1.png'),
    title: 'Belly fat burner',
    status: 'begginer',
    time: '10 min',
  },
  {
    id: 2,
    img: require('@/assets/images/best2.png'),
    title: 'Lose Fat',
    status: 'begginer',
    time: '10 min',
  },
  {
    id: 3,
    img: require('@/assets/images/best3.png'),
    title: 'Plank',
    status: 'Expert',
    time: '05 min',
  },
  {
    id: 4,
    img: require('@/assets/images/best4.png'),
    title: 'Build Whider Biceps',
    status: 'begginer',
    time: '10 min',
  },
];

export const challengData = [
  {
    id: 1,
    img: require('@/assets/images/icon-plank.png'),
    title: 'Plank Challenge',
    backgroundColor: colors.primary,
    color: colors.dark,
  },
  {
    id: 2,
    img: require('@/assets/images/icon-sprint.png'),
    title: 'Sprint Challenge',
    backgroundColor: colors.dark,
    color: colors.light,
  },
  {
    id: 3,
    img: require('@/assets/images/icon-squat.png'),
    title: 'Squat Challenge',
    backgroundColor: colors.light,
    color: colors.dark,
  },
  {
    id: 4,
    img: require('@/assets/images/icon-sprint.png'),
    title: 'Sprint Challenge',
    backgroundColor: colors.dark,
    color: colors.light,
  },
];

export const analticsData = [
  {
    id: 1,
    title: 'Active calories',
    response: '645 col',
    backgroundColor: colors.light,
  },
  {
    id: 2,
    title: 'keep it up 💪',
    backgroundColor: '#F6CFCF',
  },
  {
    id: 3,
    title: 'Hearth Rate',
    response: '79 Bpm',
    backgroundColor: '#FFEBEB',
    img: images.analyticHerth,
  },

  {
    id: 4,
    title: 'steps',
    response: '999 / 2000',
    backgroundColor: '#F8D39D',
    img: images.analyticSteps,
  },

  {
    id: 5,
    title: 'sleep',
    // response: "999 / 2000",
    backgroundColor: '#EFE2FF',
    img: images.analyticSleep,
  },

  {
    id: 6,
    title: 'water',
    response: '6 / 8 cups',
    backgroundColor: '#D8E6EC',
    img: images.analyticWater,
  },
];

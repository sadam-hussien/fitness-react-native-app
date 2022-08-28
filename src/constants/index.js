import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const screenNames = {
  welcome: 'Welcome',
  home: 'Home',
  explore: 'Explore',
  activity: 'Activity',
  profile: 'Profile',
};

export const sizes = {
  // global sizes
  base: 8,
  small: 12,
  medium: 20,
  large: 24,

  // font sizes
  h1: 24,
  h2: 18,
  h3: 16,
  h4: 14,
  body1: 15,
  body2: 13,
  body3: 12,
  body4: 10,

  // app dimensions
  width,
  height,
};

export const colors = {
  primary: '#BBF246',
  dark: '#192126',
  light: '#fff',
  gray1: '#8B8F92',
  gray2: '#5E6468',
  gray3: '#384046',
  subLight: '#F5F5F5',
};

export const fonts = {
  h1: {fontFamily: 'Lato-Black', fontSize: sizes.h1},
  h2: {fontFamily: 'Lato-Bold', fontSize: sizes.h2},
  h3: {fontFamily: 'Lato-Regular', fontSize: sizes.h3},
  h4: {fontFamily: 'Lato-Regular', fontSize: sizes.h4},
  body1: {fontFamily: 'Lato-Regular', fontSize: sizes.body1},
  body2: {fontFamily: 'Lato-Regular', fontSize: sizes.body2},
  body3: {fontFamily: 'Lato-Regular', fontSize: sizes.body3},
  body4: {fontFamily: 'Lato-Regular', fontSize: sizes.body4},
};

export const images = {
  welcomeOverlay: require('@/assets/images/welcome-overlay.png'),
  explore: require('@/assets/images/explore.png'),
  analyticTraining: require('@/assets/images/trainingTime.png'),
  analyticHerth: require('@/assets/images/Heartrate.png'),
  analyticSteps: require('@/assets/images/bar.png'),
  analyticSleep: require('@/assets/images/sleep.png'),
  analyticWater: require('@/assets/images/water.png'),
};

export const icons = {
  iconHome: require('@/assets/images/icon-home.png'),
  iconExplore: require('@/assets/images/icon-explore.png'),
  iconActivity: require('@/assets/images/icon-activity.png'),
  iconProfile: require('@/assets/images/icon-profile.png'),
  iconSearch: require('@/assets/images/icon-search.png'),
  iconPlay: require('@/assets/images/icon-play.png'),
  iconClock: require('@/assets/images/icon-clock.png'),
  iconFire: require('@/assets/images/icon-fire.png'),
  iconSprint: require('@/assets/images/icon-sprint.png'),
  iconSquat: require('@/assets/images/icon-squat.png'),
  iconPlank: require('@/assets/images/icon-plank.png'),
};

export {
  welcomeData,
  popularData,
  todayData,
  bestData,
  challengData,
  analticsData,
} from './data';

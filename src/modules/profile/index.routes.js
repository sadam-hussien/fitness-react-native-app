import Profile from './screens';

import {screenNames, icons} from '@/constants';

export default routes = [
  {
    name: screenNames.profile,
    component: Profile,
    icon: icons.iconProfile,
    label: 'profile',
  },
];

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import WelcomeStack from './WelcomeStack';

export default function Navigator() {
  return (
    <NavigationContainer>
      <WelcomeStack />
    </NavigationContainer>
  );
}

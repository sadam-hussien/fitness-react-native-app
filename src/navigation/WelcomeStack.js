import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {screenNames} from '@/constants';

import {tabNavRoutes} from './TabNav';

import welcomeRoutes from '@/modules/welcome/index.routes';

const Stack = createNativeStackNavigator();

const routes = [...welcomeRoutes, ...tabNavRoutes];

export default function WelcomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.welcome}
      screenOptions={{
        headerShown: false,
      }}>
      {routes.map((item, index) => (
        <Stack.Screen name={item.name} component={item.component} key={index} />
      ))}
    </Stack.Navigator>
  );
}

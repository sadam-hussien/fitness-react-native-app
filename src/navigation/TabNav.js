import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screenNames, colors, sizes} from '@/constants';

import homeRoutes from '@/modules/home/index.routes';
import exploreRoutes from '@/modules/explore/index.routes';
import activityRoutes from '@/modules/activity/index.routes';
import profileRoutes from '@/modules/profile/index.routes';

import TabButton from './TabButton';

const Tab = createBottomTabNavigator();

const tabs = [
  ...homeRoutes,
  ...exploreRoutes,
  ...activityRoutes,
  ...profileRoutes,
];

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName={screenNames.home}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.dark,
          borderRadius: 32,
          height: 65,
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          paddingHorizontal: sizes.medium,
        },
      })}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            ...item.options,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export const tabNavRoutes = [
  {
    name: 'TabNav',
    component: TabNav,
  },
];

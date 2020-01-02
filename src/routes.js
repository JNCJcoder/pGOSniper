import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import About from './pages/about';

export default createAppContainer(
  createStackNavigator(
    {
      Home: Main,
      About: About,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#F00',
        },
        fontWeight: 'bold',
      },
    },
  ),
);

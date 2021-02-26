import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from './src/Initial.js';
import SignIn from './src/SignIn.js';
import Agreement from './src/Register/Agreement.js';
import Register_process from './src/Register/Register_process.js';



const AppNavigator = createSwitchNavigator(
  {
    Initial: Initial,
    SignIn: SignIn,
    Register: Agreement,
    Register_process: Register_process,
  },
  {
    initialRouteName: 'Initial',
  }
);

export default createAppContainer(AppNavigator);
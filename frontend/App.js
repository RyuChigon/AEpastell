import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from './src/Initial.js';
import SignIn from './src/SignIn.js';
import Agreement from './src/Register/Agreement.js';
import Register_process from './src/Register/Register_process.js';
import Register_complete from './src/Register/Register_complete.js';
import FindID_process from './src/FindID/FindID_process.js'; 
import FindID_complete from './src/FindID/FindID_complete.js';
import FindPW_process1 from './src/FindPW/FindPW_process1.js';
import FindPW_process2 from './src/FindPW/FindPW_process2.js';
import FindPW_complete from './src/FindPW/FindPW_complete.js';

const AppNavigator = createSwitchNavigator(
  {
    Initial: Initial,
    SignIn: SignIn,
    Agreement: Agreement,
    Register_process: Register_process,
    Register_complete: Register_complete,
    FindID_process: FindID_process,
    FindID_complete: FindID_complete,
    FindPW_process1: FindPW_process1,
    FindPW_process2: FindPW_process2,
    FindPW_complete: FindPW_complete,
  },
  {
    initialRouteName: 'Initial',
  }
);

export default createAppContainer(AppNavigator);
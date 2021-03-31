import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from './src/pages/Initial.js';
import SignIn from './src/pages/SignIn.js';
import Agreement from './src/pages/Register/Agreement.js';
import Register_process from './src/pages/Register/Register_process.js';
import Register_complete from './src/pages/Register/Register_complete.js';
import FindID_process from './src/pages/FindID/FindID_process.js'; 
import FindID_complete from './src/pages/FindID/FindID_complete.js';
import FindPW_process1 from './src/pages/FindPW/FindPW_process1.js';
import FindPW_process2 from './src/pages/FindPW/FindPW_process2.js';
import FindPW_complete from './src/pages/FindPW/FindPW_complete.js';
import MainScreen from './src/pages//Main/MainScreen';
import MainScreen_2 from './src/pages/Main/MainScreen_2';
import EinStein_Chat from './src/pages/Einstein/EinStein_Chat';
import AboutScreen from './src/pages/Settings/AboutScreen';
import HowtoScreen from './src/pages/Settings/HowtoScreen';
import MenuScreen from './src/pages/Settings/MenuScreen';
import ProfileScreen from './src/pages/Settings/ProfileScreen';
import SettingScreen from './src/pages/Settings/SettingScreen';
import ShopScreen from './src/pages/Shop/ShopScreen';
import Header from './src/components/Header';

const AppNavigator = createStackNavigator(
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
    MainScreen : MainScreen,
    MainScreen_2 : MainScreen_2,
    EinStein_Chat : EinStein_Chat,
    AboutScreen: AboutScreen,
    HowtoScreen: HowtoScreen,
    MenuScreen: MenuScreen,
    ProfileScreen: ProfileScreen,
    SettingScreen: SettingScreen,
    ShopScreen: ShopScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    initialRouteName: 'Initial',
  },
);

export default createAppContainer(AppNavigator);
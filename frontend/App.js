import { StatusBar } from 'expo-status-bar';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {TouchableOpacity, Button, View} from 'react-native';
import List from './images/ICON/Icon_list.svg';
import LogoTitle from './components/customMenu';
import React from 'react';
import Setting from './screens/settingScreen';
import Profile from './screens/profileScreen';
import Menu from './screens/menuScreen';
import Howto from './screens/howtoScreen';
import Contact from './screens/aboutScreen';
import Shop from './screens/shopScreen';

const settingStack = createStackNavigator(); 

export default function App() {
  return (
    <>
    <NavigationContainer>
      <settingStack.Navigator>
        <settingStack.Screen name="Setting" component={Setting}/>
        <settingStack.Screen name="Change Profile" component={Profile}/>
        <settingStack.Screen name="Menu" component={Menu}/>
        <settingStack.Screen name="How to Use" component={Howto}/>
        <settingStack.Screen name="Contact Us" component={Contact}/>
        <settingStack.Screen name="Shop" component={Shop}/>
      </settingStack.Navigator>
    </NavigationContainer>
    </>
  );
}
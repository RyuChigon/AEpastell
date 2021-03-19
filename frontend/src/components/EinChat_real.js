import { Row } from 'native-base';
import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Chat_keyboard from './Keyboard';
import KeyboardAvoidingComponent from  './KeyboardAvoidingComponent';
import EinChat_Scr from'./EinChat_Scr';
import {KeyboazIndex,Dimensions,source,HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
class EinChat_real extends Component {
  render() {
    return (
      <>
      <EinChat_Scr/>
        <View style = {styles.Overlay} >
          <View style = {styles.Container}>
            <Chat_keyboard/>
          </View>
        </View>
      </>

    );
};
};

export default withNavigation(EinChat_real);

const styles = StyleSheet.create({
  Overlay:{
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //top: "40%",
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0,0,0,0)'
  },
  Container:{
    //marginTop: "100%",
    //flex:1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
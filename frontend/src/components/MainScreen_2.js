import { Row } from 'native-base';
import React, {Component} from 'react';
import {source,Overlay,HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import { Line } from 'rc-progress';
import Main from './MainScreen';

import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


 class MainScreen_2 extends Component {
  render() {
    return (
      <>
      <Main/>
        <View style = {styles.Overlay}>
          <View style = {styles.Container}>
            <Text style = {styles.Text_1}>Albert Einstein</Text>
            <Text style = {styles.Text_2}>Theoretical Physicist</Text>
            <Text style = {styles.Text_3}>intimacy: 1 Level 0</Text>
            <Image style = {styles.eins} source={require("../../images/EIN/Char_AlbertEinstein.png")} resizeMode="contain"/>
            <Button style = {styles.button}
              title = "Start Chatting!"
              onPress = {()=>{this.props.navigation.navigate("EinChat_real")}}
              />
          </View>
        </View>
      </>
    );
  };
};
const percent = 0;

const styles = StyleSheet.create({
  Overlay:{
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //top: "40%",
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  Texts:{
    //left: 25,
    //marginTop: "10%",
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text_1:{
    top: "20%",
    fontSize: 30,
    color: 'white'
  },
  Text_2:{
    top: "20%",
    fontSize: 10,
    color: 'white'
  },
  Text_3:{
    top: "20%",
    fontSize: 15,
    marginTop: "20%",
    color: 'white'
  },
  eins:{
    width:"100%",
    height:"150%",
    top: "20%"
  },
  Container:{
    marginTop: "40%",
    flex:1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default withNavigation(MainScreen_2);
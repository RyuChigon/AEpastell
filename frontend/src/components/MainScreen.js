import Header from './Header';
import Einstein from './Einstein';
import Newton from './Newton';
import YiSunSin from './YiSunSin';
import GwanSun from './GwanSun';
import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import {source,HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';


class MainScreen extends Component {
  render() {
    return (
      <View style = {styles.Container}>
        <ImageBackground style= {{width: "100%", height: "100%"}} source={require("../../images/MAIN/Main_background1.jpg")} resizeMode="cover">
        <Header/>
          <View style = {styles.Texts}>
            <Text style = {[styles.Texts_1]}> Who do you want to talk to? </Text>
            <Text style = {[styles.Texts_2]}> Click the character </Text>
            <Text style = {[styles.Texts_3]}> Drag </Text>
          </View>
          <ScrollView 
          contentContainerStyle = {styles.Char_Container}
          showsHorizontalScrollIndicator ={true}
          horizontal={true}>
            <Einstein/>
            <Newton/>
            <GwanSun/>
            <YiSunSin/>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container:{
    flex: 1,
    flexDirection: 'row'
    
  },
  Char_Container:{
    flex:1,
    flexDirection:  'row',
    width:"700%",
    //backgroundColor: 'white',
    justifyContent: 'space-evenly'
  },
  Texts:{
    flex: 1,
    //left: 25,
    marginBottom: "30%",
    flexDirection:'column',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green'
  },
  Texts_1: {
    marginTop: 100,
    fontSize: 25,
  },
  Texts_2: {
    marginTop: 100,
    fontSize: 20,
  },
  Texts_3: {
    marginBottom: 100,
    fontSize: 10,
  },
});

export default withNavigation(MainScreen);
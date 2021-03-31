import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Keyboard from './Keyboard';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import Header from './Header';

class EinChat_Scr extends Component {
  render() {
    return (
      <View style = {styles.Container}>
        <ImageBackground 
          style = {styles.Background_grey}
          resizeMode="cover">
          <ImageBackground 
            style = {styles.Background_pastell}
            source={require("../../images/MAIN/Main_background1.jpg")} 
            resizeMode="cover">

            <ImageBackground 
              style = {styles.Background_board}
              source={require("../../images/EIN/EIN_elem_board.png")} />
            <ImageBackground 
              style = {styles.Background_eins}
              source={require("../../images/EIN/Char_AlbertEinstein.png")} />
            <ImageBackground 
              style = {styles.Background_desk}
              source={require("../../images/EIN/EIN_elem_dask.png")} />
            <ImageBackground 
              style = {styles.Background_flask}
              source={require("../../images/EIN/EIN_elem_flask.png")} />
          </ImageBackground>
        </ImageBackground>
      </View>
      
    )};
};


export default withNavigation(EinChat_Scr);

const styles = StyleSheet.create({
    Container:{
        flex:1,
    },
    Background_pastell:{
        width:"100%",
        height:"80%",
        position:"absolute"
    },
    Background_grey:{
        width:"100%",
        height: "100%",
        //justifyContent: 'center',
        //alignItems: 'flex-end',
        backgroundColor:"grey",
        position:"absolute"
    },
    Background_eins:{
        width:"70%",
        height: "70%",
        top: "25%",
        left:"25%",
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute"
    },
    Background_board:{
        left:"16%",
        top:"10%",
        width:"80%",
        height:"60%",
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute"
    },
    Background_desk:{
        width:"90%",
        height: "70%",
        left:"8%",
        top: "45%",
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute"
    },
    Background_flask:{
        width:"35%",
        height: "25%",
        left:"60%",
        top: "61%",
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute"
    },
});
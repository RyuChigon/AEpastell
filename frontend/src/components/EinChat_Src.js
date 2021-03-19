import { Row } from 'native-base';
import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Keyboard from './Keyboard';
import {source,HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
class Ein_Chatting extends Component {
  render() {
    return (
      <View style = {styles.Container}>
          <ImageBackground 
            style = {styles.Background_grey}
            resizeMode="cover"/>
          <ImageBackground 
            style = {styles.Background_pastell}
            source={require("../../images/MAIN/Main_background1.jpg")} 
            resizeMode="cover">
            <View style = {styles.Header}>
                <Image style = {styles.Header_1}  
                source={require("../../images/ICON/Icon_goBack.png")} 
                resizeMode = "contain"
                />
                <Image style = {styles.Header_2} 
                source={require("../../images/ICON/Icon_list.png")} 
                resizeMode = "contain"
                />
            </View>
          </ImageBackground>
          
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
      </View>
      
    )};
};


export default withNavigation(Ein_Chatting);

const styles = StyleSheet.create({
    Container:{
        flex:1,
        //flexDirection:"column"
    },
    Header: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'yellow',
        position: 'relative',
        marginBottom: "35%",
      },
      Header_1: {
        marginTop: "2%",
        width: "10%",
        height: "45%",
      },
      Header_2: {
        left:"750%",
        marginTop: "2%",
        width: "10%",
        height: "45%",
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
    Keyboard:{
      width:"10%",
      height: "10%",
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
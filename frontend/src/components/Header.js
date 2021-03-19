import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {source, HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';

const Header = () => (
    <View style = {styles.Header}>
        <Image style = {styles.Header_1}  
            source={require("../../images/ICON/Icon_goBack.png")} 
            resizeMode = "contain"
        />
        <Image style = {styles.Header_2} 
            source={require("../../images/ICON/Icon_list.png")} 
            resizeMode = "contain"
        />
        <Image style = {styles.Header_3}
            source={require("../../images/ICON/Icon_menu.png")} 
            resizeMode="contain"
        /> 
    </View>
);

const styles = StyleSheet.create({
    Header: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'yellow',
        position: 'relative',
        borderBottomWidth: 1
      },
      Header_1: {
        right: "30%",
        width: "20%",
        height: "75%",
      },
      Header_2: {
        right: "100%",
        width: "20%",
        height: "75%",
      },
      Header_3: {
        //marginTop: "2%",
        left:"700%",
        width:"20%",
        height:"75%"
      },
      /*
      Header_3_1:{
        width: "10%",
        height: "45%",
      },*/
});

export default Header;
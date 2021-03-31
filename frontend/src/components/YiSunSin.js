import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {source,HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';

const YiSunSin = ({navigation}) => (
    <View style = {styles.Container}>

      <TouchableOpacity style = {styles.Characters_2_2}>
        <Image style={styles.YiSunSin} source={require("../../images/YSS/Char_YiSunSin.png")} resizeMode="contain" />
      </TouchableOpacity>

      <View style = {styles.Texts_name_2_1}>
        <Button title = "YiSunSin" />
      </View>
    </View>
);

const styles = StyleSheet.create({
    Container:{
        flex:1
      },
      Texts_name_2_1:{
        marginBottom: "10%",
        marginHorizontal: "7%",
        fontSize: 25,
      },
      YiSunSin:{
        width: "100%",
        height: "100%",
      },
      Characters_2_2:{
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default withNavigation(YiSunSin);
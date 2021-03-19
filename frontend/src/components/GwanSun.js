import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {source,HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';

const GwanSun = ({navigation}) => (
    <View style = {styles.Container}>

      <TouchableOpacity style = {styles.Characters_2_2}
        onPress = {()=>navigation.navigate("MainScreen_2")}>
        <Image style={styles.GwanSun} source={require("../../images/YGS/Char_YuGwanSun.png")} resizeMode="contain" />
      </TouchableOpacity>

      <View style = {styles.Texts_name_2_1}>
        <Button
          title = "GwanSun"
          onPress = {()=>navigation.navigate("MainScreen_2")}>
        </Button>
      </View>
    </View>
);

const styles = StyleSheet.create({
  Container:{
    flex:1
  },
  Texts_name_2_1:{
    marginBottom: "10%",
    marginHorizontal: "3%",
    fontSize: 25,
  },
  GwanSun:{
    width: "90%",
    height: "100%",
  },
  Characters_2_2:{
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withNavigation(GwanSun);
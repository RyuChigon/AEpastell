import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {minWidth, minHeight, source,HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';

const Einstein = ({navigation}) => (
    <View style = {styles.Container}>
      <TouchableOpacity style = {styles.Characters_2_2}
        onPress = {()=>navigation.navigate("MainScreen_2")}>
        <Image style={styles.eins} source={require("../../images/EIN/Char_AlbertEinstein.png")} resizeMode="contain" />
      </TouchableOpacity>

      <View style = {styles.Texts_name_2_1}>
        <Button
          title = "Einstein"
          onPress = {()=>navigation.navigate("MainScreen_2")}>
        </Button>
      </View>
    </View>
);

const styles = StyleSheet.create({
  Container:{
    flex:1,
    //width:"700%"
  },
  Texts_name_2_1:{
    marginBottom: "10%",
    marginHorizontal: "7%",
    fontSize: 25,
  },
  eins:{
    width: "90%",
    height: "90%",
  },
  Characters_2_2:{
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withNavigation (Einstein);
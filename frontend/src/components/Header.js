import React, {Component} from 'react';
import { withNavigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {source, HorizontalScrollView, AppRegistry,ScrollView, StyleSheet, Platform, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';

class Header extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = {styles.Header}>
        <TouchableOpacity style={styles.Header_1} onPress={()=>navigation.goBack()} >
          <Image style = {styles.Header_1_image}
              source={require("../../images/ICON/Icon_goBack.png")} 
              resizeMode = "contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Header_2}>
          <Image style = {styles.Header_2_image} 
              source={require("../../images/ICON/Icon_list.png")} 
              resizeMode = "contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Header_3} onPress={()=>navigation.navigate('MenuScreen')}>
          <Image style = {styles.Header_3_image}
              source={require("../../images/ICON/Icon_menu.png")} 
              resizeMode="contain"
          /> 
        </TouchableOpacity>
      </View>
    )
  }
    
};

const styles = StyleSheet.create({
  Header: {
    flex: 0.1,
    width: "100%",
    flexDirection: 'row',
  },
  Header_1: {
    flex: 1,
  },
  Header_1_image: {
    width: 30,
    height: 30,
  },
  Header_2: {
    flex: 10,
  },
  Header_2_image: {
    width: 30,
    height: 30,
  },
  Header_3: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Header_3_image: {
    width: 30,
    height: 30,
  },
});

export default Header;
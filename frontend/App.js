import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={{ width: "100%", height: "100%" }} source={require("./images/MAIN/Main_background1.jpg")} resizeMode="cover" >
        <Image style={styles.title} source={require("./images/PASTELL/Pastell_logo.png")} resizeMode="contain" />
        <Image style={styles.ein} source={require("./images/PASTELL/Pastell_logo_ein.png")} resizeMode="contain" />
        <View style={styles.btn_welcome}>
          <Button title="Welcome !" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    width: "100%",
    height: "20%",
    marginTop: "5%",
  },
  ein: {
    width: "100%",
    height: "30%",
    marginTop: "10%",
  },
  btn_welcome: {
    marginHorizontal: "20%",
  },
});

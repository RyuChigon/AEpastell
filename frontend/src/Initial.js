import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';


class Initial extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                <Image style={styles.title} source={require("../images/PASTELL/Pastell_logo.png")} resizeMode="contain" />
                <Image style={styles.ein} source={require("../images/PASTELL/Pastell_logo_ein.png")} resizeMode="contain" />
                <View style={styles.btn_welcome}>
                  <Button title="Welcome !" onPress={()=>this.props.navigation.navigate('SignIn')} />
                </View>
              </ImageBackground>
            </View>
        );
    }
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

export default Initial;
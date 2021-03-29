import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Main from './MainScreen';
import { withNavigation } from 'react-navigation';

class MainScreen_2 extends Component {
  render() {
    return (
      <>
      <Main/>
        <View style = {styles.Overlay}>
          <View style = {styles.Container}>
            <Text style = {styles.Text_1}>Albert Einstein</Text>
            <Text style = {styles.Text_2}>Theoretical Physicist</Text>
            <Text style = {styles.Text_3}>intimacy: 1 Level 0</Text>
            <Image style = {styles.eins} source={require("../../../images/EIN/Char_AlbertEinstein.png")} resizeMode="contain"/>
            <Button style = {styles.button}
              title = "Start Chatting!"
              onPress = {()=>{this.props.navigation.navigate("EinChat_real")}}
              />
          </View>
        </View>
      </>
    );
  };
};
const percent = 0;

const styles = StyleSheet.create({
  Overlay:{
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  Texts:{
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text_1:{
    top: "20%",
    fontSize: 30,
    color: 'white'
  },
  Text_2:{
    top: "20%",
    fontSize: 10,
    color: 'white'
  },
  Text_3:{
    top: "20%",
    fontSize: 15,
    marginTop: "20%",
    color: 'white'
  },
  eins:{
    width:"100%",
    height:"150%",
    top: "20%"
  },
  Container:{
    marginTop: "40%",
    flex:1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default withNavigation(MainScreen_2);
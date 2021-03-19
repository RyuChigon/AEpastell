import React, {Component} from 'react';
import {View,Keyboard, TextInput , StyleSheet, KeyboardAvoidingView,ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Chat_keyboard extends Component {
  
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  };

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  };
  /*
  _keyboardDidShow() {
    alert('Keyboard Shown');
  }
  _keyboardDidHide() {
    alert('Keyboard Hidden');
  }
*/
  render() {
    return (
      <KeyboardAvoidingView
      style = {{backgroundColor:'#4c69a5'}}
      resetScrollToCoords={{x:0, y:0}}
      contentContainerStyle ={s.Container}
      
      ScrollEnabled={false}>
        <ScrollView style = {{flex:1}}>
        <View>
        
        <TextInput style={s.input} placeholder='                              Enter your message                              ' onSubmitEditing={Keyboard.dismiss}/>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  };
};

const s = StyleSheet.create({
    Container:{
      flex:1
    },
    input:{
    bottom:"10%",
    top:"0%",
    //width:"100%",
    padding: 10,
    borderWidth: 0.1,
    borderRadius: 20,
    backgroundColor: "#fff",
    //marginTop: "1000%",
    //flexDirection:'column',
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
   }
});

export default Chat_keyboard;
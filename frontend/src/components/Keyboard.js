import React, {Component} from 'react';
import {View,Keyboard, TextInput, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Button, TouchableOpacity} from 'react-native';

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
      resetScrollToCoords={{x:0, y:0}}
      contentContainerStyle ={s.Container}
      ScrollEnabled={false}>
        <View style={{backgroundColor: "white"}}>
          <View style={{flexDirection: "row"}} >
            <View style={{flex: 9}} >
              <TextInput style={s.input} placeholder='Enter your message' onSubmitEditing={Keyboard.dismiss}/>
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity style={s.btn} >  
                <Text>↑</Text>
              </TouchableOpacity>  
            </View>
          </View>
        </View>

      </KeyboardAvoidingView>
    )
  };
};

const s = StyleSheet.create({
  Container:{
    flex:1
  },
  input:{
    paddingVertical: "2%",
    backgroundColor: "white",
    paddingLeft: "2%",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#bbbbbb",
    margin: "1%"
  },
  btn: {
    flex: 1,
    backgroundColor: "#0693E3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});

export default Chat_keyboard;
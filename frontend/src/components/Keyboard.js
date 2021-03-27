import React, {Component} from 'react';
import {View,Keyboard, TextInput, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Button, TouchableOpacity} from 'react-native';

class Chat_keyboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  alertQ = () => {
    var t = this.state.text;
    alert(t);
  }
  
  answer = () => {
    fetch("http://localhost:4000/conv", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        text: this.state.text,
      }),
    })
    .then(res => res.text())
    .then(ans => alert(ans))
  }

  render() {
    return (
      <KeyboardAvoidingView
      resetScrollToCoords={{x:0, y:0}}
      contentContainerStyle ={s.Container}
      ScrollEnabled={false}>
        <View style={{backgroundColor: "white"}}>
          <View style={{flexDirection: "row"}} >
            <View style={{flex: 9}} >
              <TextInput style={s.input} placeholder='Enter your message' onChangeText={(text) => this.setState({text})} />
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity style={s.btn} onPress={this.answer} >  
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
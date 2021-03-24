import React from 'react';
import TouchableOpacity from 'react-native';
import List from '../images/ICON/Icon_list.svg';


class LogoTitle extends React.Component {
    render() {
      return (
        <TouchableOpacity 
        style={{alignItems: "center", justifyContent: "center"}}
        onPress={()=>alert('test')}>
          <List style={{width: "80%", height: "80%"}}/>
        </TouchableOpacity>
      );
    }
  }
import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import Chat_keyboard from '../../components/Keyboard';
import EinChat_Scr from '../../components/EinChat_Scr';
import { StyleSheet, View } from 'react-native';

class EinChat_real extends Component {
  render() {
    return (
      <>
      <EinChat_Scr/>
        <View style = {styles.Overlay} >
          <Chat_keyboard/>
        </View>
      </>

    );
  };
};

export default withNavigation(EinChat_real);

const styles = StyleSheet.create({
  Overlay:{
    position: 'absolute',
    justifyContent: 'flex-end',
    width: "100%",
    height: "100%",
  },
  Container:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
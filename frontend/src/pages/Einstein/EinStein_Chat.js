import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import Chat_keyboard from '../../components/Keyboard';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

class EinStein_Chat extends Component {
  render() {
    return (
      <ImageBackground style = {styles.Background_pastell} source={require("../../../images/MAIN/Main_background1.jpg")} resizeMode="cover">
        <ImageBackground style={styles.Background_grey} />
        <View style={{ flexDirection: 'row'}} >
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
              <Image style = {{width: 30, height: 30}}
                  source={require("../../../images/ICON/Icon_goBack.png")} 
                  resizeMode = "contain"
              />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: "85%"}} onPress={()=>navigation.navigate('MenuScreen')}>
            <Image style = {{width: 30, height: 30}}
                source={require("../../../images/ICON/Icon_menu.png")} 
                resizeMode="contain"
            /> 
          </TouchableOpacity>
        </View>

        <ImageBackground 
          style = {styles.Background_board}
          source={require("../../../images/EIN/EIN_elem_board.png")} />
        <ImageBackground 
          style = {styles.Background_eins}
          source={require("../../../images/EIN/Char_AlbertEinstein.png")} />
        <ImageBackground 
          style = {styles.Background_desk}
          source={require("../../../images/EIN/EIN_elem_dask.png")} />
        <ImageBackground 
          style = {styles.Background_flask}
          source={require("../../../images/EIN/EIN_elem_flask.png")} />

        <View style = {styles.Overlay} >
          <Chat_keyboard/>
        </View>
      </ImageBackground>
    );
  };
};

export default withNavigation(EinStein_Chat);

const styles = StyleSheet.create({
  Overlay:{
    position: 'absolute',
    justifyContent: 'flex-end',
    width: "100%",
    height: "100%",
  },
  Background_pastell:{
      width:"100%",
      height:"100%",
  },
  Background_grey:{
      flex: 1,
      flexDirection: "column",
      width:"100%",
      height: "40%",
      marginTop: "100%",
      backgroundColor:"grey",
      position:"absolute"
  },
  Background_eins:{
      width:"70%",
      height: "70%",
      top: "25%",
      left:"25%",
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute"
  },
  Background_board:{
      left:"16%",
      top:"10%",
      width:"80%",
      height:"60%",
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute"
  },
  Background_desk:{
      width:"90%",
      height: "70%",
      left:"8%",
      top: "45%",
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute"
  },
  Background_flask:{
      width:"35%",
      height: "25%",
      left:"60%",
      top: "61%",
      justifyContent: 'center',
      alignItems: 'center',
      position:"absolute"
  },
});
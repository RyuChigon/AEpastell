import React, {useState} from 'react';
import { createPortal } from 'react-dom';
import {StyleSheet, SafeAreaView, View, Text, ImageBackground, TouchableOpacity, Image, Button, TextInput} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Info = (props) => {
  const [value, onChangeText] = React.useState('  '+props.name);

  return (
    <TextInput
    style={{ width: props.width, height: 40, borderColor: 'black', borderWidth: 1, backgroundColor: "white"}}
    onChangeText={text => onChangeText(text)}
    value={value}
    maxLength={40}
    />
  )
}
/*
const options = {
  title: 'Load Photo',
  customButtons: [
    { name: 'button_id_1', title: 'CustomButton 1' },
    { name: 'button_id_2', title: 'CustomButton 2' }
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
*/
/*
chooseImage = () => {
  let options = {
    title: 'Select Image',
    customButtons: [
      { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = { uri: response.uri };
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      // alert(JSON.stringify(response));s
      console.log('response', JSON.stringify(response));
      this.setState({
        filePath: response,
        fileData: response.data,
        fileUri: response.uri
      });
    }
  });
}
launchCamera = () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchCamera(options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = { uri: response.uri };
      console.log('response', JSON.stringify(response));
      this.setState({
        filePath: response,
        fileData: response.data,
        fileUri: response.uri
      });
    }
  });
}
*/
class ProfileScreen extends React.Component {
  render() {
    return (
      <ImageBackground style={{flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems:"center"}} source={require("../../../images/MAIN/Main_background1.jpg")} resizeMode="cover">
        <TouchableOpacity style={styles.edit_profile} onPress={()=>this.props.navigation.goBack()}>
          <Text>Change Photo</Text>
        </TouchableOpacity> 
        <View style={{marginTop: "3%",marginHorizontal: "5%", alignItems: "space-evenly", justifyContent: "space-between"}}>
          <View style={{height: "10%", flexDirection: "row", alignItems: "center"}}>
            <View>
              <Text style={{paddingBottom: "1%"}}>First Name</Text>
              <Info name="First Name" width={120}/>
            </View>
            <View>
              <Text style={{paddingBottom: "1%"}}>Last Name</Text>
              <Info name="Second Name" width={120} />
            </View>
          </View>
          <View style={{height: "10%", flexDirection: "row", justifyContent: "space-between"}}>
            <View> 
              <Text style={{paddingBottom: "1%"}}>Birthday</Text>
              <Info name="Month" width={120} />
            </View>
            <View>
              <Text style={{paddingBottom: "1%"}}>Day</Text>
              <Info name="Day" width={120} />
            </View>
            <View>
              <Text style={{paddingBottom: "1%"}}>Year</Text>
              <Info name="Year" width={120} />
            </View>
          </View>
          <View style={{height: "80%", flexDirection: "column"}}>
            <View> 
              <Text style={{paddingBottom: "1%"}}>Change Password</Text>
              <Info name="New Password" width={300} />
            </View>
            <View> 
              <Info name="Confirm Password" width={300} />
              <Text style={{paddingBottom: "5%"}}>Use 8 or more characters with a mix of letters, numbers and symboles</Text>
            </View>
            <View>
              <Text style={{paddingBottom:"1%"}}>Changing password requires identity verification</Text>
              <View style={{flexDirection: "row"}}>
                <Info name="Phone Number" width={250}/>
                <View style={{backgroundColor: 'skyblue'}}>
                  <Button title="Get Number" onPress={()=>{this.props.navigation.navigate('SettingScreen')}}/>
                </View>
              </View>
              <Text style={{paddingBottom:5}}>Your phone number is only used for account security purpose.</Text>
              <Info name="Verification Number" width={300}/>
              <Text>Please write the verification number that you have received</Text>
              <View style={{backgroundColor: 'skyblue'}}>
                <Button style={{color: 'blue', bottom: '5%'}} title="Save Settings" onPress={()=>{this.props.navigation.navigate('SettingScreen')}}/>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      top: 50,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    dp: {
      width: "100%",
      height: "30%",
      marginTop: "10%",
    },
    edit_profile: {
      width: "30%",
      height: "5%",
      marginTop: "25%",
      marginHorizontal: "40%",
      backgroundColor: "#61dafb",
      alignItems: "center",
      justifyContent: "center" 
    },
});

export default ProfileScreen;
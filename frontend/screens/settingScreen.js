import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Switch, View, Text, ImageBackground, Image, Button, TouchableOpacity} from 'react-native';
import Profile from './profileScreen';
import PlayerVolume from '../components/volumeSlider.js';
import List from '../images/ICON/Icon_list.svg';
export default function Setting({navigation}) {

  const [charisEnabled, setcharIsEnabled] = useState(false);
  const [infoisEnabled, setinfoIsEnabled] = useState(false);
  const chartoggleSwitch = () => setcharIsEnabled(previousState => !previousState);
  const infotoggleSwitch = () => setinfoIsEnabled(previousState => !previousState);
  
  
  return (
    <>
    <ImageBackground style={{flex: 1, alignItems: "center"}} source={require("../images/MAIN/Main_background1.jpg")} resizeMode="cover">
      
      <View style= {{alignItems: "center", marginTop: "10%",}}>
        <Text style={{fontSize:20}}>Minsik Choi</Text>
        <Text style={{fontSize:14}}>minsikchoi@gmail.com</Text>
      </View>
      <View style={styles.edit_profile}>
        <Button title="Edit Profile" onPress={()=>{navigation.navigate("Menu", {screenComponent: <Setting/>})}}/>
      </View>
      <View style={{justifyContent: 'space-between', position: 'absolute', top: "45%", width: '80%', height: '15%'}}>
        <View style={{flexDirection: 'row', justifyContent:"space-around"}}>
          <Text style={{fontSize: 24}}>Alarm from Characters</Text>
          <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={charisEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={chartoggleSwitch}
          value={charisEnabled}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent:"space-around"}}>
          <Text style={{fontSize: 24}}>Alarm from information</Text>
          <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={infoisEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={infotoggleSwitch}
          value={infoisEnabled}
          />
        </View>
      </View>
      
      <View style={{position: "absolute", top: "65%", justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>Inventory</Text>
      </View>
      <View style={styles.inventory}>
        <View style={styles.inv1}>
          <Image style={styles.food} source={require("../images/FOOD/Food_Water.png")} resizeMode='contain'/>
          <Text>Water</Text>
        </View>
        <View style={styles.inv2}>
          <Image style={styles.food} source={require("../images/FOOD/Food_Carrot.png")} resizeMode='contain'/>
          <Text>Carrot</Text>
        </View>
        <View style={styles.inv3}>
          <Image style={styles.food} source={require("../images/FOOD/Food_Apple.png")} resizeMode='contain'/>
          <Text>Apple</Text>
        </View>  
        <View style={styles.inv4}>
          <Image style={styles.food} source={require("../images/FOOD/Food_Meat.png")} resizeMode='contain'/>
          <Text>Meat</Text>
        </View>  
      </View>
      <TouchableOpacity
      style={{backgroundColor: 'skyblue', marginTop: "20%", width: "30%", height: "5%", justifyContent: "center", alignItems: "center"}}
      onPress={()=>navigation.navigate("Shop")}
      >
        <Text style={{fontSize: 20}}>Let's Shop!</Text>
      </TouchableOpacity>
  </ImageBackground>
    </>
  );

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
    food: {
      width: "80%",
      height: "80%",
    },
    edit_profile: {
      width: 150,
      height: 40,
      marginTop: "1%",
      marginHorizontal: "40%",
      backgroundColor: 'skyblue'
    },
    inventory: {
      position: "absolute",
      top : "75%",
      width: "80%",
      height: "15%",
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    inv: {
      flex: 1, 
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    inv1: {
      width: "20%",
      height: "80%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    inv2: {
      width: "20%",
      height: "80%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    inv3: {
      width: "20%",
      height: "80%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    inv4: {
      width: "20%",
      height: "80%",
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

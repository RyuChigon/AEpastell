import React, {useState} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, Button, TouchableOpacity} from 'react-native';
import Setting from './settingScreen';

export default function Menu({route, navigation}) {

    const {screenComponent} = route.params;
    return (
        <>
        {screenComponent}
        <View style={styles.overlay}>
            <View style={styles.container}>
                <View style={{flex: 1, paddingLeft: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Minsik Choi</Text>
                </View>
                <View style={{backgroundColor: 'black', width: 223, height: 1}}></View>
                <TouchableOpacity
                    style={{flex: 1, paddingLeft: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}
                    onPress={()=>navigation.navigate("Setting")}>
                        <Text style={{fontSize: 20}}>Settings</Text>
                </TouchableOpacity>
                <View style={{backgroundColor: 'black', width: 223, height: 1}}></View>
                <TouchableOpacity
                    style={{flex: 1, paddingLeft: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}
                    onPress={()=>navigation.navigate("How to Use")}>
                        <Text style={{fontSize: 20}}>How to Use</Text>
                </TouchableOpacity>
                <View style={{backgroundColor: 'black', width: 223, height: 1}}></View>
                <TouchableOpacity
                    style={{flex: 1, paddingLeft: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}
                    onPress={()=>navigation.navigate("Contact Us")}>
                        <Text style={{fontSize: 20}}>Contact Us</Text>
                </TouchableOpacity>
                <View style={{backgroundColor: 'black', width: 223, height: 1}}></View>
                <TouchableOpacity
                    style={{flex: 1, paddingLeft: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}
                    onPress={()=>navigation.navigate("Sign Out")}>
                        <Text style={{fontSize: 20}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View> 

        </>
    );
}

const styles = StyleSheet.create({
        overlay:{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignItems: "flex-end"
        },
        container:{
            
            width: 225,
            height: 250,
            backgroundColor: '#ffe4e1',
            borderRadius: 15,
            paddingRight: 50,
            borderWidth: 2,
            top: 10,
            right: 10,
        }
});
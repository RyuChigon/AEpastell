import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

/* react hook
const contactInfo = (props) =>{
    return(
        <>
        <Text>CEO: {props.name}</Text>
        <Text>TEL: {props.phone}</Text>
        </>
    )
}
*/

class AboutScreen extends React.Component {
    render() {
        return (
            <ImageBackground style={{flex: 1, alignItems: "center"}} source={require("../../../images/MAIN/Main_background1.jpg")} resizeMode="cover">
                <TouchableOpacity style={{ marginRight: "95%" }} onPress={()=>this.props.navigation.goBack()} >
                    <Image style = {{width: 30, height: 30}}
                        source={require("../../../images/ICON/Icon_goBack.png")} 
                        resizeMode = "contain"
                    />
                </TouchableOpacity>
                <Text style={{fontStyle: "italic", fontSize: 30, paddingTop: 20}}>AE</Text>
                <View style={{alignItems:"center"}}>
                    <Image style={{flex: 2, width: 600, height: 300}} source={require("../../../images/AE/AE_logo_original.png")} resizeMode="cover"/>
                    <View style={{flex: 1}}>
                        <Text style={styles.info}>CEO: Minsik Choi</Text>
                        <Text style={styles.info}>TEL: 010-6370-1930</Text>
                        <Text style={styles.info}>Email: alsrlraks@kaist.ac.kr</Text> 
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    info:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        paddingBottom: 20, 
    }
})

export default AboutScreen;
import React from 'react';
import {StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

class HowtoScreen extends React.Component {
    render() {
        return (
            <ImageBackground style={{flex: 1, alignItems: "flex-start", paddingLeft: 10, paddingTop: 20}} source={require("../../../images/MAIN/Main_background1.jpg")} resizeMode="cover">
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                    <Image style = {{width: 30, height: 30}}
                        source={require("../../../images/ICON/Icon_goBack.png")} 
                        resizeMode = "contain"
                    />
                </TouchableOpacity>
                <Text style={styles.desc}>1. Choose the character you wish to talk to!</Text>
                <Text style={styles.desc}>2. Enter your message or record your voice to talk to the character.</Text>
                <Text style={styles.desc}>3rd. Freely interact with the character</Text>
                <Text style={styles.title}>Intimacy Rule</Text>
                <Text style={styles.desc}>1. Intimacy level will rise if you provide the character with an appropriate food.</Text>
                <Text style={styles.desc}>2. Intimacy level will decrease if the character dislikes the provided food. </Text>
                <Text style={styles.desc}>3. It is up to you to find out the food that each character likes or dislikes.</Text>
                <Text style={styles.desc}>4. High intimacy will make the character become more interactive.</Text>
            </ImageBackground>
        );
    }
}

const styles=StyleSheet.create({
    desc:{
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 20
    },
    title:{
        fontWeight: 'bold',
        fontSize: 30, 
        paddingTop: 50,
        paddingBottom: 40, 
        alignSelf: 'center'
    }
})

export default HowtoScreen;
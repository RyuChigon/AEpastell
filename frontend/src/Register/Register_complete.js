import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class Register_complete extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                    <View style={styles.title} >
                        <Text style={styles.title_font}>Register</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_font}>Sign up is complete !</Text>
                    </View>
                    <View style={styles.btn_goBack}>
                        <Button title="Go Back" onPress={()=>this.props.navigation.navigate('SignIn')}/>
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        alignItems: "center",
        marginTop: "10%",
    },
    title_font: {
        fontWeight: "bold",
        fontSize: 30,
    },
    content: {
        alignItems: "center",
        marginTop: "40%",
    },
    content_font: {
        alignItems: "center",
        fontSize: 40,
    },
    btn_goBack: {
        marginTop: "50%",
        marginHorizontal: "20%",
    },
})

export default Register_complete;
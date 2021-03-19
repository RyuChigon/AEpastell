import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';

class SignIn extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                    <Image style={styles.title} source={require("../images/PASTELL/Pastell_logo.png")} resizeMode="contain" />
                    <TextInput style={styles.input_email} placeholder="email" />
                    <TextInput style={styles.input_pw} placeholder="password" />
                    <View style={styles.checkbox}>
                        <CheckBox />
                        <Text style={{ marginLeft: "1%" }}>
                            check me out
                        </Text>
                    </View>
                    <View style={styles.signIn}>
                        <Button title="Sign in" onPress={()=>this.props.navigation.navigate('MainScreen')} />
                    </View>
                    <View style={styles.other_btns}>
                        <TouchableOpacity style={styles.other_btn} onPress={()=>this.props.navigation.navigate('Agreement')} >
                            <Text style={{color: "#2196F3"}}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.other_btn} onPress={()=>this.props.navigation.navigate('FindID_process')} >
                            <Text style={{color: "#2196F3"}}>find ID</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.other_btn} onPress={()=>this.props.navigation.navigate('FindPW_process1')}>
                            <Text style={{color: "#2196F3"}}>find PW</Text>
                        </TouchableOpacity>
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
      width: "100%",
      height: "20%",
      marginTop: "5%",
    },
    input_email: {
        marginHorizontal: "20%",
        height: "5%",
        backgroundColor: "white",
        marginTop: "10%",
    },
    input_pw: {
        marginHorizontal: "20%",
        height: "5%",
        backgroundColor: "white",
        marginTop: "3%",
    },
    checkbox: {
        marginTop: "3%",
        marginLeft: "20%",
        flexDirection: "row",
        alignItems: "center",
    },
    signIn: {
        marginTop: "3%",
        marginHorizontal: "20%",
    },
    other_btns: {
        marginTop: "3%",
        marginLeft: "20%",
        flexDirection: "row",
        alignItems: "center",
    },
    other_btn: {
        backgroundColor: "#ffffff",
        paddingVertical: "2%",
        paddingHorizontal: "4%",
        marginRight: "8%",
    },
});

export default SignIn;
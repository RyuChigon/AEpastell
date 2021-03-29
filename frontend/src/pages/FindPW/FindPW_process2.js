import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TextInput } from 'react-native';

class FindPW_process2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                    <View style={styles.title} >
                        <Text style={styles.title_font}>Find PW</Text>
                    </View>
                    <TextInput style={styles.input} placeholder="password" />
                    <TextInput style={styles.input} placeholder="confirm password" />
                    <Text style={styles.explain_font} >Use 8 or more characters with a mix of letters, numbers & symbols</Text> 

                    <View style={styles.btn_change}>
                        <Button title="Search" onPress={()=>this.props.navigation.navigate('FindPW_complete')}/>
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
        marginBottom: "40%",
    },
    title_font: {
        fontWeight: "bold",
        fontSize: 30,
    },
    input: {
        marginHorizontal: "20%",
        height: "5%",
        backgroundColor: "white",
        marginTop: "3%",
    },
    explain_font: {
        marginHorizontal: "20%",
        fontSize: 12,
    },
    btn_change: {
        marginHorizontal: "20%",
        marginTop: "20%",
    },
})


export default FindPW_process2;
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class Register_process extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                    <View style={styles.title} >
                        <Text style={styles.title_font}>Register</Text>
                    </View>

                    <TextInput style={styles.input} placeholder="email" />
                    <Text style={styles.explain_font} >You can use letters and numbers</Text>      
                    <TextInput style={styles.input} placeholder="password" />
                    <TextInput style={styles.input} placeholder="confirm password" />
                    <Text style={styles.explain_font} >Use 8 or more characters with a mix of letters, numbers & symbols</Text> 
                    <TextInput style={styles.input} placeholder="1st Name" />
                    <TextInput style={styles.input} placeholder="Last Name" />  

                    <View style={styles.birth}>
                        <Picker style={styles.input_birth}>
                            <Picker.Item label="Month" value="Month" />
                            <Picker.Item label="1" value="January" />
                            <Picker.Item label="2" value="February" />
                            <Picker.Item label="3" value="March" />
                            <Picker.Item label="4" value="April" />
                            <Picker.Item label="5" value="May" />
                            <Picker.Item label="6" value="June" />
                            <Picker.Item label="7" value="July" />
                            <Picker.Item label="8" value="August" />
                            <Picker.Item label="9" value="September" />
                            <Picker.Item label="10" value="October" />
                            <Picker.Item label="11" value="November" />
                            <Picker.Item label="12" value="December" />
                        </Picker> 
                        <TextInput style={styles.input_birth} placeholder="Day" />  
                        <TextInput style={styles.input_birth} placeholder="Year" />  
                    </View>
                    <Text style={styles.explain_font2} >Your birthday</Text>

                    <View style={styles.phone}>
                        <TextInput style={styles.input_phone} placeholder="phone Number" />
                        <Button title="Get number"/>
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
    explain_font2: {
        marginHorizontal: "20%",
        fontSize: 12,
        marginTop: "5%",
    },
    birth: {
        marginTop: "5%",
        flexDirection: "row",
        marginHorizontal: "20%",
        height: "3%",
    },
    input_birth: {
        width: "30%",
        height: "150%",
        backgroundColor: "white",
        marginRight: "5%",
    },
    phone: {
        flexDirection: "row",
        marginHorizontal: "20%",
    },
    input_phone: {
        marginHorizontal: "20%",
        height: "5%",
        backgroundColor: "white",
        marginTop: "3%",
    },
})

export default Register_process;
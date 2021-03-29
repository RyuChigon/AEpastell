import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class FindID_process extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                    <View style={styles.title} >
                        <Text style={styles.title_font}>Find ID</Text>
                    </View>
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
                    <Text style={styles.explain_font} >Your birthday</Text>

                    <View style={styles.phone}>
                        <TextInput style={styles.input_phone} placeholder="phone Number" />
                        <Button title="Get number"/>
                    </View>
                    <TextInput style={styles.input} placeholder="Vertification Number" />
                    <View style={styles.btn_search}>
                        <Button title="Search" onPress={()=>this.props.navigation.navigate('FindID_complete')}/>
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
    birth: {
        marginTop: "30%",
        flexDirection: "row",
        marginHorizontal: "20%",
        height: "5%",
    },
    input_birth: {
        width: "30%",
        backgroundColor: "white",
        marginRight: "5%",
    },
    phone: {
        marginTop: "3%",
        flexDirection: "row",
        marginHorizontal: "20%",
        height: "5%",
    },
    input_phone: {
        backgroundColor: "white",
        marginRight: "10%",
        width: "60%"
    },
    btn_search: {
        marginHorizontal: "20%",
        marginTop: "20%",
    },
})

export default FindID_process;
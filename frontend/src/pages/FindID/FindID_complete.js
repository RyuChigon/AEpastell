import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


class FindID_complete extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                    <View style={styles.title} >
                        <Text style={styles.title_font}>Find ID</Text>
                    </View>
                    <View style={styles.result} >
                        <Text style={styles.explain_font} >Your id is 'aieducation@gmail.com'</Text>
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
    result: {
        alignItems: "center",
        marginTop: "40%",
    },
    explain_font: {
        marginHorizontal: "20%",
        fontSize: 30,
    },
    btn_goBack: {
        marginHorizontal: "20%",
        marginTop: "30%",
    },
})

export default FindID_complete;
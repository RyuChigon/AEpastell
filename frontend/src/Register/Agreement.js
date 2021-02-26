import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';

class Agreement extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                    <View style={styles.title} >
                        <Text style={styles.title_font}>Privacy Police</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_font}>When you use our services, you're trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. We collect your history of chat, purchase and activities. We only use these information to build better services and solve some problems like refund.</Text>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Agree" onPress={()=>this.props.navigation.navigate('Register_process')}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Disagree" color="#FF8484" onPress={()=>this.props.navigation.navigate('SignIn')}/>
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
        marginTop: "20%",
    },
    title_font: {
        fontWeight: "bold",
        fontSize: 30,
    },
    content: {
        backgroundColor: "#ffffff",
        marginTop: "5%",
        marginHorizontal: "10%",
    },
    content_font: {
        margin: "10%",
        fontSize: 20,
    },
    btn: {
        marginTop: "5%",
        marginHorizontal: "20%",
    },
})

export default Agreement;
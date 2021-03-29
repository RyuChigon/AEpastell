import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';

class Register_process extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            birth: '',
            phone: '',
        };

        this.handleEmail = this.handleEmail.bind(this);
    }

    handleEmail(e) { this.setState({email: e.target.value}); };
    handlePW(e) { this.setState({password: e.target.value}); };
    handleName(e) { this.setState({name: e.target.value}); };
    handleBirth(e) { this.setState({birth: e.target.value}); };
    handlePhone(e) { this.setState({phone: e.target.value}); };

    componentDidMount() { //not play
        fetch('http://localhost:4000/api')
            .then(res=>res.json())
            .then(data=>this.setState({name:data.name}));
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: "100%" }} source={require("../../../images/MAIN/Main_background1.jpg")} resizeMode="cover" >
                    <View style={styles.title} >
                        <Text style={styles.title_font}>Register</Text>
                    </View>
                    <TextInput style={styles.input} onChange={this.handleEmail} placeholder="email" />
                    <Text style={styles.explain_font} >You can use letters and numbers</Text>      
                    <TextInput style={styles.input} onChange={this.handlePW} placeholder="password" />
                    <TextInput style={styles.input} placeholder="confirm password" />
                    <Text style={styles.explain_font} >Use 8 or more characters with a mix of letters, numbers & symbols</Text> 
                    <TextInput style={styles.input} onChange={this.handleName} placeholder="1st Name" />
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
                        <TextInput style={styles.input_birth} onChange={this.handleBirth} placeholder="Year" />  
                    </View>
                    <Text style={styles.explain_font} >Your birthday</Text>

                    <View style={styles.phone}>
                        <TextInput style={styles.input_phone} onChange={this.handlePhone} placeholder="phone Number" />
                        <Button title="Get number"/>
                    </View>
                    <Text style={styles.explain_font} >We’ll use your number for account security. It won’t be visible to others.</Text> 
                    <TextInput style={styles.input} placeholder="Vertification Number" />
                    <Text style={styles.explain_font} >Write vertification number from your phone</Text>
                    <View style={styles.btn_register}>
                        <Button title="Register" onPress={()=>this.props.navigation.navigate('SignIn')}/>
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
        marginTop: "5%",
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
    btn_register: {
        marginHorizontal: "20%",
        marginTop: "10%",
    },
})

export default Register_process;
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { colors } from '../utils';
 
const LoginScreen = ({ navigation }) => {
    const[ userName, setUserName ] = useState('');
    const[ password, setPassword ] = useState('');

    const handleLogin = () => {
        if (userName === 'u' && password === 'p'){
            navigation.navigate('Home');
        } else {
            Alert.alert('try again');
        }
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Username"
                    underlineColorAndroid='transparent'
                    onChangeText={(uname) => setUserName(uname)}/>
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => setPassword(password)}/>
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
        </View>
        );
    };
 
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    inputContainer: {
        borderBottomColor: colors.white,
        backgroundColor: colors.white,
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: colors.white,
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: colors.primary,
    },
    loginText: {
        color: 'white',
    }
  });
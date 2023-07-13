import React from 'react';
// import { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Button, TextInput, Image, Alert, TouchableOpacity, ScrollView} from 'react-native';

// import Menu from './Menu';

const LoginScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
      <Image style = {styles.image} source = {require('./Images/logo.jpg')}/>
      <Text style={styles.texthead02}>Innovative Talent Solution</Text>
      <Text style={styles.texthead05}>Creating the future</Text>
      
      <Text style={styles.texthead01}>Login</Text>
      <Text style={styles.texthead04}>Welcome to Joules to Watts Counsultant Portal</Text>   
      <Text style={styles.texthead05}>Enter Your Email ID / Mobile Number<Text style={styles.textinput01}>*</Text></Text>
      <TextInput style={styles.textinput} placeholder='Enter your gmail/Mobile no.' keyboardType = 'numeric' maxLength={10} placeholderTextColor = 'gray'></TextInput>
      <View style = {{ flexDirection : 'row', width:'80%', justifyContent:'space-around'}}>
      {/* <Button title = 'Send OTP' color="#74C497" style = {styles.button} onPress={() => Alert.alert('OTP sent')} />
      <Button title = 'Reset' color="#74C497" style = {styles.button} ></Button> */}
      <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('Otp') }>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button01}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      </View> 
      </View>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems: 'center',
    backgroundColor : 'white',
  },
  texthead01 : {
    // alignContent : 'center',
    color:'black',
    fontSize : 40,
    // marginTop:40,
    marginLeft : '10%',
    marginBottom : 20,
    marginTop : '10%',
    // textAlign:'center'
  },
  texthead02 : {
    marginLeft : '10%',
    marginBottom : 10,
    marginRight : '10%',
    color:'black',
    fontSize : 32,
  },
  texthead04 : {
    color:'black',
    fontSize : 20,
    marginLeft : '10%',
    marginBottom : 20,
    marginRight : '10%',
  },
  texthead05 : {
    color:'black',
    fontSize : 20,
    fontWeight:'100',
    marginLeft : 30,
    marginRight : 30,
  },
  textinput : {
    height : 40,
    // width : 300,
    borderWidth : 1,
    color : 'black',
    borderRadius:5,
    marginLeft : '8%',
    marginBottom : 30,
    marginRight :'8%',
  },
  textinput01 : {
    height : 40,
    width : 300,
    color : 'red',
  },
  button : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    borderBottomWidth : 20,
    marginRight : 30,
    borderRadius : "10%",
  },
  image : {
    height : 130,
    width : 130,
    marginLeft : 30,
    marginTop : 20,
  },
  button01: {
    marginLeft: '10%',
    padding: 10,
    width : 100,
    backgroundColor: '#75C597',
    borderRadius: 5,
    marginBottom : 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign : 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    color : 'black',
    marginLeft : 30,
    marginRight : 30,
    borderRadius : 5,
  },
  button : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    borderBottomWidth : 20,
    marginRight : 30,
    borderRadius : "10%",
  },
})

export default LoginScreen;
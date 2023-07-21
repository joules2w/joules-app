import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const API_BASE_URL = 'http://www.consultant.joulestowatts-uat.com/auth'; // Replace with your API base URL

const LoginScreen = ({ navigation }) => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  const handleOTP = () => {
    sendOTP(phoneNumber);
  };

  const sendOTP = (phoneNumber) => {
    const apiUrl = `${API_BASE_URL}/sendotp`; // Use the correct API endpoint

    axios.post(apiUrl, { phone : phoneNumber }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('OTP sent successfully!', response.data);
      Alert.alert('Otp sent successfully');
      // After successfully sending OTP, navigate to the Otp screen
      navigation.navigate('Otp', { phone :  phoneNumber }); // Pass the phone parameter here
    })
    .catch((error) => {
      console.error('Error sending OTP:', error);
      Alert.alert('Error', 'Failed to send OTP. Please try again later.');
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.image} source={require('./Images/logo.png')} />
          <Text style={styles.texthead02}>Innovative Talent Solution</Text>
          <Text style={styles.texthead05}>Creating the future</Text>

          <Text style={styles.texthead01}>Login</Text>
          <Text style={styles.texthead04}>Welcome to Joules to Watts Consultant Portal</Text>
          <Text style={styles.texthead05}>Enter Your Email ID / Mobile Number<Text style={styles.textinput01}>*</Text></Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter your gmail/Mobile no."
            keyboardType="numeric"
            maxLength={10}
            placeholderTextColor="#808080"
            value={phoneNumber}
            onChangeText={handlePhoneNumber}
          />
          <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.button01} onPress={handleOTP}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  texthead01: {
    color: 'black',
    fontSize: 40,
    marginLeft: '10%',
    marginBottom: 20,
    marginTop: '10%',
  },
  texthead02: {
    marginLeft: '10%',
    marginBottom: 10,
    marginRight: '10%',
    color: 'black',
    fontSize: 32,
  },
  texthead04: {
    color: 'black',
    fontSize: 20,
    marginLeft: '10%',
    marginBottom: 20,
    marginRight: '10%',
  },
  texthead05: {
    color: 'black',
    fontSize: 20,
    fontWeight: '100',
    marginLeft: 30,
    marginRight: 30,
  },
  textinput: {
    height: 40,
    borderWidth: 1,
    color: 'black',
    borderRadius: 5,
    marginLeft: '8%',
    marginBottom: 30,
    marginRight: '8%',
  },
  textinput01: {
    height: 40,
    width: 300,
    color: 'red',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 20,
    marginRight: 30,
    borderRadius: '10%',
  },
  image: {
    height: 130,
    width: 130,
    marginLeft: 30,
    marginTop: 20,
  },
  button01: {
    marginLeft: '10%',
    padding: 10,
    width: 100,
    backgroundColor: '#75C597',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;



import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [emailOrMobile, setEmailOrMobile] = useState('');

  const handleEmailOrMobileChange = (value) => {
    setEmailOrMobile(value);
  };

  const handleSendOTP = () => {
    sendOTP(emailOrMobile);
  };

  const sendOTP = (emailOrMobile) => {
    const apiUrl = 'http://www.consultant.joulestowatts-uat.com/auth/sendotp'; // Replace with your actual API URL

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: emailOrMobile,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('OTP sent successfully!', data);
        // After successfully sending OTP, navigate to the Otp screen
        navigation.navigate('Otp', { phone: emailOrMobile }); // Pass the phone parameter here
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
          <Image style={styles.image} source={require('../../../Assets/Images/logo.jpg')} />
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
            placeholderTextColor="gray"
            onChangeText={handleEmailOrMobileChange}
            value={emailOrMobile}
          />
          <ScrollView></ScrollView>
          <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.button01} onPress={handleSendOTP}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button01}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('Others')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  texthead01: {
    color: '#000000',
    fontSize: 40,
    marginLeft: '10%',
    marginBottom: 20,
    marginTop: '10%',
  },
  texthead02: {
    marginLeft: '10%',
    marginBottom: 10,
    marginRight: '10%',
    color: '#000000',
    fontSize: 32,
  },
  texthead04: {
    color: '#000000',
    fontSize: 20,
    marginLeft: '10%',
    marginBottom: 20,
    marginRight: '10%',
  },
  texthead05: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '100',
    marginLeft: 30,
    marginRight: 30,
  },
  textinput: {
    height: 40,
    borderWidth: 1,
    color: '#000000',
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
    backgroundColor: '#5f9ea0',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;

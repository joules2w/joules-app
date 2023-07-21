import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const API_BASE_URL = 'http://www.consultant.joulestowatts-uat.com/auth';

const OtpScreen = ({ route, navigation }) => {

  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const { phone } = route.params;

  const handleResend = () => {
    setOtp('');
    setTimer(30);
    sendOTP(phone);
  };

  const sendOTP = (phoneNumber) => {
    const apiUrl = `${API_BASE_URL}/sendotp`;

    axios.post(apiUrl, { phone: phoneNumber }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('OTP sent successfully!', response.data);
      Alert.alert('Otp resend successfully');
    })
    .catch((error) => {
      console.error('Error sending OTP:', error);
      if (error.response) {
        // The request was made and the server responded with an error status code
        console.error('Error status:', error.response.status);
        console.error('Error data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error:', error.message);
      }
  
      Alert.alert('Error', 'Failed to send OTP. Please try again later.');
    });
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  const handleOTPChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = () => {
    verifyOTP(phone, otp);
  };

  const verifyOTP = (phoneNumber, enteredOTP) => {
    const apiUrl = `${API_BASE_URL}/verifyotp`;

    axios.post(apiUrl, { phone: phoneNumber, otpEnteredByUser: enteredOTP }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('OTP verification response:', response.data);
      if (response.data) {
        Alert.alert('Success', 'OTP verification successful!');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Invalid OTP!');
      }
    })
    .catch((error) => {
      console.error('Error verifying OTP:', error);
      Alert.alert('Error', 'Failed to verify OTP. Please try again later.');
    });
  };  

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={require('./Images/logo.png')} />
        <Text style={styles.texthead02}>Innovative Talent Solution</Text>
        <Text style={styles.texthead05}>Creating the future</Text>

        <Text style={styles.texthead04}>Welcome to Joules to Watts Consultant Portal</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleOTPChange}
            value={otp}
            keyboardType="numeric"
            maxLength={4}
            placeholder="Enter OTP"
            placeholderTextColor={'black'}
          />
        </View>
        <View style={styles.buttonContainer}>
          {timer > 0 ? (
            <Text style={styles.timerText}>Timer: {timer}</Text>
          ) : (
            <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
              <Text style={styles.resendButtonText}>Resend</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 200,
    textAlign: 'center',
    color: 'black',
  },
  timerText: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  resendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 40,
    backgroundColor: '#5f9ea0',
    borderRadius: 10,
  },
  resendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 40,
    backgroundColor: '#5f9ea0',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
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
  textinput01: {
    height: 40,
    width: 300,
    color: 'red',
  },
});

export default OtpScreen;
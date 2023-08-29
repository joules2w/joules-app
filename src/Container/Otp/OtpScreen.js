import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
// import { setOtpDetails } from '../../redux/actions/authActions';
import axios from 'axios';
import BASE_URL from '../../constants/baseurl';

// const mapDispatchToProps = {
//   setOtpDetails,
// };

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
    const apiUrl = `${BASE_URL}auth/sendotp`;

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
        // console.error('Error:', error.message);
        Alert.alert('Error', 'Failed to send OTP. Please try again later.');
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
    setOtp('');
  };

  const verifyOTP = (phoneNumber, enteredOTP) => {
    const apiUrl = `${BASE_URL}auth/verifyotp`;

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
      // console.error('Error verifying OTP:', error);
      Alert.alert('Error', 'Please enter a valid 4 digit OTP');
    });
  };  

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Logo and Headings */}
        <Image style={styles.image} source={require('../../Assets/Images/logo.jpg')} />
        <Text style={styles.texthead01}>Innovative Talent Solution</Text>
        <Text style={styles.texthead02}>Creating the future</Text>
        <Text style={styles.texthead03}>Welcome to Joules to Watts Consultant Portal</Text>
        <View style={styles.inputContainer}>
          {/* Verufy OTP */}
          <TextInput style={styles.input}
            onChangeText={handleOTPChange}
            value={otp}
            keyboardType="numeric"
            maxLength={4}
            placeholder="Enter OTP"
            placeholderTextColor={'black'} />
        </View>
        {/* Resend and Submit button */}
        <View style={styles.buttonContainer}>
          {timer > 0 ? (
            <Text style={styles.timerText}>Timer: {timer}</Text>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleResend}>
              <Text style={styles.buttonText}>Resend</Text>
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
    backgroundColor: '#fff',
  },
  image: {
    height: 100,
    width: 100,
    marginHorizontal : '10%',
    marginTop : '10%',
  },
  texthead01: {
    marginLeft: '5%',
    marginHorizontal : '5%',
    color: '#000000',
    fontSize: 25,
    fontWeight : "bold",
  },
  texthead02: {
    color: '#000000',
    margin : '5%',
    fontSize: 20,
  },
  texthead03: {
    color: '#000000',
    fontSize: 20,
    marginHorizontal : '5%',
  },
  inputContainer: {
    alignSelf : 'center',
    color: '#000000',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal : 40,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin : '5%',
  },
  timerText: {
    fontSize: 15,
    color: '#000000',
  },
  button: {
    alignSelf : 'center',
    backgroundColor: '#5f9ea0',
    borderRadius: 10,
    paddingVertical : 10,
    paddingHorizontal : 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize : 15,
  },  
});

// const ConnectedOTPScreeen = connect(null, mapDispatchToProps)(OtpScreen);

export default OtpScreen;
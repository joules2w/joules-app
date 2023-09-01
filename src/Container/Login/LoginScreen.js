import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setPhoneNumber } from '../../redux/actions/authActions';
import BASE_URL from '../../constants/baseurl';

// const mapStateToProps = (state) => ({
//   phoneNumber: state.auth.phoneNumber,
// });

// const mapDispatchToProps = {
//   setPhoneNumber,
// };

const LoginScreen = ({ navigation }) => {

  const [phoneNumber, setPhoneNumber] = useState('');

  // const handlePhoneNumber = (value) => {
  //   setPhoneNumber(value);
  // };

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value); // Dispatch the action to update phoneNumber in Redux
    setPhoneNumber(value); // Local state update
  };

  const handleOTP = () => {
    sendOTP(phoneNumber);
    setPhoneNumber('');
  };

  const sendOTP = (emailOrMobile) => {
    const apiUrl = `${BASE_URL}auth/sendotp`

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
        // console.error('Error sending OTP:', error);
        Alert.alert('Error', 'Please Enter a Valid 10 digit Phone Number to send OTP');
      });
  };

  const CancelOTP = () => {
    setPhoneNumber('');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
          {/* Logo and Headings */}
          <Image style={styles.image} source={require('../../Assets/Images/logo.jpg')} />
          <Text style={styles.texthead02}>Innovative Talent Solution</Text>
          <Text style={styles.texthead05}>Creating the future</Text>
          <Text style={styles.texthead01}>Login</Text>
          <Text style={styles.texthead04}>Welcome to Joules to Watts Consultant Portal</Text>
          <Text style={styles.texthead05}>Enter Your Email ID / Mobile Number<Text style={styles.textinput01}>*</Text></Text>

          {/* Input Phone number */}
          <TextInput style={styles.textinput}
            placeholder="Enter your gmail/Mobile no."
            keyboardType="numeric"
            maxLength={10}
            placeholderTextColor="#808080"
            value={phoneNumber}
            onChangeText={handlePhoneNumber} />

            {/* Send and cancel buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={styles.button01} onPress={handleOTP}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button01} onPress={CancelOTP}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    height: 130,
    width: 130,
    marginHorizontal : '5%',
    marginTop: '5%',
  },
  texthead02: {
    marginHorizontal: '5%',
    color: '#000000',
    fontSize: 30,
  },
  texthead05: {
    color: '#000000',
    fontSize: 20,
    marginHorizontal: '5%',
    marginTop : '5%',
  },
  texthead01: {
    color: '#000000',
    fontSize: 35,
    marginHorizontal: '5%',
    fontWeight : "bold",
    marginTop : '5%',
  },
  texthead04: {
    color: '#000000',
    fontSize: 20,
    marginHorizontal: '5%',
    marginTop : '3%',
  },
  textinput01: {
    color: 'red',
  },
  textinput: {
    height: '10%',
    borderWidth: 1,
    borderColor: '#808080',
    color : '#000000',
    borderRadius: 5,
    marginHorizontal: '5%',
  },
  button01: {
    backgroundColor: '#5f9ea0',
    borderRadius: 5,
    marginTop : '5%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    alignSelf : 'center',
    padding : 10,
  },
});

// const ConnectedLoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default LoginScreen;
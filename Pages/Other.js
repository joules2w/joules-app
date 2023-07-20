import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Modal, Alert, TouchableOpacity, ScrollView } from 'react-native';

const LoginScreen = ({ navigation }) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpModalVisible, setOtpModalVisible] = useState(false);

  const handleSendOtp = () => {
    setOtpModalVisible(true);
  };

  const handleCancelOtpModal = () => {
    setOtpModalVisible(false);
    setOtp('');
  };

  const handleOtpSubmit = () => {
    // Here, you can implement the OTP validation logic.
    const constantOtp = '1234';
    if (otp === constantOtp) {
      // Do something when OTP is correct, like navigating to the next page.
      console.log('OTP is correct!');
    } else {
      // Handle incorrect OTP here.
      console.log('Incorrect OTP!');
    }
    setOtpModalVisible(false);
    setOtp('');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.image} source={require('./Images/logo.png')} />
          <Text style={styles.texthead02}>Innovative Talent Solution</Text>
          <Text style={styles.texthead05}>Creating the future</Text>
          <Text style={styles.texthead01}>Login</Text>
          <Text style={styles.texthead04}>Welcome to Joules to Watts Counsultant Portal</Text>
          <Text style={styles.texthead05}>Enter Your Email ID / Mobile Number<Text style={styles.textinput01}>*</Text></Text>
          <TextInput style={styles.textinput} placeholder='Enter your gmail/Mobile no.' keyboardType='numeric' maxLength={10} placeholderTextColor='gray'></TextInput>
          <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.button01}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button01} onPress={handleSendOtp}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          </View>
          <Modal style={styles.modal} visible={otpModalVisible} animationType="fade" transparent onRequestClose={handleCancelOtpModal}>
        <View style={styles.modalContainer}>
          <TextInput style={styles.input}
            placeholder="Enter OTP"
            placeholderTextColor={'#808080'}
            value={otp}
            onChangeText={setOtp}
          />
          <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.button01} onPress={handleCancelOtpModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button01} onPress={handleOtpSubmit}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          </View>
          {/* <Button title="Submit" onPress={handleOtpSubmit} />
          <Button title="Cancel" onPress={handleCancelOtpModal} /> */}
        </View>
      </Modal>
        </View>
      </ScrollView>
    </View>
  );
}

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
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginTop : 450,
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
    borderRadius: "10%",
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
    backgroundColor: '#449B93',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    color: 'black',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 20,
    marginRight: 30,
    borderRadius: "10%",
  },
  modal : {
    marginTop : 360,
  }
})

export default LoginScreen;
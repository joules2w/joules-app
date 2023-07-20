import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const API_BASE_URL = 'http://www.consultant.joulestowatts-uat.com/auth/sendotp'; // Replace with your API base URL

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendOtpToMobile = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/send-otp`, { phoneNumber });
      // Handle the response from the API, if needed.
      // For example, you can show a success message to the user.
      Alert.alert('OTP Sent', 'OTP has been sent to your mobile number.');
      // Navigate to the OTP verification screen
      navigation.navigate('Home', { phoneNumber });
    } catch (error) {
      // Handle errors, such as displaying an error message to the user.
      console.error('Error sending OTP:', error);
      Alert.alert('Error', 'Failed to send OTP. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send OTP" onPress={sendOtpToMobile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    color : '#000000'
  },
});

export default LoginScreen;

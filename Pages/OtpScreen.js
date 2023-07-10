import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

const Otp = ({ navigation }) => {
  const [otp, setOTP] = useState('');
  const [timer, setTimer] = useState(30);

  const handleOTPChange = (value) => {
    setOTP(value);
  };

  const handleSubmit = () => {
    if (otp === '123') {
      Alert.alert('Success', 'OTP verification successful!');
      navigation.navigate('Job_Portal');
      // navigation.navigate('Sparsh');
    } else {
      Alert.alert('Error', 'Invalid OTP!');
    }
  };

  const handleResend = () => {
    setOTP('');
    setTimer(30);
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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleOTPChange}
          value={otp}
          keyboardType="numeric"
          maxLength={4}
          placeholder="Enter OTP" placeholderTextColor={'black'}
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
        <TouchableOpacity style={styles.button} onPress={handleSubmit} >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 45,
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
    color:'black'
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 200,
    textAlign: 'center',
    color:'black'
  },
  timerText: {
    marginBottom: 10,
    fontSize: 16,
    color:'black',
  },
  resendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 40,
    backgroundColor: '#87CEEB',
    borderRadius: 10,
  },
  resendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 40,
    backgroundColor: '#87CEEB',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Otp;





// import React from 'react';
// import { useState } from 'react';
// import { StyleSheet, TextInput, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';


// const OtpScreen = ({ navigation }) => {

//     const [otp, setOTP] = useState('');

//     const handleOTPChange = (value) => {
//       setOTP(value);
//     };
  
//     const handleSubmit = () => {
//       // Verify the OTP here
//       if (otp === '1234') {
//         Alert.alert('Success', 'OTP verification successful!');
//         navigation.navigate('Job_Portal');
//       } else {
//         Alert.alert('Error', 'Invalid OTP!');
//       }
//     };


//     const [isModalVisible, setModalVisible] = useState(false);

//   const handleOpenModal = () => {
//     setModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };



//     return (
//         <View style={styles.container}>
//           <ScrollView>
//                 <TextInput style={styles.input} onChangeText={handleOTPChange} value={otp} keyboardType="numeric" 
//                     maxLength={4} placeholder="Enter your OTP" placeholderTextColor={'gray'} />
//                 <View style={{ flexDirection : 'row', justifyContent : 'center', width : '80%'}} >

//                 <TouchableOpacity style={styles.button01} onPress={handleSubmit} >
//                     <Text style={styles.buttonText}>Submit</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('login')}>
//                     <Text style={styles.buttonText}>Cancel</Text>
//                 </TouchableOpacity>
                
//                 </View>

//                 <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('InterviewPanel')}>
//                   <Text style={styles.buttonText}>InterView Panel</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('AssignPanelMember')}>
//                   <Text style={styles.buttonText}>AssignPanelMember</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('DateTime')}>
//                   <Text style={styles.buttonText}>DateTime</Text>
//                 </TouchableOpacity>
    
//                 </ScrollView>
//         </View> 
//     );
// }

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
//         alignItems : 'center',
//         backgroundColor : 'white',
//     },
//     text : {
//       color : 'black',
//     },
//     input: {
//         width: 300,
//         height: 40,
//         borderWidth: 1,
//         borderColor: 'black',
//         marginBottom: 10,
//         color : 'black',
//         marginTop : 200,
//         marginLeft : 30,
//         marginRight : 30,
//         borderRadius : 5,
//         marginBottom : 30,
//       },
//       submitbutton : {
//         alignItems : 'center',
//         justifyContent : 'center',
//         marginLeft : 30,
//         width : 100,
//         height : 30,
//         backgroundColor : '#75C597',
//       },
//       button01: {
//         marginLeft: 40,
//         padding: 10,
//         width : 120,
//         backgroundColor: '#75C597',
//         borderRadius: 5,
//         marginBottom : 20,
//       },
//       menuContainer: {
//         flex: 1,
//         paddingTop: 20,
//         paddingHorizontal: 10,
//         backgroundColor: 'white',
//       }
// })

// export default OtpScreen;
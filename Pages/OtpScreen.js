// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';

// const Otp = ({ navigation }) => {
//   const [otp, setOTP] = useState('');
//   const [timer, setTimer] = useState(30);

//   const handleOTPChange = (value) => {
//     setOTP(value);
//   };

//   const handleSubmit = () => {
//     if (otp === '123') {
//       Alert.alert('Success', 'OTP verification successful!');
//       navigation.navigate('Home');
//       // navigation.navigate('TimeandDate')
//       // navigation.navigate('Sparsh');
//     } else {
//       Alert.alert('Error', 'Invalid OTP!');
//     }
//   };

//   const handleResend = () => {
//     setOTP('');
//     setTimer(30);
//   };

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     if (timer === 0) {
//       clearInterval(countdown);
//     }

//     return () => {
//       clearInterval(countdown);
//     };
//   }, [timer]);

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Image style={styles.image} source={require('./Images/logo.jpg')} />
//         <Text style={styles.texthead02}>Innovative Talent Solution</Text>
//         <Text style={styles.texthead05}>Creating the future</Text>

//         {/* <Text style={styles.texthead01}>Login</Text> */}
//         <Text style={styles.texthead04}>Welcome to Joules to Watts Counsultant Portal</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             onChangeText={handleOTPChange}
//             value={otp}
//             keyboardType="numeric"
//             maxLength={4}
//             placeholder="Enter OTP" placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           {timer > 0 ? (
//             <Text style={styles.timerText}>Timer: {timer}</Text>
//           ) : (
//             <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
//               <Text style={styles.resendButtonText}>Resend</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={styles.button} onPress={handleSubmit} >
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>

//       </ScrollView>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Others')}>
//         <Text style={styles.buttonText}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeandDate')}>
//         <Text style={styles.buttonText}> TimeandDate</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // marginVertical: 45,
//     backgroundColor: "#fff"
//   },
//   inputContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     color: 'black'
//   },
//   input: {
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     height: 50,
//     width: 200,
//     textAlign: 'center',
//     color: 'black'
//   },
//   timerText: {
//     marginBottom: 10,
//     fontSize: 16,
//     color: 'black',
//   },
//   resendButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '48%',
//     height: 40,
//     backgroundColor: '#5f9ea0',
//     borderRadius: 10,
//   },
//   resendButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '48%',
//     height: 40,
//     backgroundColor: '#5f9ea0',
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },

//   texthead02: {
//     marginLeft: '10%',
//     marginBottom: 10,
//     marginRight: '10%',
//     color: 'black',
//     fontSize: 32,
//   },
//   texthead04: {
//     color: 'black',
//     fontSize: 20,
//     marginLeft: '10%',
//     marginBottom: 20,
//     marginRight: '10%',
//   },
//   texthead05: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '100',
//     marginLeft: 30,
//     marginRight: 30,
//   },
//   textinput01: {
//     height: 40,
//     width: 300,
//     color: 'red',
//   },
// });

// export default Otp;

// -----------------------------------------------------------above code without api---------------------------------------------------------



// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';

// const Otp = ({ navigation }) => {
//   const [otp, setOTP] = useState('');
//   const [timer, setTimer] = useState(30);

//   const handleOTPChange = (value) => {
//     setOTP(value);
//   };

//   const handleSubmit = () => {
//     verifyOTP();
//   };

//   const handleResend = () => {
//     sendOTP();
//   };

//   const sendOTP = () => {
//     const apiUrl = 'http://localhost:3000/auth/sendotp'; // Replace with your actual API URL

//     fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         phone: '6364124241', // Replace with the user's phone number to receive OTP
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response data here
//         console.log('OTP sent successfully!', data);
//         setTimer(30); // Reset the timer
//       })
//       .catch((error) => {
//         // Handle any error that occurred during the API call
//         console.error('Error sending OTP:', error);
//         Alert.alert('Error', 'Failed to send OTP. Please try again later.');
//       });
//   };

//   const verifyOTP = () => {
//     const apiUrl = 'http://localhost:3000/auth/verifyotp'; // Replace with your actual API URL

//     fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         phone: '6364124241', // Replace with the user's phone number
//         otpEnteredByUser: otp,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response data here
//         console.log('OTP verification response:', data);
//         if (data.success) {
//           Alert.alert('Success', 'OTP verification successful!');
//           navigation.navigate('Home'); // Navigate to the home screen on successful OTP verification
//         } else {
//           Alert.alert('Error', 'Invalid OTP. Please try again.');
//         }
//       })
//       .catch((error) => {
//         // Handle any error that occurred during the API call
//         console.error('Error verifying OTP:', error);
//         Alert.alert('Error', 'Failed to verify OTP. Please try again later.');
//       });
//   };

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, []);

//   useEffect(() => {
//     // Resend OTP when the timer reaches 0
//     if (timer === 0) {
//       setTimer(30); // Reset the timer
//       sendOTP();
//     }
//   }, [timer]);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image source={require('./path-to-your-image')} style={styles.logo} />
//       <Text style={styles.otpText}>Enter OTP</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="OTP"
//         keyboardType="numeric"
//         value={otp}
//         onChangeText={handleOTPChange}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Verify OTP</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.resendButton} onPress={handleResend} disabled={timer !== 0}>
//         <Text style={styles.resendButtonText}>
//           Resend OTP ({timer !== 0 ? `${timer}s` : 'Resend'})
//         </Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 30,
//   },
//   otpText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#449B93',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   resendButton: {
//     marginTop: 10,
//   },
//   resendButtonText: {
//     color: '#449B93',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Otp;
//  -----------------------------------------above code is hardcode-------------------------------------------------------------------------------------








// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';

// const Otp = ({ navigation, route }) => {
//   const [otp, setOTP] = useState('');
//   const [timer, setTimer] = useState(30);
//   const { phone } = route.params; // Get the phone number passed from LoginScreen

//   const handleOTPChange = (value) => {
//     setOTP(value);
//   };

//   const handleSubmit = () => {
//     if (otp === '123') {
//       Alert.alert('Success', 'OTP verification successful!');
//       navigation.navigate('Home');
//     } else {
//       Alert.alert('Error', 'Invalid OTP!');
//     }
//   };

//   const handleResend = () => {
//     setOTP('');
//     setTimer(30);
//     sendOTP();
//   };

//   const sendOTP = () => {
//     const apiUrl = '{{http://localhost:3000/auth/sendotp}}auth/verifyotp'; // Replace with your actual API URL

//     fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         phone: phone, 
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
        
//         console.log('OTP sent successfully!', data);
//       })
//       .catch((error) => {
       
//         console.error('Error sending OTP:', error);
//         Alert.alert('Error', 'Failed to send OTP. Please try again later.');
//       });
//   };

//   useEffect(() => {
//     sendOTP(); 
//   }, []);

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Image style={styles.image} source={require('./Images/logo.jpg')} />
//         <Text style={styles.texthead02}>Innovative Talent Solution</Text>
//         <Text style={styles.texthead05}>Creating the future</Text>
//         <Text style={styles.texthead04}>Welcome to Joules to Watts Consultant Portal</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             onChangeText={handleOTPChange}
//             value={otp}
//             keyboardType="numeric"
//             maxLength={4}
//             placeholder="Enter OTP"
//             placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           {timer > 0 ? (
//             <Text style={styles.timerText}>Timer: {timer}</Text>
//           ) : (
//             <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
//               <Text style={styles.resendButtonText}>Resend</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Others')}>
//         <Text style={styles.buttonText}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeandDate')}>
//         <Text style={styles.buttonText}>TimeandDate</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "#fff"
//   },
//   inputContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     color: 'black'
//   },
//   input: {
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     height: 50,
//     width: 200,
//     textAlign: 'center',
//     color: 'black'
//   },
//   timerText: {
//     marginBottom: 10,
//     fontSize: 16,
//     color: 'black',
//   },
//   resendButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '48%',
//     height: 40,
//     backgroundColor: '#5f9ea0',
//     borderRadius: 10,
//   },
//   resendButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '48%',
//     height: 40,
//     backgroundColor: '#5f9ea0',
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   texthead02: {
//     marginLeft: '10%',
//     marginBottom: 10,
//     marginRight: '10%',
//     color: 'black',
//     fontSize: 32,
//   },
//   texthead04: {
//     color: 'black',
//     fontSize: 20,
//     marginLeft: '10%',
//     marginBottom: 20,
//     marginRight: '10%',
//   },
//   texthead05: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '100',
//     marginLeft: 30,
//     marginRight: 30,
//   },
//   textinput01: {
//     height: 40,
//     width: 300,
//     color: 'red',
//   },
// });

// export default Otp;



// ----------------------------------------------------------------------------------dynamic version top--------------------------------------------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';

// const Otp = ({ navigation, route }) => {
//   const [otp, setOTP] = useState('');
//   const [timer, setTimer] = useState(30);
//   const { phone } = route.params; // Get the phone number passed from LoginScreen

//   const handleOTPChange = (value) => {
//     setOTP(value);
//   };

//   const handleSubmit = () => {
//     if (otp === '123') {
//       Alert.alert('Success', 'OTP verification successful!');
//       navigation.navigate('Home');
//     } else {
//       Alert.alert('Error', 'Invalid OTP!');
//     }
//   };

//   const handleResend = () => {
//     setOTP('');
//     setTimer(30);
//     sendOTP();
//   };

//   const sendOTP = () => {
//     const apiUrl = '{{http://www.consultant.joulestowatts-uat.com/}}auth/verifyotp'; // Replace with your actual API URL

//     fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         phone: phone, //  dynamic phone number 
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('OTP sent successfully!', data);
//       })
//       .catch((error) => {
//         console.error('Error sending OTP:', error);
//         Alert.alert('Error', 'Failed to send OTP. Please try again later.');
//       });
//   };

//   useEffect(() => {
//     sendOTP(); 
//   }, []);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     if (timer === 0) {
//       clearInterval(countdown);
//     }

//     return () => {
//       clearInterval(countdown);
//     };
//   }, [timer]);

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Image style={styles.image} source={require('./Images/logo.jpg')} />
//         <Text style={styles.texthead02}>Innovative Talent Solution</Text>
//         <Text style={styles.texthead05}>Creating the future</Text>

//         <Text style={styles.texthead04}>Welcome to Joules to Watts Consultant Portal</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             onChangeText={handleOTPChange}
//             value={otp}
//             keyboardType="numeric"
//             maxLength={4}
//             placeholder="Enter OTP"
//             placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           {timer > 0 ? (
//             <Text style={styles.timerText}>Timer: {timer}</Text>
//           ) : (
//             <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
//               <Text style={styles.resendButtonText}>Resend</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Others')}>
//         <Text style={styles.buttonText}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeandDate')}>
//         <Text style={styles.buttonText}>TimeandDate</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "#fff"
//   },
//   inputContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     color: 'black'
//   },
//   input: {
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     height: 50,
//     width: 200,
//     textAlign: 'center',
//     color: 'black'
//   },
//   timerText: {
//     marginBottom: 10,
//     fontSize: 16,
//     color: 'black',
//   },
//   resendButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '48%',
//     height: 40,
//     backgroundColor: '#5f9ea0',
//     borderRadius: 10,
//   },
//   resendButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '48%',
//     height: 40,
//     backgroundColor: '#5f9ea0',
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   texthead02: {
//     marginLeft: '10%',
//     marginBottom: 10,
//     marginRight: '10%',
//     color: 'black',
//     fontSize: 32,
//   },
//   texthead04: {
//     color: 'black',
//     fontSize: 20,
//     marginLeft: '10%',
//     marginBottom: 20,
//     marginRight: '10%',
//   },
//   texthead05: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '100',
//     marginLeft: 30,
//     marginRight: 30,
//   },
//   textinput01: {
//     height: 40,
//     width: 300,
//     color: 'red',
//   },
// });

// export default Otp;










// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';

// const Otp = ({ navigation, route }) => {
//   const { phone } = route.params;
//   const [otp, setOTP] = useState('');
//   const [timer, setTimer] = useState(30);

//   const handleOTPChange = (value) => {
//     setOTP(value);
//   };

//   const handleSubmit = () => {
//     verifyOTP(phone, otp);
//   };

//   const verifyOTP = (phoneNumber, enteredOTP) => {
//     const apiUrl = 'http://www.consultant.joulestowatts-uat.com/auth/verifyotp'; // Replace with your actual API URL

//     fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         phone: phoneNumber,
//         otpEnteredByUser: enteredOTP,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response data here
//         console.log('OTP verification response:', data);

//         if (data.success) {
//           Alert.alert('Success', 'OTP verification successful!');
//           navigation.navigate('Home');
//           // navigation.navigate('TimeandDate')
//           // navigation.navigate('Sparsh');
//         } else {
//           Alert.alert('Error', 'Invalid OTP!');
//         }
//       })
//       .catch((error) => {
//         // Handle any error that occurred during the API call
//         console.error('Error verifying OTP:', error);
//         Alert.alert('Error', 'Failed to verify OTP. Please try again later.');
//       });
//   };

//   const handleResend = () => {
//     sendOTP(phone);
//     setOTP('');
//     setTimer(30);
//   };

//   // const sendOTP = (phoneNumber) => {
//   //   const apiUrl = 'http://localhost:3000/auth/sendotp'; // Replace with your actual API URL

//   //   fetch(apiUrl, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //     body: JSON.stringify({
//   //       phone: phoneNumber,
//   //     }),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       // Handle the response data here
//   //       console.log('OTP sent successfully!', data);
//   //     })
//   //     .catch((error) => {
//   //       // Handle any error that occurred during the API call
//   //       console.error('Error sending OTP:', error);
//   //       Alert.alert('Error', 'Failed to send OTP. Please try again later.');
//   //     });
//   // };

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     if (timer === 0) {
//       clearInterval(countdown);
//     }

//     return () => {
//       clearInterval(countdown);
//     };
//   }, [timer]);

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Image style={styles.image} source={require('./Images/logo.jpg')} />
//         <Text style={styles.texthead02}>Innovative Talent Solution</Text>
//         <Text style={styles.texthead05}>Creating the future</Text>

//         <Text style={styles.texthead04}>Welcome to Joules to Watts Consultant Portal</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             onChangeText={handleOTPChange}
//             value={otp}
//             keyboardType="numeric"
//             maxLength={4}
//             placeholder="Enter OTP"
//             placeholderTextColor={'black'}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           {timer > 0 ? (
//             <Text style={styles.timerText}>Timer: {timer}</Text>
//           ) : (
//             <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
//               <Text style={styles.resendButtonText}>Resend</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//             <Text style={styles.buttonText}>Submit</Text>
//           </TouchableOpacity>
//         </View>

//       </ScrollView>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Others')}>
//         <Text style={styles.buttonText}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeandDate')}>
//         <Text style={styles.buttonText}>TimeandDate</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: "#fff"
//   },
//   inputContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     color: 'black'
//   },
//   input: {
//     padding: 10,
//     borderWidth: 1,
//     borderRadius: 10,
//     height: 50,
//     width: 200,
//     textAlign: 'center',
//     color: 'black'
//   },
//   timerText: {
//     marginBottom: 10,
//     fontSize: 16,
//     color: 'black',
//   },
//   resendButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '48%',
//     height: 40,
//     backgroundColor: '#5f9ea0',
//     borderRadius: 10,
//   },
//   resendButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '48%',
//     height: 40,
//     backgroundColor: '#5f9ea0',
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },

//   texthead02: {
//     marginLeft: '10%',
//     marginBottom: 10,
//     marginRight: '10%',
//     color: 'black',
//     fontSize: 32,
//   },
//   texthead04: {
//     color: 'black',
//     fontSize: 20,
//     marginLeft: '10%',
//     marginBottom: 20,
//     marginRight: '10%',
//   },
//   texthead05: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: '100',
//     marginLeft: 30,
//     marginRight: 30,
//   },
//   textinput01: {
//     height: 40,
//     width: 300,
//     color: 'red',
//   },
// });

// export default Otp;



import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert, StyleSheet, ScrollView } from 'react-native';

const Otp = ({ navigation, route }) => {
  const [otp, setOTP] = useState('');
  const [timer, setTimer] = useState(30);
  const { phone } = route.params; 

  const handleOTPChange = (value) => {
    setOTP(value);
  };

  const handleSubmit = () => {
    verifyOTP(phone, otp);
  };

  const verifyOTP = (phoneNumber, enteredOTP) => {
    const apiUrl = 'http://www.consultant.joulestowatts-uat.com/auth/verifyotp'; 

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phoneNumber,
        otpEnteredByUser: enteredOTP,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('OTP verification response:', data);
        if (data) {
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

  const handleResend = () => {
    setOTP('');
    setTimer(30);
    sendOTP(phone);
  };

  const sendOTP = (phoneNumber) => {
    const apiUrl = 'http://www.consultant.joulestowatts-uat.com/auth/sendotp'; // Replace with your actual API URL

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phoneNumber,
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
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        Alert.alert('Error', 'Failed to send OTP. Please try again later.');
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={require('./Images/logo.jpg')} />
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Others')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeandDate')}>
        <Text style={styles.buttonText}>TimeandDate</Text>
      </TouchableOpacity>
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

export default Otp;


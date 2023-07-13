
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Ticket = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedItem, setSelectedItem] = useState('High');
  const [open, setOpen] = useState(false);
  const [flashVisible, setFlashVisible] = useState(false);

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text) => {
    if (text.length <= 500) {
      setDescription(text);
    }
  };

  const handlePriorityChange = (item) => {
    setSelectedItem(item);
  };

  const items = [
    { label: 'High', value: 'High' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Low', value: 'Low' }
  ];

  const handleButton1Press = () => {
    setFlashVisible(true);
  };

  const handleButton2Press = () => {
    
  };

  const handleCancelButtonPress = () => {
    navigation.navigate('Sparsh');
  };

  const [attachedFile, setAttachedFile] = useState(null);

    const handleFileAttachment = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          maxFilesize: 10 * 1024 * 1024, // 10 MB (in bytes)
        });
  
        setAttachedFile(res);
        console.log('Attached file:', res.uri);
      } catch (error) {
        if (DocumentPicker.isCancel(error)) {
          console.log('File attachment cancelled');
        } else {
          console.log('Error attaching file:', error);
        }
      }
    };

  // useEffect(() => {
  //   if (flashVisible) {
  //     const timer = setTimeout(() => {
  //       setFlashVisible(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [flashVisible]);

  const logout = () =>{
        navigation.navigate('Login')
        }
    
        const interviewpanel = () =>{
            navigation.navigate('InterviewPanel')
        }
    
        const jobportal = () => {
            navigation.navigate('Job_Portal')
        }
    
        const sparsh = () => {
            navigation.navigate('Sparsh')
        }

        const home = () => {
            navigation.navigate('Home')
        }

  return (
    
      <View style={styles.container}>
        <ScrollView>
        <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
        <ImageBackground
          source={require('./Images/background.jpg')}
          style={styles.backgroundImage}
        >
          <Text style={styles.texthead05}>
            Please send us your questions, we will get back to you.
          </Text>
        </ImageBackground>

        <Text style={styles.title}>
          Title <Text style={styles.textInputRequired}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTitleChange}
          value={title}
          placeholder="Enter title"
          placeholderTextColor={'black'}
        />

        <Text style={styles.descriptionHeading}>
          Description<Text style={styles.textInputRequired}>*</Text>
        </Text>
        <View>
        <TextInput
          style={styles.descriptionInput}
          multiline
          onChangeText={handleDescriptionChange}
          value={description}
          placeholder="Enter description (max 500 characters)"
          placeholderTextColor={'black'}
          maxLength={500}
        />
          <View style={[styles.card, styles.elevation]}>
          {/* <TouchableOpacity style={styles.attachButton} onPress={handleFileAttachment}>
          <Icon name="paperclip-vertical" solid size={20} color="black" />
          <Text style={styles.attachText}>Attach File</Text>
        </TouchableOpacity> */}
            <TouchableOpacity style={styles.attachbutton} onPress={handleFileAttachment}>
                <Text style={styles.attachtext}>File supported (.pdf), file size should not exceed more than 10 MB</Text>
                <View style={{flexDirection:'row' , alignContent:'center', }}>
                <Icon name="paperclip-vertical" solid size={20} color="black" />
                <Text style={styles.uploadtext}>Attact File</Text>
                </View>
                </TouchableOpacity>
                </View>
        
        </View>
        


        <Text style={styles.descriptionHeading}>
          Priority <Text style={styles.textInputRequired}>*</Text>
        </Text>
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            open={open}
            value={selectedItem}
            items={items}
            setOpen={setOpen}
            setValue={handlePriorityChange}
            setItems={handlePriorityChange}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
            <Text style={styles.buttonText}>Create Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCancelButtonPress}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Footer/>

      {flashVisible && (
        <View style={styles.flashMessage}>
          <Text style={styles.flashText}>Ticket created successfully</Text>
        </View>
      )}
      </ScrollView>
      </View>

      
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  descriptionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  descriptionInput: {
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    color: 'black',
  },
  textInputRequired: {
    color: 'red',
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    height: 40,
    backgroundColor: '#449B93',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: '10%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage : {
    opacity: 0.5,
    marginBottom: 15,
  },
  texthead05 : {
    marginLeft : 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20, 
    lineHeight: 30,
    textAlign: 'center',
  },
  flashMessage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#87CEEB',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    elevation: 4,
    marginHorizontal: 10,
    marginVertical: 68,
  },
  flashText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },

//   attachbutton : {
//     alignSelf : 'center',
//     borderRadius : 5
// },
// attachtext : {
//     color : 'black',
//     alignSelf : 'center'
// },
uploadtext : {
    color : 'black',
    alignSelf : 'center',
    textDecorationLine : 'underline',
    color : '#5F9EA0',
},
attachbutton: {
  // flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
  borderRadius:5,
},
attachtext: {
  marginLeft: 5,
  color: 'black',
  // fontSize: 12,
  // fontWeight: 'bold',
},
uploadtext : {
  color : 'black',
  alignSelf : 'center',
  textDecorationLine : 'underline',
  color : '#5F9EA0',
},
card: {  
  backgroundColor: 'white',  
  borderRadius: 10,
  borderColor : 'black', 
  paddingVertical: 10,  
  paddingHorizontal: 10,  
  marginLeft : '5%',
  marginRight : '5%',
},
elevation: {  
  shadowColor: 'black',  
  elevation: 2,  
},
});

export default Ticket;

























// import React, { useState, useEffect } from 'react';
// import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
// import Header from './Header';
// import Footer from './Footer';
// import DropDownPicker from 'react-native-dropdown-picker';

// const Ticket = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedItem, setSelectedItem] = useState('High');
//   const [open, setOpen] = useState(false);
//   const [flashVisible, setFlashVisible] = useState(false);

//   const handleTitleChange = (text) => {
//     setTitle(text);
//   };

//   const handleDescriptionChange = (text) => {
//     if (text.length <= 500) {
//       setDescription(text);
//     }
//   };

//   const handlePriorityChange = (item) => {
//     setSelectedItem(item);
//   };

//   const items = [
//     { label: 'High', value: 'High' },
//     { label: 'Medium', value: 'Medium' },
//     { label: 'Low', value: 'Low' }
//   ];

//   const handleButton1Press = () => {
//     setFlashVisible(true);
//   };

//   const handleButton2Press = () => {
    
//   };

//   const handleCancelButtonPress = () => {
//     navigation.navigate('Sparsh');
//   };

//   // useEffect(() => {
//   //   if (flashVisible) {
//   //     const timer = setTimeout(() => {
//   //       setFlashVisible(false);
//   //     }, 3000);

//   //     return () => clearTimeout(timer);
//   //   }
//   // }, [flashVisible]);

//   const logout = () =>{
//         navigation.navigate('Login')
//         }
    
//         const interviewpanel = () =>{
//             navigation.navigate('InterviewPanel')
//         }
    
//         const jobportal = () => {
//             navigation.navigate('Job_Portal')
//         }
    
//         const sparsh = () => {
//             navigation.navigate('Sparsh')
//         }

//         const home = () => {
//             navigation.navigate('Home')
//         }

//   return (
    
//       <View style={styles.container}>
//         <ScrollView>
//         <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
//         <ImageBackground
//           source={require('./Images/background.png')}
//           style={styles.backgroundImage}
//         >
//           <Text style={styles.texthead05}>
//             Please send us your questions, we will get back to you.
//           </Text>
//         </ImageBackground>

//         <Text style={styles.title}>
//           Title <Text style={styles.textInputRequired}>*</Text>
//         </Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={handleTitleChange}
//           value={title}
//           placeholder="Enter title"
//           placeholderTextColor={'black'}
//         />

//         <Text style={styles.descriptionHeading}>
//           Description<Text style={styles.textInputRequired}>*</Text>
//         </Text>
//         <TextInput
//           style={styles.descriptionInput}
//           multiline
//           onChangeText={handleDescriptionChange}
//           value={description}
//           placeholder="Enter description (max 500 characters)"
//           placeholderTextColor={'black'}
//           maxLength={500}
//         />

//         <Text style={styles.descriptionHeading}>
//           Priority <Text style={styles.textInputRequired}>*</Text>
//         </Text>
//         <View style={styles.dropdownContainer}>
//           <DropDownPicker
//             open={open}
//             value={selectedItem}
//             items={items}
//             setOpen={setOpen}
//             setValue={handlePriorityChange}
//             setItems={handlePriorityChange}
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
//             <Text style={styles.buttonText}>Create Ticket</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={handleCancelButtonPress}>
//             <Text style={styles.buttonText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//         <Footer/>

//       {flashVisible && (
//         <View style={styles.flashMessage}>
//           <Text style={styles.flashText}>Ticket created successfully</Text>
//         </View>
//       )}
//       </ScrollView>
//       </View>

      
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   descriptionHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//   },
//   descriptionInput: {
//     height: 100,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     textAlignVertical: 'top',
//     color: 'black',
//   },
//   textInputRequired: {
//     color: 'red',
//   },
//   dropdownContainer: {
//     height: 40,
//     marginBottom: 50,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     width: '48%',
//     height: 40,
//     backgroundColor: '#87CEEB',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginBottom: '10%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   backgroundImage : {
//     opacity: 0.5,
//     marginBottom: 15,
//   },
//   texthead05 : {
//     marginLeft : 10,
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 20, 
//     lineHeight: 30,
//     textAlign: 'center',
//   },
//   flashMessage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#87CEEB',
//     paddingVertical: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderRadius: 20,
//     elevation: 4,
//     marginHorizontal: 10,
//     marginVertical: 68,
//   },
//   flashText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center', 
//   },
// });

// export default Ticket;
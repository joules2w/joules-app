
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Footer from './Footer';
import DropDownPicker from 'react-native-dropdown-picker';

const MyPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedItem, setSelectedItem] = useState('High');
  const [open, setOpen] = useState(false);
  const [flashVisible, setFlashVisible] = useState(false);

  const navigation = useNavigation();

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

  // useEffect(() => {
  //   if (flashVisible) {
  //     const timer = setTimeout(() => {
  //       setFlashVisible(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [flashVisible]);

  return (
    
      <View style={styles.container}>
        <ScrollView>
        <Header/>
        <ImageBackground
          source={require('./Images/background.png')}
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
        <TextInput
          style={styles.descriptionInput}
          multiline
          onChangeText={handleDescriptionChange}
          value={description}
          placeholder="Enter description (max 500 characters)"
          placeholderTextColor={'black'}
          maxLength={500}
        />

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
    backgroundColor: '#87CEEB',
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
});

export default MyPage;




// import React, { useState, useEffect } from 'react';
// import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Header from './Header';
// import Footer from './Footer';
// import DropDownPicker from 'react-native-dropdown-picker';

// const MyPage = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedItem, setSelectedItem] = useState('High');
//   const [open, setOpen] = useState(false);
//   const [flashVisible, setFlashVisible] = useState(false);

//   const navigation = useNavigation();

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

//   useEffect(() => {
//     if (flashVisible) {
//       const timer = setTimeout(() => {
//         setFlashVisible(false);
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [flashVisible]);

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Header/>
//         <ImageBackground
//           source={require('./Images/banner.jpeg')}
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
//       </View>

//       <Footer/>

//       {flashVisible && (
//         <View style={styles.flashMessage}>
//           <Text style={styles.flashText}>Ticket created successfully</Text>
//         </View>
//       )}
//     </ScrollView>
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
//     textAlign: 'center',
//   },
//   flashText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginLeft: 10,
//   },
// });

// export default MyPage;

// import React, { useState } from 'react';
// import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
// import Header from './Header';
// import Footer from './Footer';
// import DropDownPicker from 'react-native-dropdown-picker';
// // import cancle from './cancle';

// const MyPage = () => {
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
//     // Handle button 1 press
//     setFlashVisible(true);
//   };

//   const handleButton2Press = () => {
//     // Handle button 2 press
//   };
//   const handleCancelButtonPress = () => {
//     navigation.navigate('Sparsh');
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Header />
//         <ImageBackground
//           source={require('./Images/banner.jpeg')}
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
//           <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
//             <Text style={styles.buttonText}>Cancel</Text>
//           </TouchableOpacity>
//           {/* <cancle/> */}
//         </View>
//       </View>

//       <Footer/>

//       {flashVisible && (
//         <View style={styles.flashMessage}>
//           <Text style={styles.flashText}>Ticket created successfully</Text>
//           <TouchableOpacity onPress={() => setFlashVisible(false)}>
//             <Text style={styles.flashDismiss}>Dismiss</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </ScrollView>
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
//     borderRadius:20,
//     elevation:4,
//     marginHorizontal:10,
//     marginVertical:68,
    
//   },
//   flashText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   flashDismiss: {
//     color: '#fff',
//     fontSize: 16,
//     marginRight: 10,
//   },
// });

// export default MyPage;



// import React, { useState } from 'react';
// import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
// import Header from './Header';
// import Footer from './Footer';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { showMessage, hideMessage } from 'react-native-flash-message';

// const MyPage = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedItem, setSelectedItem] = useState('High');
//   const [open, setOpen] = useState(false);

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
//     // Handle button 1 press
//     showMessage({
//       message: 'Success',
//       description: 'Ticket created successfully',
//       type: 'success',
//       duration: 2000,
//       autoHide: true,
//     });
//   };

//   const handleButton2Press = () => {
//     // Handle button 2 press
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
        
//         <Header />
//         <ImageBackground
//           source={require('./Images/banner.jpeg')}
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
//           <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
//             <Text style={styles.buttonText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
        
//       </View>
//       <Footer/>
//     </ScrollView>
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
// });

// export default MyPage;






















// import React, { useState } from 'react';
// import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity } from 'react-native';
// import Header from './Header';
// import Footer from './Footer';
// import DropDownPicker from 'react-native-dropdown-picker';

// const MyPage = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedItem, setSelectedItem] = useState('High');
//   const [open, setOpen] = useState(false);

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
//     // Handle button 1 press
//   };

//   const handleButton2Press = () => {
//     // Handle button 2 press
//   };

//   return (
//     // <ScrollView>
//     <View style={styles.container}>
      
//         <Header />
//         <Text style={styles.title}>
//           Title <Text style={styles.textInputRequired}>*</Text>
//         </Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={handleTitleChange}
//           value={title}
//           placeholder="Enter title"
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
//             // theme="DARK"
//             multiple={false}
//             // mode="BADGE"
//             badgeDotColors={[
//               '#e76f51',
//               '#00b4d8',
//               '#e9c46a',
//               '#e76f51',
//               '#8ac926',
//               '#00b4d8',
//               '#e9c46a',
//             ]}
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
//             <Text style={styles.buttonText}>Create Ticket</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
//             <Text style={styles.buttonText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
        

//         <Footer/>
      
//     </View>
//     // </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
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
//   },
//   descriptionInput: {
//     height: 100,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     textAlignVertical: 'top',
//   },
//   textInputRequired: {
//     color: 'red',
//   },
//   dropdownContainer: {
//     height: 40,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 40,
//   },
//   button: {
//     width: '48%',
//     height: 40,
//     backgroundColor :'#87CEEB',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default MyPage;



























// import React, { useState } from 'react';
// import { StyleSheet, TextInput, Text, View, ScrollView } from 'react-native';
// import Header from './Header';
// import Footer from './Footer';
// import DropDownPicker from 'react-native-dropdown-picker';

// const MyPage = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedItem, setSelectedItem] = useState('High');
//   const [open, setOpen] = useState(false);

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

//   return (
//     <View style={styles.container}>
//       {/* <ScrollView> */}
//         <Header />
//         <Text style={styles.title}>
//           Title <Text style={styles.textInputRequired}>*</Text>
//         </Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={handleTitleChange}
//           value={title}
//           placeholder="Enter title"
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
//             // theme="DARK"
//             multiple={false}
//             // mode="BADGE"
//             badgeDotColors={[
//               '#e76f51',
//               '#00b4d8',
//               '#e9c46a',
//               '#e76f51',
//               '#8ac926',
//               '#00b4d8',
//               '#e9c46a',
//             ]}
//           />
//         </View>

//         {/* <Footer /> */}
//       {/* </ScrollView> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
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
//   },
//   descriptionInput: {
//     height: 100,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     textAlignVertical: 'top',
//   },
//   textInputRequired: {
//     color: 'red',
//   },
//   dropdownContainer: {
//     height: 40,
//     marginBottom: 20,
//   },
// });

// export default MyPage;


































// import React, { useState } from 'react';
// import { StyleSheet, TextInput, Text, View, ScrollView } from 'react-native';
// import Header from './Header';
// import Footer from './Footer';
// import DropDownPicker from 'react-native-dropdown-picker';

// const MyPage = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedItems, setSelectedItems] = useState(['High', 'Medium', 'Low']);
//   const [open, setOpen] = useState(false);

//   const handleTitleChange = (text) => {
//     setTitle(text);
//   };

//   const handleDescriptionChange = (text) => {
//     if (text.length <= 500) {
//       setDescription(text);
//     }
//   };

//   const handlePriorityChange = (items) => {
//     setSelectedItems(items);
//   };

//   const items = [
//     { label: 'High', value: 'High' },
//     { label: 'Medium', value: 'Medium' },
//     { label: 'Low', value: 'Low' }
//   ];

//   return (
//     <View style={styles.container}>
//       {/* <ScrollView> */}
//         <Header />
//         <Text style={styles.title}>
//           Title <Text style={styles.textInputRequired}>*</Text>
//         </Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={handleTitleChange}
//           value={title}
//           placeholder="Enter title"
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
//           maxLength={500}
//         />

//         <Text style={styles.descriptionHeading}>
//           Priority <Text style={styles.textInputRequired}>*</Text>
//         </Text>
//         <View style={styles.dropdownContainer}>
//           <DropDownPicker
//             open={open}
//             value={selectedItems}
//             items={items}
//             setOpen={setOpen}
//             setValue={handlePriorityChange}
//             setItems={handlePriorityChange}
//             // theme="DARK"
//             multiple={true}
//             mode="BADGE"
//             badgeDotColors={[
//               '#e76f51',
//               '#00b4d8',
//               '#e9c46a',
//               '#e76f51',
//               '#8ac926',
//               '#00b4d8',
//               '#e9c46a'
//             ]}
//           />
//         </View>

//         {/* <Footer /> */}
//       {/* </ScrollView> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
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
//   },
//   descriptionInput: {
//     height: 100,
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     textAlignVertical: 'top',
//   },
//   textInputRequired: {
//     color: 'red',
//   },
//   dropdownContainer: {
//     height: 40,
//     marginBottom: 20,
//   },
// });

// export default MyPage;

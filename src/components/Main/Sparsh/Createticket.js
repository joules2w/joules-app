import React, { useState, useCallback } from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView, TouchableOpacity, Modal, ImageBackground, Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from '../../common/Header/Header';
import Footer from '../../common/Footer';

const CreateTicket = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [fileResponse, setFileResponse] = useState([]);

  const PriorityOptions = ['High', 'Medium', 'Low'];

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        maxFilesize: 10, // Maximum file size in MB
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text) => {
    if (text.length <= 500) {
      setDescription(text);
    }
  };

  const handleButton1Press = () => {
    if (!title || !description || fileResponse.length === 0 || !selectedPriority) {
      Alert.alert("Please fill all the required fields and attach the pdf file");
    } else {
      Alert.alert("Ticket created succesfully");
      setTitle('');
      setDescription('');
      setFileResponse([]);
      setSelectedPriority('');
      navigation.navigate('Sparsh')
    }
  };

  const togglePriorityDropdown = () => {
    setIsPriorityDropdownOpen(!isPriorityDropdownOpen);
  };

  const handlePrioritySelect = (option) => {
    setSelectedPriority(option);
    setIsPriorityDropdownOpen(false);
  }

  const handleCancelButtonPress = () => {
    setTitle('');
    setDescription('');
    setSelectedPriority('');
    setFileResponse([]);
    navigation.navigate('Sparsh');
  };

  const handlePriorityPress = () => {
    setIsPriorityDropdownOpen(false);
  };

  const logout = () => {
    navigation.navigate('Login')
  }
  const interviewpanel = () => {
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />

        {/* Background Image */}
        <ImageBackground source={require('../../../Assets/Images/background.jpg')} style={styles.backgroundImage}>
          <Text style={styles.texthead01}>Please send us your questions, we will get back to you.</Text>
          <Text style={styles.texthead02}>Loream ipsum dolor sit amet consectur.Maecenas cursus eget semper tellus tristique</Text>
        </ImageBackground>

        {/* Set Title */}
        <Text style={styles.title}>Title <Text style={styles.textInputRequired}>*</Text></Text>
        <TextInput style={styles.input}
          onChangeText={handleTitleChange}
          value={title}
          placeholder="Enter title"
          placeholderTextColor={'#808080'} />

        {/* Discription */}
        <Text style={styles.title}>Description<Text style={styles.textInputRequired}>*</Text></Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.descriptionInput} multiline
            onChangeText={handleDescriptionChange}
            value={description}
            placeholder="Enter description (max 500 characters)"
            placeholderTextColor={'#808080'}
            maxLength={500} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button01}>
              <Text style={styles.buttontext} onPress={handleDocumentSelection}>
                <MaterialIcons name="attach-file" size={18} style={styles.icon} />
                Attach file</Text>
              {fileResponse.map((file, index) => (
                <Text style={styles.attachtext}
                  key={index.toString()}
                  numberOfLines={1}
                  ellipsizeMode={'middle'}>
                  {file?.uri}
                </Text>
              ))}
            </TouchableOpacity>
          </View>
        </View>

        {/* Ticket Priority */}
        <Text style={styles.title}>Priority <Text style={styles.textInputRequired}>*</Text></Text>
        <TouchableOpacity onPress={togglePriorityDropdown} style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}>Ticket priority : {selectedPriority}</Text>
        </TouchableOpacity>
        <Modal transparent animationType="fade"
          visible={isPriorityDropdownOpen}
          value={selectedPriority}
          onRequestClose={() => setIsPriorityDropdownOpen(false)}>
          <TouchableOpacity style={styles.backdrop} onPress={handlePriorityPress}>
            <View style={styles.modalContainer}>
              <View style={styles.dropdownList}>
                {PriorityOptions.map((option, index) => (
                  <TouchableOpacity style={styles.dropdownOption} key={index}
                    onPress={() => handlePrioritySelect(option)}>
                    <Text style={styles.dropdownOptionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
            <Text style={styles.buttonText}>Create Ticket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCancelButtonPress}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Footer />
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120
  },
  backgroundImage: {
    opacity: 0.5,
  },
  texthead01: {
    marginLeft: '5%',
    color: '#000000',
    fontSize: 18,
    fontWeight: "bold",
    marginTop: '5%',
  },
  texthead02: {
    marginLeft: '5%',
    color: '#000000',
    fontSize: 15,
    marginTop: '5%',
    marginBottom: '5%',
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#000000',
    marginLeft: '5%',
    marginTop: '5%',
  },
  textInputRequired: {
    color: 'red',
  },
  textInputContainer: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginLeft: '5%',
    marginRight: '5%',
    color: '#000000'
  },
  descriptionInput: {
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
    color: '#000000',
    marginLeft: '5%',
    marginRight: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button01: {
    backgroundColor: '#449B93',
    padding: 10,
    borderRadius: 5,
    marginRight: '5%',
    marginLeft: '5%',
  },
  buttontext: {
    color: '#fff',
    fontSize: 15,
  },
  attachtext: {
    color: '#000000',
    alignSelf: 'center',
    marginLeft: '5%',
    fontSize: 13
  },
  dropdownButtonText: {
    fontSize: 13,
    color: '#000000',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownOption: {
    paddingVertical: 5,
  },
  dropdownOptionText: {
    fontSize: 15,
    color: '#000000',
  },
  dropdownList: {
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 5,
    padding: 10,
  },
  dropdownContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#449B93',
    borderRadius: 10,
    padding: 10,
    marginTop: '5%',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  flashMessage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#808080',
    borderRadius: 10,
    margin: '10%',
  },
  flashText: {
    color: '#fff',
    fontSize: 16,
    margin: '5%',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateTicket;
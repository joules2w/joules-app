import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, Dimensions, ImageBackground, Alert, TouchableOpacity, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import Header from './Header';
import Footer from './Footer';
import SearchBox from './SearchBox';
import Filter from './Filter';

const JobDetailScreen = ({ route, navigation }) => {
  const { constants } = route.params;

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^[0-9]{10}$/;

    if (phoneRegex.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  };

  const validateInput = () => {
    const isEmailValid = validateEmail();
    const isPhoneNumberValid = validatePhoneNumber();

    if (isEmailValid && isPhoneNumberValid) {
    } else if (!isEmailValid && !isPhoneNumberValid) {
      Alert.alert('Invalid Input', 'Please enter a valid email address and 10-digit phone number.');
    } else if (!isEmailValid) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
    } else {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
    }
  };

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchToggle = () => {
    setIsSwitchOn(!isSwitchOn);

    if (isSwitchOn) {
      console.log("Switch is toggled on.");
    }
  };

  const [fileResponse, setFileResponse] = useState([]);

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

  const renderSkills = () => {
    const skills = constants.skills;
    const rows = [];
    let row = [];

    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      const isLongSkill = skill.length > 20;

      if (isLongSkill || row.length === 3) {
        rows.push(row);
        row = [];
      }

      row.push(skill);

      if (i === skills.length - 1) {
        rows.push(row);
      }
    }

    return rows.map((row, index) => (
      <View key={index} style={styles.skillsRow}>
        {row.map((skill, skillIndex) => (
          <View key={skillIndex} style={styles.skillItem}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    ));
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
        <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
        <ImageBackground style={styles.background} source={require('./Images/background.png')}>
          <Text style={styles.texthead01}>Job Portal</Text>
          <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
        </ImageBackground>
        <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
          <Text style={styles.myreferral}>My Referrals</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
          <SearchBox />
          <Filter />
        </View>
        <Text style={styles.heading03}>{constants.title}</Text>
        <Text style={styles.heading02}>Job created on 23 August</Text>
        <Text style={styles.heading01}>Description</Text>
        <Text style={styles.heading02}>{constants.description}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Experience</Text>
        <Text style={styles.heading02}>{constants.experience}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Location</Text>
        <Text style={styles.heading02}>{constants.location}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Salary</Text>
        <Text style={styles.heading02}>{constants.salary}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Eligibility</Text>
        <Text style={styles.heading02}>{`\u25CF ${constants.eligibility}`}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Skills</Text>
        {renderSkills()}
        <View style={styles.line} />

        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
          <Text style={styles.texthead}>Application</Text>
          <TouchableOpacity style={styles.referbutton} onPress={() => navigation.navigate('myreferral')}>
            <Text style={styles.myreferral}>My Referrals</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading02}>Switch the toggle button, if you wish to apply for this job.</Text>
        <Switch trackColor={{ true: '#344953', false: 'grey' }} style={styles.switch} value={isSwitchOn} onValueChange={handleSwitchToggle} />
        <Text style={styles.heading01}>Application name<Text style={styles.require}>*</Text></Text>
        <TextInput style={styles.inputtext}
          placeholder='Enter your name'
          placeholderTextColor='#808080' />
        <Text style={styles.heading01}>Application Email id<Text style={styles.require}>*</Text></Text>
        <TextInput style={styles.inputtext}
          placeholder='Enter your email'
          placeholderTextColor='#808080'
          value={email}
          onChangeText={(text) => setEmail(text)} />
        <Text style={styles.heading01}>Applicant Mobile number<Text style={styles.require}>*</Text></Text>
        <TextInput style={styles.inputtext}
          placeholder='Enter your mobile number'
          placeholderTextColor='#808080'
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType='numeric'
          maxLength={10} />
        <Text style={styles.heading01}>Applicant total experience<Text style={styles.require}>*</Text></Text>
        <TextInput style={styles.inputtext}
          placeholder='Total Experience'
          placeholderTextColor='#808080' />

        <View style={[styles.card, styles.elevation]}>
          <TouchableOpacity style={styles.attachbutton} onPress={handleDocumentSelection}>
            <Text style={styles.heading02}>File supported (.pdf), file size should not exceed more than 10 MB</Text>
            <Text style={styles.uploadtext}>Upload file</Text>
          </TouchableOpacity>
          {fileResponse.map((file, index) => (
            <Text style={styles.attachtext}
              key={index.toString()}
              numberOfLines={1}
              ellipsizeMode={'middle'}>
              {file?.uri}
            </Text>
          ))}
        </View>
        <TouchableOpacity style={styles.submitbutton} onPress={validateInput}>
          <Text style={styles.submittext}>Apply Now</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120,
  },
  background: {
    height: 150,
    width: Dimensions.get('window').width,
    opacity: 0.45,
  },
  texthead01: {
    color: 'black',
    fontSize: 22,
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
  },
  texthead02: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: '5%',
    marginRight: '5%',
  },
  myreferral: {
    color: 'red',
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontSize: 15,
    marginRight: '8%',
  },
  heading01: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: '5%',
    marginRight: '5%',
    color: 'black',
    padding: 5,
  },
  heading02: {
    fontSize: 13,
    marginLeft: '5%',
    color: '#808080',
    textAlign: 'justify',
    marginRight: '5%',
    padding: 5,
  },
  heading03: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
    color: 'black',
    padding: 5,
  },
  line: {
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '3%',
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  skillItem: {
    padding: 3,
    marginLeft: '5%',
  },
  skillText: {
    fontSize: 13,
    color: '#449b93',
    backgroundColor: '#e0f9f6',
    padding: 10,
    borderRadius: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'black',
    padding: 5,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
  },
  elevation: {
    shadowColor: 'black',
    elevation: 3,
  },
  attachbutton: {
    alignSelf: 'center',
    borderRadius: 5
  },
  attachbutton: {
    alignSelf: 'center',
    borderRadius: 5
  },
  attachtext: {
    color: 'black',
    alignSelf: 'center'
  },
  uploadtext: {
    color: 'black',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    color: '#5F9EA0',
  },
  submitbutton: {
    backgroundColor: '#5F9EA0',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 5,
    marginLeft: '5%',
    marginBottom: '5%',
    marginTop: '5%'
  },
  submittext: {
    color: '#fff',
    alignSelf: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texthead: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: '5%',
    marginTop: '5%'
  },
  require: {
    color: 'red',
    fontSize: 12,
  },
  inputtext: {
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: '5%',
    marginBottom: '5%',
    marginRight: '5%',
    borderRadius: 4,
    color: 'black'
  },
  switch: {
    marginRight: '10%',
    borderColor: 'black'
  },
});

export default JobDetailScreen;

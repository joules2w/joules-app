import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, Dimensions, ImageBackground, Alert, TouchableOpacity, ScrollView } from 'react-native';

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
            <ImageBackground style = {styles.background} source = {require('./Images/background.png')}>
                <Text style={styles.texthead01}>Job Portal</Text>
                <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
            </ImageBackground>
            <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
                <Text style={styles.text01}>My Referrals</Text>
            </TouchableOpacity>
            <View style={{flexDirection : 'row', width : '100%', justifyContent : 'center', marginLeft : '5%', marginRight : '5%'}}>
            <SearchBox />
            <Filter />
            </View>
      <Text style={styles.texthead}>{constants.title}</Text>
      <Text style={styles.text}>Job created on 23 August</Text>
      <Text style={styles.texthead}>Description</Text>
      <Text style={styles.text}>{constants.description}</Text>
      <View style={styles.line} />
      <Text style={styles.texthead}>Experience</Text>
      <Text style={styles.text}>{constants.experience}</Text>
      <View style={styles.line} />
      <Text style={styles.texthead}>Location</Text>
      <Text style={styles.text}>{constants.location}</Text>
      <View style={styles.line} />
      <Text style={styles.texthead}>Salary</Text>
      <Text style={styles.text}>{constants.salary}</Text>
      <View style={styles.line} />
      <Text style={styles.texthead}>Eligibility</Text>
      <Text style={styles.text}>{`\u25CF ${constants.eligibility}`}</Text>
      <Text style={styles.texthead}>Skills</Text>
      <View style={{flexDirection : 'row', marginRight : '10%', justifyContent : 'flex-start'}}>
      <Text style={styles.button02}><Text style={styles.skilltext}>{constants.skills[0]}</Text></Text>
      <Text style={styles.button02}><Text style={styles.skilltext}>{constants.skills[1]}</Text></Text>
      <Text style={styles.button02}><Text style={styles.skilltext}>{constants.skills[2]}</Text></Text>
      <Text style={styles.button02}><Text style={styles.skilltext}>{constants.skills[3]}</Text></Text>
      <Text style={styles.button02}><Text style={styles.skilltext}>{constants.skills[4]}</Text></Text>
      <Text style={styles.button02}><Text style={styles.skilltext}>{constants.skills[5]}</Text></Text>
      </View>
      <View style={styles.line} />

      <View style={{flexDirection : 'row', width : '100%', justifyContent : 'space-between'}}>
            <Text style={styles.texthead}>Application</Text>
            <TouchableOpacity style={styles.referbutton} onPress={() => navigation.navigate('myreferral')}>
                <Text style={styles.refertext}>My Referrals</Text>
            </TouchableOpacity>
            </View>
            <Text style={styles.texthead03}>Switch the toggle button, if you wish to apply for this job.</Text>
            <Switch trackColor={{true: '#344953', false: 'grey'}} style={styles.switch} value={isSwitchOn} onValueChange={handleSwitchToggle} />
                <Text style={styles.texthead03}>Application name<Text style={styles.require}>*</Text></Text>
                <TextInput style={styles.inputtext} 
                placeholder='Enter your name' 
                placeholderTextColor='#808080' />
                <Text style={styles.texthead03}>Application Email id<Text style={styles.require}>*</Text></Text>
                <TextInput style={styles.inputtext} 
                placeholder='Enter your email' 
                placeholderTextColor='#808080'
                value={email}
                onChangeText={(text) => setEmail(text)} />
                <Text style={styles.texthead03}>Applicant Mobile number<Text style={styles.require}>*</Text></Text>
                <TextInput style={styles.inputtext} 
                placeholder='Enter your mobile number' 
                placeholderTextColor='#808080'
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
                keyboardType='numeric'
                maxLength={10} />
                <Text style={styles.texthead03}>Applicant total experience<Text style={styles.require}>*</Text></Text>
                <TextInput style={styles.inputtext} 
                placeholder='Total Experience' 
                placeholderTextColor='#808080' />

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity style={styles.attachbutton} onPress={handleFileAttachment}>
                <Text style={styles.attachtext}>File supported (.pdf), file size should not exceed more than 10 MB</Text>
                <Text style={styles.uploadtext}>Upload file</Text>
                </TouchableOpacity>
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
    flex: 1,
    backgroundColor : '#fff'
  },
  texthead : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 22,
    marginLeft : '5%',
    marginTop : '5%'
},
background : {
  height : 150,
  width : Dimensions.get('window').width,
  opacity : 0.5,
},
texthead01 : {
  color : 'black',
  fontSize : 30,
  textAlign : 'left',
  marginLeft : '5%',
  marginRight : '5%',
  marginTop : 10,
},
texthead02 : {
  color : 'black',
  fontSize : 18,
  textAlign : 'justify',
  marginLeft : '5%',
  marginRight : '5%',
},
text : {
    color : 'black',
    marginLeft : '5%',
    marginRight : '5%',
    textAlign : 'justify'
},
text01 : {
  color : 'red',
  marginBottom : '2%',
  textAlign : 'right',
  marginRight : 5,
  fontSize : 15,
  textDecorationLine : 'underline',
},
line : {
    borderBottomColor : '#808080',
    borderBottomWidth : 0.5,
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : '5%',
},
verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  button02 : {
    backgroundColor : 'lightblue',
    marginLeft : '5%',
    borderRadius : 10,
    padding : 5,
},
skilltext : {
    color : 'black',
    marginLeft : '10%',
    marginRight : '10%',
},
referbutton : {
    width : '30%',
    alignSelf : 'center',
    marginTop : '10%',
},
refertext : {
    color : 'red',
},
switch : {
    marginRight : '10%',
    borderColor : 'black'
},
require : {
    color : 'red',
    fontSize : 12,
},
inputtext : {
    borderWidth : 1,
    borderColor : 'black',
    marginLeft : '5%',
    marginBottom : '5%',
    marginRight : '5%',
    borderRadius : 4,
    color : 'black'
},
attachbutton : {
    alignSelf : 'center',
    borderRadius : 5
},
attachtext : {
    color : 'black',
    alignSelf : 'center'
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
submitbutton : {
    backgroundColor : '#5F9EA0',
    alignSelf : 'flex-start',
    padding : 10,
    borderRadius : 5,
    marginLeft : '5%',
    marginBottom : '5%',
    marginTop : '5%'
},
submittext : {
    color : '#fff',
    alignSelf : 'center',
},
footer : {
  position : 'absolute',
  bottom : 0,
  left : 0,
  right : 0,
  justifyContent : 'center',
  alignItems : 'center',
},
scrollContainer: {
  flexGrow: 1,
  paddingBottom: 120,
},
texthead03 : {
  color : 'black',
  fontSize : 17,
  marginLeft : '5%',
  marginRight : '5%',
}
});

export default JobDetailScreen;

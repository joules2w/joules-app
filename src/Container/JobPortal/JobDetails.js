import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, Dimensions, ImageBackground, Alert, TouchableOpacity, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const JobDetailScreen = ({ route, navigation }) => {
  const { job } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [totalExperience, setTotalExperience] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

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

    if (!name || !email || !phoneNumber || !totalExperience || fileResponse.length === 0) {
      Alert.alert('Incomplete Information', 'Please fill in all the required fields and attach a PDF document.');
      return;
    }

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

    Alert.alert("Job applied succesfully");
    setName('');
    setEmail('');
    setPhoneNumber('');
    setTotalExperience('');
    setFileResponse([]);
    navigation.goBack();
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
    const skills = job?.jobSkills;
    const rows = [];
    let row = [];

    for (let i = 0; i < skills?.length; i++) {
      const skill = skills[i];
      const isLongSkill = skill.length > 50;

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

  const renderExperience = () => {
    const { jobExperience } = job;

    if (jobExperience && jobExperience.length > 0) {
      const firstExperience = jobExperience[0];

      if (firstExperience.jobExperienceFrom && firstExperience.jobExperienceTo) {
        return `${firstExperience.jobExperienceFrom} to ${firstExperience.jobExperienceTo}years`;
      } else if (firstExperience.jobExperienceFrom) {
        return `${firstExperience.jobExperienceFrom} years`;
      } else if (firstExperience.jobExperienceTo) {
        return `Fresher to ${firstExperience.jobExperienceTo} years`;
      }
    }
    return 'Experience details not available';
  };

  const renderSalary = () => {
    const { JobSalary } = job;

    if (JobSalary && JobSalary.length > 0) {
      const firstSalary = JobSalary[0];

      if (firstSalary.jobSalaryFrom && firstSalary.jobSalaryTo) {
        return `${formatSalary(firstSalary.jobSalaryFrom)} to ${formatSalary(firstSalary.jobSalaryTo)}`;
      } else if (firstSalary.jobSalaryFrom) {
        return `${formatSalary(firstSalary.jobSalaryFrom)}`;
      } else if (firstSalary.jobSalaryTo) {
        return `${formatSalary(firstSalary.jobSalaryTo)}`;
      }
    }

    return 'Salary details not available';
  };

  const formatSalary = (salary) => {
    // If salary has 1 or 2 digits, add 'LPA' to it
    if (salary.toString().length <= 2) {
      return `${salary} LPA`;
    }
    return salary;
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

        {/* Header and Background image */}
        <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
        <ImageBackground style={styles.background} source={require('../../Assets/Images/background.jpg')}>
          <Text style={styles.texthead01}>Job Portal</Text>
          <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
        </ImageBackground>

        {/* My referral */}
        <TouchableOpacity style={styles.referbutton} onPress={() => navigation.navigate('myreferral')}>
          <Text style={styles.myreferral}>My Referrals</Text>
        </TouchableOpacity>

        {/* Job Details */}
        <Text style={styles.heading03}>{job.jobTitle}</Text>
        <Text style={styles.heading02}>Job created on 23 August</Text>
        <Text style={styles.heading01}>Description</Text>
        <Text style={styles.heading02}>{job.jobDescription}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Experience</Text>
        <Text style={styles.heading02}>{renderExperience()}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Location</Text>
        <Text style={styles.heading02}>{job?.jobLocation || ''}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Salary</Text>
        <Text style={styles.heading02}>{renderSalary()}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Responsibilities</Text>
        <Text style={styles.heading02}>{`\u25CF ${job.jobResponsibilities}`}</Text>
        <View style={styles.line} />
        <Text style={styles.heading01}>Skills</Text>
        {renderSkills()}
        <View style={styles.line} />

        {/* Application details */}
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
          <Text style={styles.texthead}>Application</Text>
          <TouchableOpacity style={styles.referbutton} onPress={() => navigation.navigate('myreferral')}>
            <Text style={styles.myreferral}>My Referrals</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading02}>Switch the toggle button, if you wish to apply for this job.</Text>
        <Switch trackColor={{ true: '#344953', false: 'grey' }} style={styles.switch} value={isSwitchOn} onValueChange={handleSwitchToggle} />

        {/* Applicant's name */}
        <Text style={styles.heading01}>Application name<Text style={styles.require}>*</Text></Text>
        <TextInput style={styles.inputtext}
          placeholder='Enter your name'
          placeholderTextColor='#808080'
          value={name}
          maxLength={40}
          onChangeText={(text) => setName(text)} />

        {/* Applicant's email address */}
        <Text style={styles.heading01}>Application Email id<Text style={styles.require}>*</Text></Text>
        <TextInput style={styles.inputtext}
          placeholder='Enter your email'
          placeholderTextColor='#808080'
          value={email}
          onChangeText={(text) => setEmail(text)} />

        {/* Applicant's mobile number */}
        <Text style={styles.heading01}>Applicant Mobile number<Text style={styles.require}>*</Text></Text>
        <TextInput style={styles.inputtext}
          placeholder='Enter your mobile number'
          placeholderTextColor='#808080'
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType='numeric'
          maxLength={10} />

        {/* Applicant's total experience */}
        <Text style={styles.heading01}>Applicant total experience(in years)<Text style={styles.require}>*</Text></Text>
        <TextInput style={styles.inputtext}
          placeholder='Total Experience'
          placeholderTextColor='#808080'
          value={totalExperience}
          keyboardType='numeric'
          maxLength={2}
          onChangeText={(text) => setTotalExperience(text)} />

        {/* Attach required pdf file */}
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

        {/* Apply button */}
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
    opacity: 0.5,
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
  referbutton: {
    marginRight: '5%',
    marginTop: '5%',
  },
  myreferral: {
    color: 'red',
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  heading01: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: '5%',
    marginRight: '5%',
    color: 'black',
    padding: 3,
  },
  heading02: {
    fontSize: 13,
    marginLeft: '5%',
    color: '#808080',
    textAlign: 'justify',
    marginRight: '5%',
    padding: 3,
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
    padding: 2,
    marginLeft: '5%',
  },
  skillText: {
    fontSize: 12,
    color: '#449b93',
    backgroundColor: '#e0f9f6',
    padding: 8,
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
    borderWidth: 0.5,
    borderColor: '#000000',
    marginLeft: '5%',
    marginBottom: '2%',
    marginRight: '5%',
    borderRadius: 4,
    color: 'black'
  },
  switch: {
    marginRight: '5%',
    borderColor: '#000000'
  },
});

export default JobDetailScreen;
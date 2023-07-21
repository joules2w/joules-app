

import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { constants } from './StaticValues';

import Header from './Header';
import Footer from './Footer';
import FilterBy from './Filter';
import SearchBox from './SearchBox';

const Job_portal = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=1&limit=10&jobExperience=2-6&jobSalary=500000-1100000&jobLocation=Bangalore';
      const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Fetched jobs:', data);
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleJobPress = (job) => {
    navigation.navigate('JobDetail', { job });
  };

  const renderCellContent = (value) => {
    if (value?.length > 10) {
      return <Text>{value.substring(0, 78)}...</Text>;
    }
    return <Text>{value}</Text>;
  };

  const renderskillContent = (value) => {
    if (value?.length > 40) {
      return <Text>{value.substring(0, 50)}...</Text>;
    }
    return <Text>{value}</Text>;
  };

  const renderJobItem = ({ item }) => {
    if (!item) {
      return null;
    }

    const jobId = item.jobId || '';
    const jobTitle = item.jobTitle || '';
    const jobDescription = item.jobDescription || '';
    const jobSkills = item.jobSkills || [];

    const skillsToShow = jobSkills.slice(0, 3);
    const remainingSkillsCount = jobSkills.length - 3;

    return (
      <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity onPress={() => handleJobPress(item)}>
          <Text style={styles.heading01}>{jobTitle}</Text>
          <Text style={styles.heading02}>{renderCellContent(jobDescription)}</Text>
          <View style={styles.skillsContainer}>
            {skillsToShow.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Text style={styles.skillText}>{renderskillContent(skill)}</Text>
              </View>
            ))}
            {remainingSkillsCount > 0 && (
              <View style={styles.skillItem}>
                <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const logout = () => {
    navigation.navigate('Login');
  };

  const interviewpanel = () => {
    navigation.navigate('InterviewPanel');
  };

  const jobportal = () => {
    navigation.navigate('Job_Portal');
  };

  const sparsh = () => {
    navigation.navigate('Sparsh');
  };

  const home = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
        <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
          <Text style={styles.texthead01}>Job Portal</Text>
          <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
        </ImageBackground>
        <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
          <Text style={styles.myreferral}>My Referrals</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
          <SearchBox />
          <FilterBy />
        </View>
        <FlatList
          data={jobs.data}
          keyExtractor={(item) => item?.jobId?.toString()}
          renderItem={renderJobItem}
          contentContainerStyle={{ paddingBottom: 100 }} // Add padding to the bottom of the FlatList
        />
        <Footer />
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
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
    fontSize: 13,
    marginRight: '5%',
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
  heading01: {
    fontSize: 16,
    fontWeight: 'bold',
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
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    padding: 3,
    marginLeft: '5%',
  },
  skillText: {
    fontSize: 13,
    color: '#449b93',
    backgroundColor: '#e0f9f6',
    padding: 8,
    borderRadius: 15,
  },
});

export default Job_portal;

import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';

import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Filter from "./Filter";

const InterViewPanel = ({ navigation }) => {

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]); 
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleSearch = useCallback((searchQuery) => {
        setSearchQuery(searchQuery);
        const filteredJobs = jobs.data.filter((job) => {
          const skills = job.jobSkills || [];
          const normalizedQuery = searchQuery.toLowerCase();
          return (
            job.jobTitle.toLowerCase().includes(normalizedQuery) ||
            job.jobLocation.toLowerCase().includes(normalizedQuery) ||
            skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
          );
        });
        setFilteredJobs(filteredJobs);
      }, [jobs.data]);

    const fetchJobs = async () => {
        try {

            const apiurl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=2&limit=10&search=&jobExperience=2-6&jobSalary=500000-1100000&jobLocation=Bangalore';
            const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4Mzc3Njh9.7kJGZq32P17z3bWosWS0mmoX95pKT2f5g4P63QO17Mw';
            const response = await fetch(apiurl, {
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
        navigation.navigate('MoreDetails', { job });
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
        )
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
            <ScrollView>
                <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
                <ImageBackground style={styles.background} source={require('./Images/background.png')}>
                    <Text style={styles.texthead01}>Interview Panel</Text>
                    <Text style={styles.texthead02}>Welcome to our Interview Panel page, where you can discover everything you need to know about panel interviews and how to excel in them.</Text>
                </ImageBackground>
                <View style={styles.view}>
                    <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
                    <Filter />
                </View>
                <FlatList scrollEnabled={false}
                    data={filteredJobs.length > 0 ? filteredJobs : jobs.data}
                    renderItem={renderJobItem}
                    keyExtractor={(item) => item.id.toString()} />
                <Footer />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignContent: 'center',
    },
    background: {
        height: 150,
        width: Dimensions.get('window').width,
        opacity: 0.5,
        marginBottom: '5%',
    },
    texthead01: {
        color: 'black',
        fontSize: 22,
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 10,
        fontWeight: "bold"
    },
    texthead02: {
        color: 'black',
        fontSize: 16,
        textAlign: 'justify',
        marginLeft: '5%',
        marginRight: '5%',
    },
    view: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%'
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
    moredetails: {
        color: 'red',
        textAlign: 'right',
        textDecorationLine: 'underline',
        fontSize: 13,
    },
})

export default InterViewPanel;
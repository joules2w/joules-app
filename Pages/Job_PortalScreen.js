import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { constants } from './StaticValues';

import Header from './Header';
import Footer from './Footer';
import FilterBy from './Filter';
import SearchBox from './SearchBox';

const Job_portal = ({ navigation }) => {

    const handleJobPress = (constants) => {
        navigation.navigate('JobDetail', { constants });
    };

    const renderCellContent = (value) => {
        if (value.length > 10) {
            return <Text>{value.substring(0, 78)}...</Text>;
        }
        return <Text>{value}</Text>;
    };

    const renderskillContent = (value) => {
        if (value.length > 40) {
            return <Text>{value.substring(0, 50)}...</Text>;
        }
        return <Text>{value}</Text>;
    };
    
    const renderJobItem = ({ item }) => {
        const skillsToShow = item.skills.slice(0, 3);
    const remainingSkillsCount = item.skills.length - 3;

        return (
            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity onPress={() => handleJobPress(item)}>
                    <Text style={styles.heading01}>{item.title}</Text>
                    <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
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
        navigation.navigate()
    }

    return (
        <View style={styles.container}>
            <ScrollView>
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
                    <FilterBy />
                </View>
                <FlatList scrollEnabled={false}
                    data={constants}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderJobItem} />

                <Footer />
            </ScrollView>
        </View>
    );
}

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
    myreferral : {
        color: 'red',
        textAlign: 'right',
        textDecorationLine: 'underline',
        fontSize: 13,
        marginRight : '5%',
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
        fontSize: 13    ,
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
        padding : 3,
        marginLeft : '5%'
    },
    skillText: {
        fontSize: 13,
        color: '#449b93',
        backgroundColor: '#e0f9f6',
        padding: 8,
        borderRadius: 15,
    },
})

export default Job_portal;
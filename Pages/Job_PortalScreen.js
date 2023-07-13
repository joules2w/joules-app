import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { constants } from './StaticJobs';

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

    const renderJobItem = ({ item }) => (
        <View style={[styles.card, styles.elevation]}>
            <TouchableOpacity onPress={() => handleJobPress(item)}>
                <Text style={styles.heading01}>{item.title}</Text>
                <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
                <View style={{ flexDirection: 'row', width: '50%' }}>
                    <Text style={styles.text}>{item.skills[0]}</Text>
                    <Text style={styles.text}>{item.skills[1]}</Text>
                    <Text style={styles.text}>{item.skills[2]}</Text>
                    <Text style={styles.text}>{item.skills[3]}</Text>
                    <Text style={styles.text}>{item.skills[4]}</Text>
                    <Text style={styles.text}>{item.skills[5]}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );


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
                    <Text style={styles.text01}>My Referrals</Text>
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
    text02: {
        color: 'black',
        marginLeft: 40,
        marginTop: 40,
        fontSize: 20,
    },
    background: {
        height: 150,
        width: Dimensions.get('window').width,
        opacity: 0.5,
    },
    text01: {
        color: 'red',
        marginBottom: '2%',
        textAlign: 'right',
        marginRight: 5,
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    texthead01: {
        color: 'black',
        fontSize: 30,
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 10,
    },
    texthead02: {
        color: 'black',
        fontSize: 18,
        textAlign: 'justify',
        marginLeft: '5%',
        marginRight: '5%',
    },
    textinput01: {
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 20,
        marginRight: 70,
        borderRadius: 5,
        marginBottom: 30,
    },
    text: {
        color: '#449b93',
        margin: 8,
        backgroundColor: '#e0f9f6',
        padding: 5,
        borderRadius: 15,
    },
    icon: {
        marginRight: 10,
    },
    heading01: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: '5%',
        marginRight: '5%',
        color: 'black',
        padding: 5,
    },
    heading02: {
        fontSize: 14,
        marginLeft: '5%',
        color: '#808080',
        textAlign: 'justify',
        marginRight: '5%',
        padding: 5,
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
    button01: {
        backgroundColor: 'lightblue',
        borderRadius: 8,
        paddingVertical: 5,
        margin: '8%',
    },
})

export default Job_portal;
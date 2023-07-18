import React from "react";
import { View, StyleSheet, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';

import Header from "./Header";
import Footer from "./Footer";
import AssignPanelMember from './AssignPanelMember';

const MoreDetails = ({ route, navigation }) => {

    const { constants } = route.params;

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
                    <Text style={styles.texthead01}>Interview Panel For Interactive Developer</Text>
                    <Text style={styles.texthead02}>Job created on 28th September 2015</Text>
                    <Text style={styles.texthead03}>₹ 4000 per panel member</Text>
                </ImageBackground>

                <AssignPanelMember />

                <Text style={styles.heading01}>Job Description</Text>
                <Text style={styles.heading02}>{constants.description}</Text>
                <View style={styles.line} />
                <Text style={styles.heading01}>Eligibility</Text>
                <Text style={styles.heading02}>{constants.eligibility}</Text>
                <View style={styles.line} />
                <Text style={styles.heading01}>Skills</Text>
                {renderSkills()}
                <View style={styles.footer}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#fff',
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
    texthead03: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'justify',
        marginLeft: '5%',
        marginRight: '5%',
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
    line: {
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        marginLeft: '5%',
        marginRight: '5%',
        padding : 8
    },
    skillsRow: {
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
        padding: 10,
        borderRadius: 15,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MoreDetails;
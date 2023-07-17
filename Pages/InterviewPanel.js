import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { constants } from './StaticValues';

import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Filter from "./Filter";

const InterViewPanel = ({ navigation }) => {

    const handleJobPress = (constants) => {
        navigation.navigate('MoreDetails', { constants });
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
                <TouchableOpacity onPress={() => handleJobPress(item)}>
                    <Text style={styles.moredetails}>More details ➤</Text>
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
                    <SearchBox />
                    <Filter />
                </View>
                <FlatList scrollEnabled={false}
                    data={constants}
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
        fontWeight : "bold"
    },
    texthead02: {
        color: 'black',
        fontSize: 16,
        textAlign: 'justify',
        marginLeft: '5%',
        marginRight: '5%',
    },
    view : {
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
    },
    skillText: {
        fontSize: 13,
        color: '#449b93',
        backgroundColor: '#e0f9f6',
        padding: 8,
        borderRadius: 15,
    },
    moredetails : {
        color: 'red',
        textAlign: 'right',
        textDecorationLine: 'underline',
        fontSize: 13,
    },    
})

export default InterViewPanel;
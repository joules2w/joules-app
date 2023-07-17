import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import { constants, ticket } from './StaticValues'

import Header from "./Header";
import Footer from "./Footer";

const Home = ({ navigation }) => {

    const [selectedTab, setSelectedTab] = useState('All');

    const getFilteredData = (priority) => {
        if (priority === 'All') {
            return ticket;
        }
        return ticket.filter((item) => item.priority === priority);
    };


    const frequentJobPress = (constants) => {
        navigation.navigate('JobDetail', { constants });
    };

    const highpayJobPress = (constants) => {
        navigation.navigate('MoreDetails', { constants });
    };

    const ticketDetails = (ticket) => {
        navigation.navigate('TicketDetails', { ticket });
    };

    const renderCellContent = (value) => {
        if (value?.length > 10) {
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

    const frequentJobItem = ({ item }) => {
        const skillsToShow = item.skills.slice(0, 3);
        const remainingSkillsCount = item.skills.length - 3;

        return (
            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity onPress={() => frequentJobPress(item)}>
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

    const highpayJobItem = ({ item }) => {
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
                <TouchableOpacity onPress={() => highpayJobPress(item)}>
                    <Text style={styles.moredetails}>More details ➤</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const ticketItem = ({ item }) => {
        
        let backgroundColor = '#808080';

    if (item.priority === 'High') {
        backgroundColor = 'green';
    } else if (item.priority === 'Medium') {
        backgroundColor = 'blue';
    } else if (item.priority === 'Low') {
        backgroundColor = 'red';
    }

        return (
            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity onPress={() => ticketDetails(item)}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.priority, { backgroundColor : backgroundColor }]}>
                            <Text style={styles.texthead03}>{item.priority}</Text>
                        </Text>
                        <Text style={styles.heading02}>Created on {item.createdOn}</Text>
                    </View>
                    <Text style={styles.heading01}>{item.heading}</Text>
                    <Text style={styles.heading02}>{item.ticketdescription}</Text>
                    <Text style={styles.texthead03}>Assigned on {item.assigned}</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const renderTabContent = () => {
        const ticket = getFilteredData(selectedTab);
        return (
            <FlatList scrollEnabled={false}
                data={ticket}
                keyExtractor={(ticket) => ticket.id.toString()}
                renderItem={ticketItem} />
        );
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
                <View style={styles.view01}>
                    <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
                </View>
                <Text style={styles.texthead01}>Top 6 High Paying Panel Member Jobs</Text>
                <Text style={styles.texthead02}>If you're looking to apply for a job, it's important to know which jobs are in high demand and frequently applied for. Here are the top 6 frequently applied jobs that you might want to consider:</Text>

                <FlatList scrollEnabled={false}
                    data={constants}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={frequentJobItem} />

                <View style={styles.line} />

                <Text style={styles.texthead01}>Top 6 Frequently Applied Jobs</Text>
                <Text style={styles.texthead02}>Are you interested in getting paid for your opinions and expertise? Consider becoming a panel member in one of these high-paying industries.</Text>

                <FlatList scrollEnabled={false}
                    data={constants}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={highpayJobItem} />

                    <View style={styles.tabContainer}>
                        <TouchableOpacity
                            style={[styles.tabItem, selectedTab === 'All' && styles.activeTab]}
                            onPress={() => setSelectedTab('All')}>
                            <Text style={styles.tabText}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabItem, selectedTab === 'Low' && styles.activeTab]}
                            onPress={() => setSelectedTab('Low')}>
                            <Text style={styles.tabText}>Low</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabItem, selectedTab === 'Medium' && styles.activeTab]}
                            onPress={() => setSelectedTab('Medium')}>
                            <Text style={styles.tabText}>Medium</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.tabItem, selectedTab === 'High' && styles.activeTab]}
                            onPress={() => setSelectedTab('High')}>
                            <Text style={styles.tabText}>High</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        {renderTabContent()}
                    </View>

                <View style={styles.footer}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        backgroundColor: '#fff',
    },
    view01: {
        flexDirection: 'row',
        width: '80%'
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
    moredetails: {
        color: 'red',
        textAlign: 'right',
        textDecorationLine: 'underline',
        fontSize: 13,
    },
    priority : {
        // backgroundColor : '#808080',
        borderRadius : 8,
        padding : 5,
        marginLeft : '5%'
    },
    texthead03: {
        fontSize: 15,
        color: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120,
    },
    texthead01: {
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 15,
        fontWeight : "bold",
    },
    texthead02: {
        color: 'black',
        fontSize: 15,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '8%',
        textAlign: "justify",
    },
    line: {
        borderColor: '#808080',
        borderBottomWidth: 1,
        marginLeft: '5%',
        marginRight: '5%',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    tabItem: {
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#808080',
        marginLeft: '5%',
        borderRadius: 5,
        color: '#fff',
    },
    activeTab: {
        backgroundColor: '#5f9ea0',
    },
    tabText: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#fff',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',
    },    
})

export default Home;
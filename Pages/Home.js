import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import { constants } from './StaticJobs'


import Header from "./Header";
import Footer from "./Footer";

const Home = ({ navigation }) => {

    const frequentJobPress = (constants) => {
        navigation.navigate('JobDetail', { constants });
    };

    const highpayJobPress = (constants) => {
        navigation.navigate('MoreDetails', { constants });
    };

    const renderCellContent = (value) => {
        if (value.length > 10) {
            return <Text>{value.substring(0, 78)}...</Text>;
        }
        return <Text>{value}</Text>;
    };


    const frequentJobItem = ({ item }) => (
        <View style={[styles.card, styles.elevation]}>
            <TouchableOpacity onPress={() => frequentJobPress(item)}>
                <Text style={styles.heading01}>{item.title}</Text>
                <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
                <View style={{ flexDirection: 'row' }}>
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

    const highpayJobItem = ({ item }) => (
        <View style={[styles.card, styles.elevation]}>
            <Text style={styles.heading01}>{item.title}</Text>
            <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>{item.skills[0]}</Text>
                <Text style={styles.text}>{item.skills[1]}</Text>
                <Text style={styles.text}>{item.skills[2]}</Text>
                <Text style={styles.text}>{item.skills[3]}</Text>
                <Text style={styles.text}>{item.skills[4]}</Text>
                <Text style={styles.text}>{item.skills[5]}</Text>

            </View>
            <TouchableOpacity onPress={() => highpayJobPress(item)}>
                <Text style={styles.moredetails}>More details ➤</Text>
            </TouchableOpacity>
        </View>
    );

    const [activeTab, setActiveTab] = useState('Tab1');

    const handleTabPress = (tabName) => {
        setActiveTab(tabName);
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
                        style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab1')}>
                        <Text style={styles.tabText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab2')}>
                        <Text style={styles.tabText}>Low</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabItem, activeTab === 'Tab3' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab3')}>
                        <Text style={styles.tabText}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabItem, activeTab === 'Tab4' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab4')}>
                        <Text style={styles.tabText}>High</Text>
                    </TouchableOpacity>
                </View>

                {activeTab === 'Tab1' && (
                    <View style={[styles.card, styles.elevation]}>
                        <TouchableOpacity onPress={() => navigation.navigate('TicketDetails')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.priority}>
                                    <Text style={styles.texthead03}>High</Text>
                                </Text>
                                <Text style={styles.heading02}>Created on 4 Apirl 2023</Text>
                            </View>
                            <Text style={styles.text01}>Testing</Text>
                            <Text style={styles.text02}>Testing</Text>
                            <Text style={styles.text03}>Assigned on 10 Apirl 2023</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {activeTab === 'Tab2' && (
                    <View style={[styles.card, styles.elevation]}>
                        <Text style={styles.text}>Content for Tab 2</Text>
                    </View>
                )}
                {activeTab === 'Tab3' && (
                    <View style={[styles.card, styles.elevation]}>
                        <Text style={styles.text}>Content for Tab 3</Text>
                    </View>
                )}
                {activeTab === 'Tab4' && (
                    <View style={[styles.card, styles.elevation]}>
                        <Text style={styles.text}>Content for Tab 4</Text>
                    </View>
                )}
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
    texthead01: {
        color: 'black',
        fontSize: 25,
        textAlign: 'left',
        marginLeft: '5%',
        marginTop: 10,
        marginRight: '5%',
    },
    texthead02: {
        color: 'black',
        fontSize: 16,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '8%',
        textAlign: "justify",
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
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120,
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
        margin: 10
    },
    text: {
        color: '#449b93',
        margin: 8,
        backgroundColor: '#e0f9f6',
        padding: 5,
        borderRadius: 15,
    },
    line: {
        borderColor: 'black',
        borderBottomWidth: 1,
        marginLeft: '8%',
        marginRight: '8%',
    },
    moredetails: {
        color: 'red',
        textAlign: 'right',
        marginRight: '3%',
        textDecorationLine: 'underline',
        fontSize: 15
    },
    buttontext: {
        color: '#fff',
        fontWeight: "bold",
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#808080',
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 5
    },
    activeTab: {
        backgroundColor: '#5f9ea0',
    },
    tabText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#fff',
    },
    priority: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        marginLeft: '5%',
        padding: 5,
    },
    texthead03: {
        fontSize: 20,
        color: 'black',
    },
    text01: {
        color: 'black',
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: '5%',
        textAlign: 'left'
    },
    text02: {
        color: 'black',
        fontSize: 16,
        marginLeft: '5%',
        textAlign: 'left'
    },
    text03: {
        color: 'black',
        fontSize: 15,
        marginLeft: '5%',
        textAlign: 'left'
    }
})

export default Home;
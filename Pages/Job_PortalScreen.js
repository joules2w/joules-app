import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, ImageBackground, Dimensions} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import MenuBar from './SideMenu';
import FilterBy from './Filter';


import SearchBox from './SearchBox';

const Job_portal = ({ navigation }) => {


   const logout = () =>{
    navigation.navigate('Login')
    }

    const interviewpanel = () =>{
        navigation.navigate('InterviewPanel')
    }

    const home = () => {
        navigation.navigate('Job_Portal')
    }

    const sparsh = () => {
        navigation.navigate('Sparsh')
    }

    return (
    <View style={styles.container}>
        <ScrollView>
            <View>
                <View style={{flexDirection : 'row', width : '80%'}}>
                <MenuBar interviewpanel={interviewpanel} home={home} sparsh={sparsh} />
                <Header logout={logout} />
                </View>
            <ImageBackground style = {styles.background} source = {require('./Images/background.png')}>
                <Text style={styles.texthead01}>Job Portal</Text>
                <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
            </ImageBackground>
            <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
                <Text style={styles.text01}>My Referrals</Text>
            </TouchableOpacity>

            <View style={{flexDirection : 'row', width : '100%', justifyContent : 'center', marginRight : '10%'}}>
            <SearchBox />
            <FilterBy />
            </View>
            
            </View>

            <View style={[styles.card, styles.elevation]}> 
                <TouchableOpacity onPress={() => navigation.navigate('interactivedeveloper')}>
                <Text style={styles.heading01}>Interactive Developer</Text>
                <Text style={styles.heading02}>Interactive Developer</Text>
                <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-around'}}>
                <Text style={styles.button01}><Text style={styles.text}>JavaScript</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>node.js</Text></Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity>
                <Text style={styles.heading01}>Technical Support Engineer</Text>
                <Text style={styles.heading02}>bpo</Text>
                <View style={{flexDirection : 'row'}}>
                <Text style={styles.button01}>
                    <Text style={styles.text}>Excellent Communication Skill working ...</Text>
                </Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity>
                <Text style={styles.heading01}>Technical Support Engineer</Text>
                <Text style={styles.heading02}>Excellent understanding of the technical fundamentals of the Internet. You should have..</Text>
                <View style={{flexDirection : 'row'}}>
                <Text style={styles.button01}>
                    <Text style={styles.text}>Excellent Communication Skill working ...</Text>
                </Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity>
                <Text style={styles.heading01}>Software Engineer</Text>
                <Text style={styles.heading02}>The engineer trainee is responsible for managing the data and all the information...</Text>
                <View style={{flexDirection : 'column'}}>
                <Text style={styles.button02}><Text style={styles.text}>Should have above 65% in acadamic</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>good programming language knowlege</Text></Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity>
                <Text style={styles.heading01}>Peoplesoft FSCM</Text>
                <Text style={styles.heading02}>'Qualifications Basic + Bachelor's degree or forign equivalent required from an accredite..</Text>
                <View style={{flexDirection : 'row'}}>
                <Text style={styles.button01}>
                    <Text style={styles.text}>PeopleSoft FSCM</Text>
                </Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity>
                <Text style={styles.heading01}>Page development</Text>
                <Text style={styles.heading02}>4+ years of relevent Page development experience overall experience should be 5+..</Text>
                <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-around'}}>
                <Text style={styles.button01}><Text style={styles.text}>Page</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>CSSA Certification</Text></Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity>
                <Text style={styles.heading01}>.Net Developer</Text>
                <Text style={styles.heading02}>'1. Analyzes business/ functional requirements and prepares development project schedule..</Text>
                <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-around'}}>
                <Text style={styles.button01}><Text style={styles.text}>C#</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>Asp.net</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>HTML5</Text></Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity>
                <Text style={styles.heading01}>Java Developer</Text>
                <Text style={styles.heading02}>'1. Analyzes business/ functional requirements and prepares development project schedule..</Text>
                <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-around'}}>
                <Text style={styles.button01}><Text style={styles.text}>Struts</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>Spring</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>Core java</Text></Text>
                </View>
                </TouchableOpacity>
            </View>

            <View style={[styles.card, styles.elevation]}>
                <TouchableOpacity>
                <Text style={styles.heading01}>SDET</Text>
                <Text style={styles.heading02}>Good programming experience in Core Java 1.5 Performs QA activities for mobile projecys by ..</Text>
                <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-around'}}>
                <Text style={styles.button01}><Text style={styles.text}>Manual Testing</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>Automation Testing</Text></Text>
                <Text style={styles.button01}><Text style={styles.text}>Core java</Text></Text>
                </View>
                </TouchableOpacity>
            </View>

            <Footer />
        </ScrollView>
    </View>
    );
}

const styles =  StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center',
    },

    text02 : {
        color : 'black',
        marginLeft : 40,
        marginTop : 40,
        fontSize : 20,
    },
    background : {
        height : 150,
        width : Dimensions.get('window').width,
        opacity : 0.5,
    },
    text01 : {
        color : 'red',
        marginBottom : '2%',
        textAlign : 'right',
        marginRight : 5,
        fontSize : 15,
        textDecorationLine : 'underline',
    },
    texthead01 : {
        color : 'black',
        fontSize : 30,
        textAlign : 'left',
        marginLeft : '8%',
        marginTop : 10,
    },
    texthead02 : {
        color : 'black',
        fontSize : 18,
        textAlign : 'left',
        marginLeft : '8%',
        marginRight : '8%',
    },
    textinput01 : {
        borderWidth : 1,
        borderColor : 'black',
        marginLeft : 20,
        marginRight : 70,
        borderRadius : 5,
        marginBottom : 30,
    },
    text : {
        color : 'green',
    },
    icon : {
        marginRight : 10,
    },
    heading01 : {  
        fontSize: 18,  
        fontWeight: '600', 
        marginLeft : '8%', 
        marginBottom: '4%', 
        color : 'black',
    },  
    heading02 : {  
        fontSize: 15,  
        fontWeight: '600',  
        marginBottom: '5%', 
        marginLeft : '8%', 
        color : 'gray',
    },
    card: {  
        backgroundColor: 'white',  
        borderRadius: 10,
        borderColor : 'black', 
        paddingVertical: 10,  
        paddingHorizontal: 10,  
        marginLeft : '8%',
        marginRight : '8%',
        marginBottom : '8%',
    },  
    elevation: {  
        shadowColor: 'black',  
        elevation: 10,  
    },
    button01 : {
        backgroundColor : 'lightblue',
        marginLeft : '10%',
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 3,
    },
    button02 : {
        backgroundColor : 'lightblue',
        marginLeft : '10%',
        marginBottom : '5%',
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 3,
    },
})

export default Job_portal;
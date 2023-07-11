import React from "react";
import { View, StyleSheet, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';

import Header from "./Header";
import Footer from "./Footer";
import AssignPanelMember from './AssignPanelMember';

const MoreDetails = ({ route, navigation }) => {

const { jobs } = route.params;


const logout = () =>{
  navigation.navigate('Login')
  }

  const interviewpanel = () =>{
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
                <Text style={styles.text}>Job created on 28th September 2015</Text>
                <Text style={styles.texthead02}>₹ 4000 per panel member</Text>
            </ImageBackground>

            <AssignPanelMember />

            <Text style={styles.texthead}>Job Description</Text>
            <Text style={styles.descriptiontext}>{jobs.description}</Text>
            <View style={styles.line} />
            <Text style={styles.texthead}>Eligibility</Text>
            <Text style={styles.eligibletext}>{jobs.eligibility}</Text>
            <View style={styles.line} />
            <View style={{ flex : 0.5 }}>
                <Text style={styles.texthead}>Skills</Text>
                <View style={{ flexDirection : 'row', justifyContent : 'flex-start', marginLeft : '5%', marginRight : '5%' }}>
                    <Text style={styles.skilltext}>{jobs.skill01}</Text>
                    <Text style={styles.skilltext}>{jobs.skill02}</Text>
                    </View>
                </View>
            <View style={styles.footer}>
            <Footer />
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
    },
    background : {
        height : 150,
        width : Dimensions.get('window').width,
        opacity : 0.5,
    },
    texthead01 : {
        color : 'black',
        fontSize : 22,
        fontWeight : "bold",
        marginLeft : '5%',
        marginRight : '5%',
        marginTop : 10,
    },
    texthead02 : {
        color : 'black',
        fontSize : 18,
        marginLeft : '5%',
        marginRight : '5%',
    },
    text : {
        color : 'black',
        marginLeft : '5%',
    },
    button : {
        backgroundColor : '#5f9ea0',
        alignSelf : 'center',
        marginRight : '8%',
        borderRadius : 5,
        height : '15%'
    },
    texthead : {
        color : 'black',
        fontSize : 20,
        marginLeft : '5%',
    },
    descriptiontext : {
        color : 'black',
        fontSize : 15,
        marginLeft : '5%',
        marginTop : '2%',
        marginRight : '5%',
        textAlign : 'justify',
    },
    eligibletext : {
        color : 'black',
        fontSize : 15,
        marginLeft : '5%',
        marginTop : '2%',
        marginRight : '5%',
        textAlign : 'justify',
    },
    line : {
        borderBottomColor : 'black',
        borderBottomWidth : 1,
        marginLeft : '5%',
        marginRight : '5%',
        marginTop : '5%',
        marginBottom : '5%'
    },
      skilltext : {
        color : 'green',
        backgroundColor : 'lightblue',
        borderRadius : 15,
        marginBottom : '15%',
        padding : 8,
        marginRight : '5%'
      },
      footer : {
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        justifyContent : 'center',
        alignItems : 'center',
      },
      scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120
      },
})

export default MoreDetails;
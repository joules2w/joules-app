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
            <View style={{flexDirection : 'row', width : '80%'}}>
                <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
                </View>
            <ImageBackground style={styles.background} source={require('./Images/background.png')}>
                <Text style={styles.texthead01}>Interview Panel For Interactive Developer</Text>
                <Text style={styles.text}>Job created on 28th September 2015</Text>
                <Text style={styles.texthead02}>₹ 4000 per panel member</Text>
            </ImageBackground>

            <AssignPanelMember />



            <Text style={styles.texthead}>Job Description</Text>
            <Text style={styles.descriptiontext}>{jobs.description}</Text>
            <View style={styles.line} />
            <View style={{ flexDirection : 'row', width : '50%', justifyContent : 'space-between', marginLeft : '7%', marginRight : '8%' }}>
                <View style={{ flexDirection : 'column' }}>
            <Text style={styles.texthead}>Eligibility</Text>
            <Text style={styles.eligibletext}>{jobs.eligibility}</Text>
            {/* </View> */}
            </View>
            <View style={styles.verticleLine}></View>
            <View style = {{ flexDirection : 'column' }}>
            <View style={{ flex : 0.5 }}>
                <Text style={styles.texthead}>Skills</Text>
                <View style={{ flexDirection : 'row', width : '60%', justifyContent : 'space-between', marginLeft : '5%', marginRight : '5%' }}>
                    <View style={{ flex : 0.5 }}>
                    <Text style={styles.skilltext}>{jobs.skill01}</Text>
                    </View>
                    <View style={{ flex : 0.5 }}>
                    <Text style={styles.skilltext}>{jobs.skill02}</Text>
                    </View>
                    </View>
                </View>
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
        marginLeft : '8%',
        marginTop : 10,
    },
    texthead02 : {
        color : 'black',
        fontSize : 18,
        marginLeft : '8%',
        marginRight : '8%',
    },
    text : {
        color : 'black',
        marginLeft : '8%',
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
        marginLeft : '8%',
    },
    descriptiontext : {
        color : 'black',
        fontSize : 15,
        marginLeft : '8%',
        marginTop : '2%',
        marginRight : '10%',
        textAlign : 'justify',
    },
    eligibletext : {
        color : 'black',
        fontSize : 15,
        marginLeft : '5%',
        marginTop : '2%',
        marginRight : '10%',
        textAlign : 'justify',
    },
    line : {
        borderBottomColor : 'black',
        borderBottomWidth : 1,
        marginLeft : '10%',
        marginRight : '10%',
        marginTop : '5%',
        marginBottom : '5%'
    },
    verticleLine: {
        height: '90%',
        width: 1,
        backgroundColor: '#909090',
      },
      skilltext : {
        color : 'black',
        backgroundColor : '#5f9ea0',
        borderRadius : 5,
        marginBottom : '15%',
        padding : 2,
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
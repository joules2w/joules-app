import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { constants } from './StaticJobs';

import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import SideMenu from "./SideMenu";

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

  const renderJobItem = ({ item }) => (
    <View style={[styles.card, styles.elevation]}>
      <Text style={styles.heading01}>{item.title}</Text>
      <Text style={styles.rate}>₹ 500 per panel member</Text>
      <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
      <View style={{flexDirection : 'row', width : '50%'}}>
      <Text style={styles.text}>{item.skills[0]}</Text>
      <Text style={styles.text}>{item.skills[1]}</Text>
      <Text style={styles.text}>{item.skills[2]}</Text>
      <Text style={styles.text}>{item.skills[3]}</Text>
      <Text style={styles.text}>{item.skills[4]}</Text>
      <Text style={styles.text}>{item.skills[5]}</Text>
      </View>
      <TouchableOpacity onPress={() => handleJobPress(item)}>
        <Text style={styles.moredetails}>More details ➤</Text>
      </TouchableOpacity>
    </View>
  );


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
            <ScrollView>
                <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
                <ImageBackground style={styles.background} source={require('./Images/background.png')}>
                    <Text style={styles.texthead01}>Interview Panel</Text>
                    <Text style={styles.texthead02}>Welcome to our Interview Panel page, where you can discover everything you need to know about panel interviews and how to excel in them.</Text>
                </ImageBackground>
                <View style={{flexDirection : 'row', width : '100%', justifyContent : 'center', marginLeft : '5%', marginRight : '5%'}}>
                    <SearchBox />
                    <Filter />
                </View>
                <FlatList scrollEnabled = {false}
                data={constants}
                renderItem={renderJobItem}
                keyExtractor={(item) => item.id.toString()} />
                <Footer />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignContent : 'center',
    },
    background : {
        height : 150,
        width : Dimensions.get('window').width,
        opacity : 0.5,
        marginBottom : '5%',
    },
    texthead01 : {
        color : 'black',
        fontSize : 30,
        textAlign : 'left',
        marginLeft : '5%',
        marginRight : '5%',
        marginTop : 10,
    },
    texthead02 : {
        color : 'black',
        fontSize : 18,
        textAlign : 'justify',
        marginLeft : '5%',
        marginRight : '5%',
    },
    card: {  
        backgroundColor: '#fff',  
        borderRadius: 10,
        borderColor : 'black',
        padding : 5, 
        marginLeft : '5%',
        marginRight : '5%',
        marginBottom : '5%',
    },  
    elevation: {  
        shadowColor: 'black',  
        elevation: 3,  
    },
    heading01 : {  
        fontSize: 18,  
        fontWeight: "bold", 
        marginLeft : '5%', 
        marginRight : '5%',
        color : 'black',
        padding : 5,
    },  
    heading02 : {  
        fontSize: 14,  
        marginLeft : '5%', 
        color : '#808080',
        textAlign : 'justify',
        marginRight : '5%',
        padding : 5,
    },
    rate : {
        fontSize: 15,  
        marginLeft : '5%', 
        color : 'black',
        textAlign : 'justify',
        marginRight : '5%',
        padding : 5,
    },
    price : {
        color : 'black',
        fontSize : 14,
        fontWeight : 'bold',
        marginLeft : '8%',
        marginRight : '8%',
        marginBottom : '4%',
    },
    button01 : {
        backgroundColor : 'lightblue',
        borderRadius : 8,
        paddingVertical : 5,
        margin : '8%',
    },
    button02 : {
        backgroundColor : 'lightblue',
        marginLeft : '10%',
        marginBottom : '5%',
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 3,
    },
    text: {
        color: '#449b93',
        margin: 8,
        backgroundColor : '#e0f9f6',
        padding : 5,
        borderRadius : 15,
    },
    moredetails : {
        color : 'red',
        textAlign : 'right',
        marginRight : '3%',
        textDecorationLine : 'underline',
        fontSize : 15
    }
})

export default InterViewPanel;
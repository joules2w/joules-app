import React from 'react';
import { View, StyleSheet, Text, FlatList, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Header from './Header';
import SearchBox from './SearchBox';
import Footer from './Footer';

const orders = [
  { id : 1, jobid : 101, name : 'Rakshit', email : 'rakshit@gmail.com', mobilenumber : 9876543210, totalexperience : 3 },
  { id : 2, jobid : 102, name : 'Jeevan', email : 'jeevan@gmail.com', mobilenumber : 9865986598, totalexperience : 0 },
  { id : 3, jobid : 103, name : 'Vishwas', email : 'vishwas@gmail.com', mobilenumber : 8585858585, totalexperience : 1 },
  { id : 4, jobid : 104, name : 'Santosh', email : 'santosh@gmail.com', mobilenumber : 9513572584, totalexperience : 9 },
  { id : 5, jobid : 105, name : 'Prajwal', email : 'prajwal@gmail.com', mobilenumber : 8523694173, totalexperience : 6 },
  { id : 6, jobid : 106, name : 'Sharan', email : 'sharan@gmail.com', mobilenumber : 6583241597, totalexperience : 5 }

  ];

const MyReferrals = ({ navigation }) => {

    const renderOrderItem = ({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.id}</Text>
          <Text style={styles.cell}>{item.jobid}</Text>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.email}</Text>
          <Text style={styles.cell}>{item.mobilenumber}</Text>
          <Text style={styles.cell}>{item.totalexperience}</Text>
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
            <View style={{flexDirection : 'row', width : '80%'}}>
                <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
            </View>            
            <ImageBackground style={styles.backgroundimage} source={require('./Images/background.png')}>
                <Text style={styles.texthead01}>My Refarrals</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. Maecenas cursus eget sed semper tellus tristique.</Text>
            </ImageBackground>
            <View style={styles.view}>
                <SearchBox />
            </View>

            <View style={styles.headerRow}>
              <Text style={styles.headerCell}>#</Text>
              <Text style={styles.headerCell}>Job ID</Text>
              <Text style={styles.headerCell}>Applicant Name</Text>
              <Text style={styles.headerCell}>Email ID</Text>
              <Text style={styles.headerCell}>Mobile Number</Text>
              <Text style={styles.headerCell}>Total Experience</Text>
            </View>

            <FlatList scrollEnabled = {false}
              data={orders}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderOrderItem}
            />
            <Footer />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
    },
    view : {
      marginLeft : '5%',
      marginRight : '20%',
      marginTop : '5%',
      marginBottom : '5%',
    },
    texthead01 : {
        color : 'black',
        fontSize : 25,
        marginTop : 10,
        fontWeight : "bold",
        marginLeft : '5%',
    },
    backgroundimage : {
        height : 150,
        width : Dimensions.get('window').width,
        opacity : 0.6,
    },
    text : {
        color : 'black',
        fontSize : 16,
        marginLeft : '5%',
        marginRight : '5%',
        textAlign : 'justify'
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        color : 'black',
        // marginLeft : '3%',
        marginRight : '3%'
      },
      headerCell: {
        flex: 1,
        fontWeight: 'bold',
        color : 'black',
      },
      row: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      cell: {
        flex: 1,
        color : 'black'
      },
})

export default MyReferrals;
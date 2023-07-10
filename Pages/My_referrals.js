import React from 'react';
import { View, StyleSheet, Text, FlatList, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import Header from './Header';
import SearchBox from './SearchBox';
import MenuBar from './SideMenu'

const orders = [
  ];

const MyReferrals = ({ navigation }) => {

    const renderOrderItem = ({ item }) => (
        <View style={styles.row}>
          <Text style={styles.cell}>{item.id}</Text>
          <Text style={styles.cell}>{item.date}</Text>
          <Text style={styles.cell}>{item.customer}</Text>
          <Text style={styles.cell}>{item.total}</Text>
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

    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{flexDirection : 'row', width : '80%'}}>
                <MenuBar interviewpanel={interviewpanel} jobportal={jobportal} sparsh={sparsh} />
                <Header logout={logout} />
            </View>            
            <ImageBackground style={styles.backgroundimage} source={require('./Images/background.png')}>
                <Text style={styles.texthead01}>My Refarrals</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. Maecenas cursus eget sed semper tellus tristique.</Text>
            </ImageBackground>
            <SearchBox />

            <View style={styles.headerRow}>
        <Text style={styles.headerCell}>#</Text>
        <Text style={styles.headerCell}>Job ID</Text>
        <Text style={styles.headerCell}>Applicant Name</Text>
        <Text style={styles.headerCell}>Email ID</Text>
        <Text style={styles.headerCell}>Mobile Number</Text>
        <Text style={styles.headerCell}>Total Experience</Text>
      </View>

      {/* Order List */}
      <FlatList scrollEnabled = {false}
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrderItem}
      />
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
    texthead01 : {
        color : 'black',
        textAlign : 'center',
        fontSize : 20,
        marginTop : 10,
        fontWeight : 'bold',
    },
    backgroundimage : {
        height : 150,
        width : Dimensions.get('window').width,
        opacity : 0.6,
    },
    text : {
        color : 'black',
        marginLeft : '10%',
        marginRight : '10%',
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
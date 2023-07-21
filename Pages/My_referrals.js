import React from 'react';
import { View, StyleSheet, Text, FlatList, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { referrals } from './StaticValues';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Header from './Header';
import SearchBox from './SearchBox';
import Footer from './Footer';

const MyReferrals = ({ navigation }) => {

  const renderOrderItem = ({ item }) => (
    <View style={[styles.card, styles.elevation]}>
      <View style={{ flexDirection : 'row' }}>
        <View>
      <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
        <Text style={styles.kay}>Name : </Text>
        <Text style={styles.value}>{item.name}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
        <Text style={styles.kay}>Job ID : </Text>
        <Text style={styles.value}>{item.jobid}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
        <Text style={styles.kay}>Total Experience : </Text>
        <Text style={styles.value}>{item.totalexperience}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
        <Text style={styles.kay}>Phone Number : </Text>
        <Text style={styles.value}>{item.mobilenumber}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
        <Text style={styles.kay}>Email ID : </Text>
        <Text style={styles.value}>{item.email}</Text>
      </View>
      </View>
      <View style={{ flexDirection : 'column', justifyContent : 'space-around' }}>
        <MaterialIcons name="call" style={styles.icon} />
        <MaterialIcons name="email" style={styles.icon} />
      </View>
      </View>
    </View>
  );

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
        <View style={{ flexDirection: 'row', width: '80%' }}>
          <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
        </View>
        <ImageBackground style={styles.backgroundimage} source={require('./Images/background.jpg')}>
          <Text style={styles.texthead01}>My Refarrals</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. Maecenas cursus eget sed semper tellus tristique.</Text>
        </ImageBackground>
        <View style={styles.view}>
          <SearchBox />
        </View>

        <FlatList scrollEnabled={false}
          data={referrals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderOrderItem}
        />
        <View style={styles.footer}>
          <Footer />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  view: {
    marginLeft: '5%',
    marginRight: '20%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  texthead01: {
    color: 'black',
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: '5%',
  },
  backgroundimage: {
    height: 150,
    width: Dimensions.get('window').width,
    opacity: 0.6,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'justify'
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
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120
  },
  kay: {
    color: '#449B93',
    marginLeft: '5%',
    fontSize: 15,
  },
  value: {
    color: '#808080',
    marginRight: '5%',
    fontSize: 16,
  },
  icon: {
    color: 'black',
    fontSize: 30,
  },
})

export default MyReferrals;
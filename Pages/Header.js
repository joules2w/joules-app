import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions } from 'react-native';

import ProfileScreen from './ProfileScreen';
import SideMenu from './SideMenu';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = (props) => {
    return (
        <View style={styles.header}>
            <View style={styles.adjust}>
            <SideMenu interviewpanel={props.interviewpanel} home={props.home} jobportal={props.jobportal} sparsh={props.sparsh} />
            <Image style={styles.logo} source={require('./Images/logo.png')} />
            </View>
          
            <ProfileScreen logout={props.logout} />
      
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width:windowWidth,
        flexDirection: 'row',
        justifyContent:'space-between'

      },
      adjust:{
        flexDirection:'row',
         
    
      },
      logo: {
        width: 80,
        height: 80,
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 30,
        height: 30,
      },
      profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color : 'black'
      },
})


export default Header;
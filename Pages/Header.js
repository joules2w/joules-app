import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import ProfileScreen from './ProfileScreen';

const Header = (props) => {
    return (
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./Images/logo.png')} />
            {/* <TouchableOpacity> */}
          <View style={styles.profileContainer}>
            {/* <Image style={styles.profileImage} source={require('./Images/profile.png')} /> */}
            {/* <Text style={styles.profileName}>John Doe</Text> */}
            <ProfileScreen logout={props.logout} />
          </View>
         
          {/* </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width : '75%',
        marginLeft : '10%'
      },
      logo: {
        width: 90,
        height: 90,
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
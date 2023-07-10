import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./Images/logo.png')} />
          <TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image style={styles.profileImage} source={require('./Images/profile.png')} />
            <Text style={styles.profileName}>Profile</Text>
          </View>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'70%',
        color:'black',
        marginBottom: 10,
      },
      logo: {
        width: 100,
        height: 100,
        // marginLeft : '10%',
        marginTop: -15,
        marginRight:25,
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 30,
        height: 30,
        marginRight: 5,
      },
      profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight : '8%',
        color:'black',
      },
});


export default Header;




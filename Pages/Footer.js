import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';

const Footer = () => {
  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/');
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/');
  };

  const openTwitter = () => {
    Linking.openURL('https://www.twitter.com/');
  };

  return (
    <View style={styles.footer1}>
      <Text style={styles.footerText}>
        Copyright © 2023 Joulestowatts Business Solutions Pvt. Ltd. 
      </Text>
      <View style={styles.view}>
        <Text style={styles.footerText}>Follow us on : </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={openFacebook}>
            <Icon name='facebook-official' size={25} color='#fff' style={{ marginRight: '10%' }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openInstagram}>
            <Icon name='instagram' size={25} color='#fff' style={{ marginRight: "10%" }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openTwitter}>
            <Icon name='twitter' size={25} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer1: {
    backgroundColor: '#449B93',
    fontWeight: 'bold',
    
  },
  view : {
    flexDirection: 'row', 
    justifyContent: 'flex-start'
  },
  footerText: {
    padding : 10,
    color: 'white',
    fontSize: 15,
    fontWeight: "bold",
    textAlign:"center",
  },
});

export default Footer;

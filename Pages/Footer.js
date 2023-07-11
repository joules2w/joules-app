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
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={styles.footerText}>Follow us on:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={openFacebook}>
            <Icon name='facebook-official' size={25} color='#4267B2' style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openInstagram}>
            <Icon name='instagram' size={25} color='#4267B2' style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openTwitter}>
            <Icon name='twitter' size={25} color='#4267B2' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer1: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#5f9ea0',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginVertical: 8,
    color: 'white',
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Footer;

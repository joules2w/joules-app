import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated, Image } from 'react-native';


const ProfileScreen = ({ logout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animatedValue = new Animated.Value(0);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: isMenuOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [isMenuOpen]);
  
    const opacity = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5],
    });
  
    const menuTranslateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 0],
    });
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <View style={{flexDirection : 'row', width : '50%', justifyContent : 'space-around'}} >
        <Image style={styles.profileImage} source={require('./Images/profile.png')} />
          <Text style = {styles.text}>Profile</Text>
          </View>
        </TouchableOpacity>
  
        <Modal visible={isMenuOpen} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <Animated.View style={[styles.overlay, { opacity }]} />
          </TouchableWithoutFeedback>
  
          <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
              <Text style = {styles.text}>Close Menu</Text>
            </TouchableOpacity>
  
            <Text style = {styles.text}>Edit Profile</Text>
            <TouchableOpacity onPress={logout} >
                <Text style={styles.text}>LogOut</Text>
            </TouchableOpacity>
          </Animated.View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImage: {
        width: 30,
        height: 30,
        marginRight: 5,
      },
    menuButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: 'white',
    },
    overlay: {
      flex: 1,
      backgroundColor: '#000000',
    },
    sideMenu: {
      position: 'absolute',
      top: 0,
      right : 0,
      width: '50%',
      height: '50%',
      backgroundColor: '#ffffff',
      padding: 16,
      borderRadius : 5,
    },
    closeButton: {
      marginBottom: 16,
      padding: 8,
      backgroundColor: 'white',
    },
    text : {
        color : 'black',
        alignContent : 'center'
    },
  });
  
  export default ProfileScreen;
  
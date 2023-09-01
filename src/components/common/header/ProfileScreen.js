import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
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
         
        <Image style={styles.profileImage} source={require('../../../Assets/Images/profile.jpg')} />
          <Text style = {styles.text}>Profile</Text>
         
        </TouchableOpacity>
  
        <Modal visible={isMenuOpen} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <Animated.View style={[styles.overlay, { opacity }]} />
          </TouchableWithoutFeedback>
  
          <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
          <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
            <MaterialIcons name="close" style={styles.icon} />
          </TouchableOpacity>
  
            <Text style = {styles.text}>Edit Profile</Text>
          </Animated.View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems:'flex-end',
      margin:20
    },
    profileImage: {
        width: 30,
        height: 30,
        marginRight:10
      },
    menuButton: {
      backgroundColor: 'white',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
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
    icon: {
      color: 'black',
      fontSize: 30,
    },
    text : {
        color : 'black',
        alignContent : 'center'
    },
  });
  
  export default ProfileScreen;
  
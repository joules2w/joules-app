import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({ interviewpanel, home, sparsh, jobportal, logout }) => {
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
               <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
         <MaterialIcons name="menu" style={styles.icon} />
     </TouchableOpacity>


        </TouchableOpacity>
  
        <Modal visible={isMenuOpen} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <Animated.View style={[styles.overlay, { opacity }]} />
          </TouchableWithoutFeedback>
  
          <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
            <MaterialIcons name="close" style={styles.icon} />
            </TouchableOpacity>
  
            <TouchableOpacity onPress={home}>
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={jobportal}>
            <Text style={styles.text}>Job Portal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={interviewpanel}>
            <Text style={styles.text}>Interview Panel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sparsh}>
            <Text style={styles.text}>Sparsh</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
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
      left : 0,
      width: '50%',
      height: '100%',
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
        alignContent : 'center',
        marginBottom : '5%',
        marginLeft : '5%',
    },
    icon: {
          color: 'black',
          fontSize: 30,
        },
  });
  
  export default ProfileScreen;
  
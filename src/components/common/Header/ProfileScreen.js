import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated, Image } from 'react-native';

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
      {/* Side menu item */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Image style={styles.profileImage} source={require('../../../Assets/Images/profile.jpg')} />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={isMenuOpen} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <Animated.View style={[styles.overlay, { opacity }]} />
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
          <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
            <Text style={styles.text}>Close Menu</Text>
          </TouchableOpacity>

          {/* Contents of the side menu */}
          <Text style={styles.text}>Profile</Text>
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: '5%',
  },
  menuButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  profileImage: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  text: {
    color: '#000000',
    alignContent: 'center'
  },
  overlay: {
    flex: 1,
    backgroundColor: '#000000',
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '50%',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
  },
  closeButton: {
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#ffffff',
  },

});

export default ProfileScreen;

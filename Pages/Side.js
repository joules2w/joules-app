import React from 'react';
import { View, Text, TouchableOpacity, DrawerLayoutAndroid, StyleSheet } from 'react-native';

const SideMenu = () => {
    const openProfileMenu = () => {
      this.drawer.openDrawer();
    };
  
    return (
      <DrawerLayoutAndroid
        ref={(ref) => (this.drawer = ref)}
        drawerWidth={250}
        drawerPosition={'left'}
        renderNavigationView={() => (
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => this.drawer.closeDrawer()}>
              <Text style={styles.text}>Close Menu</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Profile Menu Content</Text>
            <Text style={styles.text}>Home</Text>
          </View>
        )}
      >
        <View style={styles.container}>
          {/* <Text style={styles.text}>Content of Home Screen</Text> */}
          <TouchableOpacity onPress={openProfileMenu}>
            <Text style={styles.text}>Menu</Text>
          </TouchableOpacity>
        </View>
      </DrawerLayoutAndroid>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : 'white',
    },
    text : {
        color : 'black',
      },
    menuContainer: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
  });
  
  export default SideMenu;
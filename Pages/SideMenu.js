// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';


// const SideMenu = ({ interviewpanel, home, sparsh }) => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const animatedValue = new Animated.Value(0);
  
//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//     };
  
//     useEffect(() => {
//       Animated.timing(animatedValue, {
//         toValue: isMenuOpen ? 1 : 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }, [isMenuOpen]);
  
//     const opacity = animatedValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0, 0.5],
//     });
  
//     const menuTranslateX = animatedValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [-300, 0],
//     });
  
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
//           <Text style = {styles.text}>Menu</Text>
//           {/* <FontAwesomeIcon icon={faBars} style={styles.icon} /> */}
//         </TouchableOpacity>
  
//         <Modal visible={isMenuOpen} transparent animationType="fade">
//           <TouchableWithoutFeedback onPress={toggleMenu}>
//             <Animated.View style={[styles.overlay, { opacity }]} />
//           </TouchableWithoutFeedback>
  
//           <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
//             <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
//               <Text style = {styles.text}>Close Menu</Text>
//             </TouchableOpacity>

//             <Text style = {styles.sidetext}>Home</Text>  
//             <TouchableOpacity onPress={home}>
//             <Text style = {styles.sidetext}>Job Portal</Text>
//               </TouchableOpacity>
//             <TouchableOpacity onPress={interviewpanel}>
//             <Text style = {styles.sidetext}>Interview Panel</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={sparsh}>
//             <Text style = {styles.sidetext}>Sparsh</Text>
//             </TouchableOpacity>
//             {/* Add more menu items as needed */}
//           </Animated.View>
//         </Modal>
  
//         {/* Rest of the content of your Home Screen */}
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     menuButton: {
//     //   paddingHorizontal: 16,
//       paddingVertical: 8,
//       backgroundColor: 'white',
//     },
//     overlay: {
//       flex: 1,
//       backgroundColor: '#000000',
//     },
//     sideMenu: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '60%',
//       height: '100%',
//       backgroundColor: '#ffffff',
//       padding: 16,
//       borderRadius : 5,
//     },
//     closeButton: {
//       marginBottom: 16,
//       padding: 8,
//       backgroundColor: 'white',
//     },
//     text : {
//         color : 'black',
//         alignContent : 'center',
//     },
//     sidetext : {
//       color : 'black',
//       alignContent : 'center',
//       marginBottom : 20,
//       marginLeft : '8%',
//     }
//   });
  
//   export default SideMenu;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const SideMenu = ({ interviewpanel, home, sparsh }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const animatedValue = new Animated.Value(0);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     Animated.timing(animatedValue, {
//       toValue: isMenuOpen ? 1 : 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   }, [isMenuOpen]);

//   const opacity = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 0.5],
//   });

//   const menuTranslateX = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-300, 0],
//   });

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
//         <FontAwesomeIcon icon={faBars} style={styles.icon} />
//       </TouchableOpacity>

//       <Modal visible={isMenuOpen} transparent animationType="fade">
//         <TouchableWithoutFeedback onPress={toggleMenu}>
//           <Animated.View style={[styles.overlay, { opacity }]} />
//         </TouchableWithoutFeedback>

//         <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
//           <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
//             <FontAwesomeIcon icon={faTimes} style={styles.icon} />
//           </TouchableOpacity>

//           <TouchableOpacity onPress={home}>
//             <Text style={styles.sidetext}>Home</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={interviewpanel}>
//             <Text style={styles.sidetext}>Job Portal</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={sparsh}>
//             <Text style={styles.sidetext}>Sparsh</Text>
//           </TouchableOpacity>
//           {/* Add more menu items as needed */}
//         </Animated.View>
//       </Modal>

//       {/* Rest of the content of your Home Screen */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   menuButton: {
//     paddingVertical: 8,
//     backgroundColor: 'white',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: '#000000',
//   },
//   sideMenu: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '60%',
//     height: '100%',
//     backgroundColor: '#ffffff',
//     padding: 16,
//     borderRadius: 5,
//   },
//   closeButton: {
//     marginBottom: 16,
//     padding: 8,
//     backgroundColor: 'white',
//   },
//   icon: {
//     fontSize: 24,
//     color: 'black',
//   },
//   sidetext: {
//     color: 'black',
//     marginBottom: 20,
//     marginLeft: '8%',
//   },
// });

// export default SideMenu;

  



// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Sparsh from './Sparsh';
// const Drawer = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const DrawerContent = ({ navigation }) => {
//     const closeDrawer = () => {
//       navigation.closeDrawer();
//       setIsDrawerOpen(false);
//     };

//     return (
//       <View style={styles.drawerContainer}>
//         <Text style={styles.drawerTitle}>Drawer Content</Text>
//         <TouchableOpacity onPress={closeDrawer} style={styles.drawerCloseButton}>
//           <Text style={styles.drawerCloseButtonText}>Close Drawer</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const DrawerNavigator = createDrawerNavigator();

//   return (
//     <DrawerNavigator.Navigator
//       drawerContent={props => <DrawerContent {...props} />}
//       drawerStyle={styles.drawer}
//       overlayColor="transparent"
//       open={isDrawerOpen}
//       onOpen={() => setIsDrawerOpen(true)}
//       onClose={() => setIsDrawerOpen(false)}
//     >
//       <Sparsh/>
//     </DrawerNavigator.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   drawerContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   drawerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   drawerCloseButton: {
//     padding: 10,
//     backgroundColor: '#ccc',
//     borderRadius: 5,
//   },
//   drawerCloseButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   drawer: {
//     backgroundColor: '#fff',
//     width: 200,
//   },
// });

// export default Drawer;
// // export default Sparsh;





// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// // import Sparsh from './Sparsh';

// const SideMenu = ({ interviewpanel, home, sparsh }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const animatedValue = new Animated.Value(0);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     Animated.timing(animatedValue, {
//       toValue: isMenuOpen ? 1 : 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   }, [isMenuOpen]);

//   const opacity = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 0.5],
//   });

//   const menuTranslateX = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: [-300, 0],
//   });

//   const DrawerContent = ({ navigation }) => {
//     const closeDrawer = () => {
//       navigation.closeDrawer();
//       setIsMenuOpen(false);
//     };

//     return (
//       <View style={styles.drawerContainer}>
//         <TouchableOpacity onPress={closeDrawer} style={styles.drawerCloseButton}>
//           <Text style={styles.drawerCloseButtonText}>Close Drawer</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={home}>
//           <Text style={styles.drawerItem}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={interviewpanel}>
//           <Text style={styles.drawerItem}>Interview Panel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={sparsh}>
//           <Text style={styles.drawerItem}>Sparsh</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const DrawerNavigator = createDrawerNavigator();

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
//         <Text style={styles.text}>Menu</Text>
//       </TouchableOpacity>

//       <Modal visible={isMenuOpen} transparent animationType="fade">
//         <TouchableWithoutFeedback onPress={toggleMenu}>
//           <Animated.View style={[styles.overlay, { opacity }]} />
//         </TouchableWithoutFeedback>

//         <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
//           <DrawerNavigator.Navigator
//             drawerContent={props => <DrawerContent {...props} />}
//             drawerStyle={styles.drawer}
//             overlayColor="transparent"
//             open={isMenuOpen}
//             onOpen={() => setIsMenuOpen(true)}
//             onClose={() => setIsMenuOpen(false)}
//           >
//             <DrawerNavigator.Screen name="Sparsh" component={Sparsh} />
//           </DrawerNavigator.Navigator>
//         </Animated.View>
//       </Modal>

//       {/* Rest of the content of your Home Screen */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   menuButton: {
//     paddingVertical: 8,
//     backgroundColor: 'white',
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: '#000000',
//   },
//   sideMenu: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '60%',
//     height: '100%',
//    backgroundColor: '#ffffff',
//     padding: 16,
//     borderRadius: 5,
//   },
//   drawerContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   drawerCloseButton: {
//     marginBottom: 16,
//     padding: 8,
//     backgroundColor: 'white',
//   },
//   drawerCloseButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   drawerItem: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   drawer: {
//     backgroundColor: '#fff',
//     width: 200,
//   },
// });

// export default SideMenu;





import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, Animated } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Job_portal from './Job_PortalScreen';

const SideMenu = ({ interviewpanel, home, sparsh,Job_portal }) => {
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
        <MaterialIcons name="menu" style={styles.icon} />
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
            <Text style={styles.sidetext}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Job_portal}>
            <Text style={styles.sidetext}>Job Portal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={interviewpanel}>
            <Text style={styles.sidetext}>interviewpanel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sparsh}>
            <Text style={styles.sidetext}>Sparsh</Text>
          </TouchableOpacity>
          
          {/* Add more menu items as needed */}
        </Animated.View>
      </Modal>

      {/* Rest of the content of your Home Screen */}
    </View>
  );
};

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
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
    left: 0,
    width: '60%',
    height: '100%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 5,
  },
  closeButton: {
    marginBottom: 16,
    padding: 8,
    backgroundColor: 'white',
  },
  sidetext: {
    color: 'black',
    alignContent: 'center',
    marginBottom: 20,
    marginLeft: '8%',
  },
  icon: {
    color: 'black',
    fontSize: 24,
  },
});

export default SideMenu;

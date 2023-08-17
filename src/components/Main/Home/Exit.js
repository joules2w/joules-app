import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, BackHandler, Alert } from 'react-native';

import Header from '../../common/Header/Header';
import Footer from '../../common/Footer';

const Exit = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Confirm", "Are you sure you want to go back?", [
        {
          text: "No",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            // Navigate back
            navigation.goBack();
          }
        }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      {/* Rest of your JSX */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles
});

export default Exit;

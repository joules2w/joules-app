import React from 'react';
import { View, StyleSheet, FlatList, ScrollView, Text } from 'react-native';
import { constants } from './Constant'

const Other = () => {

  const frequentJobItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.description}</Text>
    </View>
);

  return (
    <View style={styles.container}>
      <ScrollView>
      <FlatList scrollEnabled={false}
                    data={constants}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={frequentJobItem} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
  },
  text : {
    color : 'black',
  }
})

export default Other;

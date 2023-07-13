import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { jobs } from './Jobs';

const JobsListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.jobItemContainer}
        onPress={() => navigation.navigate('JobDetails', { jobs })}
      >
        <Text style={styles.jobItemTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  jobItemContainer: {
    backgroundColor: '#5f9ea0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
  },
  jobItemTitle: {
    fontSize: 16,
    color : 'black',
  },
});

export default JobsListScreen;

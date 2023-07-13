import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
  

const JobDetailsScreen = ({ route }) => {
  const { jobs } = route.params;

  const renderSkillItem = ({ item }) => {
    // return (
      <View style={styles.skillContainer}>
        <Text style={styles.skillText}>{item}</Text>
      </View>
    // );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{jobs.title}</Text>
      <Text style={styles.description}>{jobs.description}</Text>
      <FlatList
        data={jobs}
        renderItem={renderSkillItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.skillsContainer}
        numColumns={2}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    marginBottom: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  skillContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 14,
    color : 'black'
  },
});

export default JobDetailsScreen;

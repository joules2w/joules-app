import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import staticJobs from './StaticJobs01';

const Home = () => {
  const renderSkillItem = ({ item }) => {
    return (
      <View style={styles.skillContainer}>
        <Text style={styles.skillText}>{item}</Text>
      </View>
    );
  };

  const renderJobCard = ({ item }) => {
    return (
      <View style={styles.jobCard}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <FlatList
          data={item.skills}
          renderItem={renderSkillItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}
          numColumns={2}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={staticJobs}
        renderItem={renderJobCard}
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
  jobCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  // skillsContainer: {
    
  // },
  skillContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
    width: '48%',
  },
  skillText: {
    fontSize: 14,
  },
});

export default Home;

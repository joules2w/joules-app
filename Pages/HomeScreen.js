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
    const skillsToShow = item.skills.slice(0, 3);
    const remainingSkillsCount = item.skills.length - 3;

    return (
      <View style={styles.jobCard}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <View style={styles.skillsContainer}>
          {skillsToShow.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
          {remainingSkillsCount > 0 && (
            <View style={styles.remainingSkills}>
              <Text style={styles.remainingSkillsText}>+{remainingSkillsCount} more</Text>
            </View>
          )}
        </View>
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
    padding: 16,
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    marginRight: 8,
    maxWidth: '48%',
  },
  skillText: {
    fontSize: 14,
  },
  remainingSkills: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  remainingSkillsText: {
    fontSize: 14,
    color: 'blue',
  },
});

export default Home;

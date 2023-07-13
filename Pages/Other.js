import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'React Native',
  'Node.js',
  'Express.js',
  'MongoDBMongoDBMongoDBMongoDB',
  'SQL',
  'Python',
  'Java',
  'C++',
  'Ruby',
  'Swift',
  'Git',
  'AWS',
];

// const PAGE_SIZE = 10; // Number of skills to display per page
const NUM_COLUMNS = 2; // Number of columns in each row

const SkillsPage = ({ skills }) => {
  return (
    <View style={styles.page}>
      <FlatList
        data={skills}
        keyExtractor={(item) => item}
        numColumns={NUM_COLUMNS}
        renderItem={({ item }) => (
          <View style={styles.skillContainer}>
            <Text style={styles.skillText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const SkillsScreen = () => {
  const totalPages = Math.ceil(skills.length);
  const pages = Array.from({ length: totalPages }, (_, index) => {
    // const start = index * PAGE_SIZE;
    // const end = start + PAGE_SIZE;
    return skills.slice();
  });

  return (
    <ScrollView horizontal pagingEnabled>
      {pages.map((page, index) => (
        <SkillsPage key={index} skills={page} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  skillContainer: {
    width: '45%',
    marginBottom: 8,
  },
  skillText: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    textAlign: 'center',
  },
});

export default SkillsScreen;

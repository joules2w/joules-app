import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const staticValues = [
    { id: 1, title: 'Item 1', priority: 'High' },
    { id: 2, title: 'Item 2', priority: 'Low' },
    { id: 3, title: 'Item 3', priority: 'Medium' },
    { id: 4, title: 'Item 4', priority: 'High' },
    { id: 5, title: 'Item 5', priority: 'Medium' },
    // ... more static values
  ];

  const getFilteredData = (priority) => {
    if (priority === 'All') {
      return staticValues;
    }
    return staticValues.filter((item) => item.priority === priority);
  };

  const renderCard = ({ item }) => {
    let textColor = 'black';

    if (item.priority === 'High') {
      textColor = 'green';
    } else if (item.priority === 'Medium') {
      textColor = 'blue';
    } else if (item.priority === 'Low') {
      textColor = 'red';
    }

    return (
      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: textColor }]}>
          {item.title}
        </Text>
        <Text style={styles.cardPriority}>{item.priority}</Text>
      </View>
    );
  };

  const renderTabContent = () => {
    const filteredData = getFilteredData(selectedTab);
    return (
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text
          style={[
            styles.tab,
            selectedTab === 'All' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('All')}
        >
          All
        </Text>
        <Text
          style={[
            styles.tab,
            selectedTab === 'Low' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Low')}
        >
          Low
        </Text>
        <Text
          style={[
            styles.tab,
            selectedTab === 'Medium' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('Medium')}
        >
          Medium
        </Text>
        <Text
          style={[
            styles.tab,
            selectedTab === 'High' && styles.activeTab,
          ]}
          onPress={() => setSelectedTab('High')}
        >
          High
        </Text>
      </View>
      <View style={styles.contentContainer}>
        {renderTabContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  tab: {
    marginRight: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  activeTab: {
    backgroundColor: 'blue', // Customize the active tab color as desired
    color: '#fff', // Customize the active tab text color as desired
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardPriority: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]}
          onPress={() => handleTabPress('Tab1')}
        >
          <Text style={styles.tabText}>Tab 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]}
          onPress={() => handleTabPress('Tab2')}
        >
          <Text style={styles.tabText}>Tab 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Tab3' && styles.activeTab]}
          onPress={() => handleTabPress('Tab3')}
        >
          <Text style={styles.tabText}>Tab 3</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Tab1' && (
        <View>
          <Text style={styles.text}>Content for Tab 1, Content for Tab 1, Content for Tab 1</Text>
        </View>
      )}
      {activeTab === 'Tab2' && (
        <View>
          <Text style={styles.text}>Content for Tab 2</Text>
        </View>
      )}
      {activeTab === 'Tab3' && (
        <View>
          <Text style={styles.text}>Content for Tab 3</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#808080',
  },
  activeTab: {
    backgroundColor: 'red',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color : 'black',
  },
  text : {
    color : 'green',
  }
});

export default TabNavigation;

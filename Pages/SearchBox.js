import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBox = () => {
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = (text) => {
      setSearchText(text);
      // Perform search or filter logic here
    };
  
    return (
      <View style={styles.container}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearch} placeholderTextColor={'gray'}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor : 'white',
    },
    searchIcon: {
      marginRight: 8,
    },
    input: {
    //   flex: 1,
      color : 'black',
      borderWidth : 1,
      borderRadius : 5,
      width : '70%',
      height : 40,
    },
  });

  export default SearchBox;
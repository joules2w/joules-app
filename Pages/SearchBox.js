import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBox = ({ searchQuery, onSearch }) => {
  const [query, setQuery] = useState(searchQuery || '');

  const handleSearch = (text) => {
    setQuery(text);
    onSearch(text); // Call the onSearch prop with the updated text
  };

  useEffect(() => {
    // Reset the search query when the component is re-rendered
    setQuery(searchQuery);
  }, [searchQuery]);

  
    return (
      <View style={styles.container}>
        <View style={styles.view}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search "
          placeholderTextColor={'#808080'}
          value={query}
          onChangeText={handleSearch} 
        />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      justifyContent : 'center',
    },
    searchIcon: {
      marginRight: 10,
    },
    view : {
      flexDirection : 'row',
      alignItems : 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    input: {
      flex : 1,
      height : 50,
      color : '#000000',
    },
  });

  export default SearchBox;
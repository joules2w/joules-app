import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBox = () => {
    const [searchText, setSearchText] = useState('');
  
    const handleSearch = (text) => {
      setSearchText(text);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.view}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search "
          value={searchText}
          onChangeText={handleSearch} placeholderTextColor={'gray'}
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
    },
  });

  export default SearchBox;
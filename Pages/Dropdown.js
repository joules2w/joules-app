import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';




const ModalDropdown = () => {

  const MainOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  
  const SubOptions = [
    { label: 'Suboption 1', value: 'suboption1' },
    { label: 'Suboption 2', value: 'suboption2' },
    { label: 'Suboption 3', value: 'suboption3' },
  ];
  
  const SubSubOptions = [
    { label: 'Sub-Suboption 1', value: 'subsuboption1' },
    { label: 'Sub-Suboption 2', value: 'subsuboption2' },
    { label: 'Sub-Suboption 3', value: 'subsuboption3' },
  ];

  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onSearchInputChange = (text) => {
    setSearchInput(text);
    // Add your search logic here
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={searchInput}
              onChangeText={onSearchInputChange}
            />
          </View>
          <DropDownPicker
            items={MainOptions}
            placeholder="Select Main Option"
            searchable={true}
            searchablePlaceholder="Search..."
            searchablePlaceholderTextColor="gray"
            containerStyle={styles.dropdownContainer}
          />
          <DropDownPicker
            items={SubOptions}
            placeholder="Select Sub Option"
            searchable={true}
            searchablePlaceholder="Search..."
            searchablePlaceholderTextColor="gray"
            containerStyle={styles.dropdownContainer}
          />
          <DropDownPicker
            items={SubSubOptions}
            placeholder="Select Sub-Sub Option"
            searchable={true}
            searchablePlaceholder="Search..."
            searchablePlaceholderTextColor="gray"
            containerStyle={styles.dropdownContainer}
          />
          <Button title="Close Modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default ModalDropdown;
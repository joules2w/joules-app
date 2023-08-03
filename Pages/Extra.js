import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import CheckBox from 'react-native-check-box';

const MultipleSelection = ({ onSelectionConfirmed }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const data = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    // Add more items as needed
  ];

  const handleItemToggle = (item) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(selectedItems.filter((id) => id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item.id]);
    }
  };

  const handleSelectionConfirm = () => {
    setModalVisible(false);
    if (typeof onSelectionConfirmed === 'function') {
      onSelectionConfirmed(selectedItems);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Select</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {data.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => handleItemToggle(item)}>
                <View style={styles.itemContainer}>
                  <CheckBox
                    isChecked={selectedItems.includes(item.id)}
                    onClick={() => handleItemToggle(item)}
                    checkBoxColor="black"
                    checkedCheckBoxColor="black"
                  />
                  <Text style={styles.label}>{item.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={handleSelectionConfirm}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    width: '80%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
    color : '#000000'
  },
});

export default MultipleSelection;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Others = () => {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);

  const showContextMenu = () => {
    setContextMenuVisible(true);
  };

  const hideContextMenu = () => {
    setContextMenuVisible(false);
  };

  const handleAscendingOrder = () => {
    // Function to handle ordering by ascending
    hideContextMenu();
  };

  const handleDescendingOrder = () => {
    // Function to handle ordering by descending
    hideContextMenu();
  };

  const handleHideColumn = () => {
    // Function to handle hiding column
    hideContextMenu();
  };

  const handleShowColumn = () => {
    // Function to handle showing column
    hideContextMenu();
  };

  const renderColumn = (columnName, columnContent) => {
    return (
      <View style={styles.column}>
        <View style={styles.columnHeader}>
          <Text style={styles.columnName}>{columnName}</Text>
          <TouchableOpacity onPress={showContextMenu}>
            <Ionicons name="ellipsis-vertical" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <Text style={styles.columnContent}>{columnContent}</Text>
        <Modal visible={isContextMenuVisible} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.contextMenu}>
              <TouchableOpacity onPress={handleAscendingOrder}>
                <Text>Order by Ascending</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDescendingOrder}>
                <Text>Order by Descending</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleHideColumn}>
                <Text>Hide Column</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleShowColumn}>
                <Text>Show Column</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderColumn('Column 1', 'Content 1')}
        {renderColumn('Column 2', 'Content 2')}
        {renderColumn('Column 3', 'Content 3')}
      </View>
      {/* Render other rows */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color : 'black',
  },
  column: {
    flex: 1,
    marginRight: 10,
    color : 'black',
  },
  columnHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    color : 'black',
  },
  columnName: {
    flex: 1,
    fontWeight: 'bold',
    color : 'black',
  },
  columnContent: {
    marginBottom: 5,
    color : 'black',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    color : 'black',
  },
  contextMenu: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    color : 'black',
  },
});

export default Others;
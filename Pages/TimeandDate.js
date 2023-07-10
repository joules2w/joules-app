import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const YourComponent = () => {
  const [isFromTimePickerVisible, setIsFromTimePickerVisible] = useState(false);
  const [isToTimePickerVisible, setIsToTimePickerVisible] = useState(false);
  const [selectedFromTime, setSelectedFromTime] = useState('');
  const [selectedToTime, setSelectedToTime] = useState('');

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showFromTimePicker = () => {
    setIsFromTimePickerVisible(true);
  };

  const hideFromTimePicker = () => {
    setIsFromTimePickerVisible(false);
  };

  const showToTimePicker = () => {
    setIsToTimePickerVisible(true);
  };

  const hideToTimePicker = () => {
    setIsToTimePickerVisible(false);
  };

  const handleFromTimeConfirm = (date) => {
    setSelectedFromTime(moment(date).format('HH:mm'));
    hideFromTimePicker();
  };

  const handleToTimeConfirm = (date) => {
    const selectedTime = moment(date);
    const fromTime = moment(selectedFromTime, 'HH:mm');
    if (selectedTime.isAfter(fromTime)) {
      setSelectedToTime(selectedTime.format('HH:mm'));
    } else {
        Alert.alert("To time must be after the from time");
      // Show an error or display a message indicating that the "to" time must not be earlier than the "from" time
    }
    hideToTimePicker();
  };

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  return (
    <View style={styles.container}>

<TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>

      {selectedDate !== '' && (
        <Text style={styles.text}>Selected Date: {selectedDate}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={showFromTimePicker}>
        <Text style={styles.buttonText}>Select From Time</Text>
      </TouchableOpacity>

      {selectedFromTime !== '' && (
        <Text style={styles.text}>Selected From Time: {selectedFromTime}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={showToTimePicker}>
        <Text style={styles.buttonText}>Select To Time</Text>
      </TouchableOpacity>

      {selectedToTime !== '' && (
        <Text style={styles.text}>Selected To Time: {selectedToTime}</Text>
      )}

<Modal isVisible={isDatePickerVisible} onBackdropPress={hideDatePicker}>
        <View style={styles.modalContainer}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </Modal>

      <Modal isVisible={isFromTimePickerVisible} onBackdropPress={hideFromTimePicker}>
        <View style={styles.modalContainer}>
          <DateTimePickerModal
            isVisible={isFromTimePickerVisible}
            mode="time"
            onConfirm={handleFromTimeConfirm}
            onCancel={hideFromTimePicker}
          />
        </View>
      </Modal>

      <Modal isVisible={isToTimePickerVisible} onBackdropPress={hideToTimePicker}>
        <View style={styles.modalContainer}>
          <DateTimePickerModal
            isVisible={isToTimePickerVisible}
            mode="time"
            onConfirm={handleToTimeConfirm}
            onCancel={hideToTimePicker}
          />
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
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor : 'gray',
  },
  text : {
    color : 'black',
  },
}
)
export default YourComponent;

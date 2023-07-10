import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, TouchableWithoutFeedback, Animated } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const SideMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animatedValue = new Animated.Value(0);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: isMenuOpen ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [isMenuOpen]);
  
    const opacity = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5],
    });
  
    const menuTranslateX = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 0],
    });

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [manualDate, setManualDate] = useState('');

  const [isFromTimePickerVisible, setFromTimePickerVisible] = useState(false);
  const [selectedFromTime, setSelectedFromTime] = useState(null);
  const [manualFromTime, setManualFromTime] = useState('');

  const showFromTimePicker = () => {
    setFromTimePickerVisible(true);
  };

  const hideFromTimePicker = () => {
    setFromTimePickerVisible(false);
  };

  const handleFromTimeConfirm = (time) => {
    setSelectedFromTime(time);
    setManualFromTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    hideFromTimePicker();
  };

  const handleManualFromTimeInput = () => {
    const timeParts = manualFromTime.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);

    if (!isNaN(time.getTime())) {
      setSelectedFromTime(time);
    }
  };


  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setManualDate(date.toISOString().split('T')[0]);
    hideDatePicker();
  };

  const handleManualDateInput = () => {
    const dateParts = manualDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month, day);

    if (!isNaN(date.getTime())) {
      setSelectedDate(date);
    }
  };


  const [isToTimePickerVisible, setToTimePickerVisible] = useState(false);
  const [selectedToTime, setSelectedToTime] = useState(null);
  const [manualToTime, setManualToTime] = useState('');

  const showToTimePicker = () => {
    setToTimePickerVisible(true);
  };

  const hideToTimePicker = () => {
    setToTimePickerVisible(false);
  };

  const handleToTimeConfirm = (time) => {
    setSelectedToTime(time);
    setManualToTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    hideToTimePicker();
  };

  const handleManualToTimeInput = () => {
    const timeParts = manualToTime.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);

    if (!isNaN(time.getTime())) {
      setSelectedToTime(time);
    }
  };

  
    return (
      <View style={styles.container}>
        
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style = {styles.text}>Assign As Panel Member</Text>
        </TouchableOpacity>
  
        <Modal visible={isMenuOpen} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <Animated.View style={[styles.overlay, { opacity }]} />
          </TouchableWithoutFeedback>
  
          <Animated.View style={[styles.sideMenu, { transform: [{ translateX: menuTranslateX }] }]}>
            <View style={{ flexDirection : 'row', justifyContent : 'space-between' }}>
              <Text style={styles.heading}>Select Your Availability</Text>
            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
              <Text style = {styles.closetext}>Cancel</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
            <View style={{flexDirection : 'column'}}>
            <Text style={styles.texthead}>Select Date</Text>
              <View style={{flexDirection : 'row', width : '90%', justifyContent : 'space-around'}}>
        <TextInput
          style={styles.manualInput}
          placeholder="Date (YYYY-MM-DD)"
          placeholderTextColor={'black'}
          value={manualDate}
          onChangeText={setManualDate}
          onBlur={handleManualDateInput}></TextInput>

        <TouchableOpacity style={styles.pickButton} onPress={showDatePicker}>
          <Text style={styles.pickButtonText}>Date</Text>
        </TouchableOpacity>
        </View>

        <View style={{ flexDirection : 'row', width : '65%', justifyContent : 'space-between' }}>
        <View style={{ flexDirection : 'column' }}>
        <Text style={styles.texthead}>Select From Time</Text>
        <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-evenly'}}>
        <TextInput
          style={styles.manualInput}
          placeholder="00:00"
          placeholderTextColor={'black'}
          value={manualFromTime}
          onChangeText={setManualFromTime}
          onBlur={handleManualFromTimeInput}
        />

        <TouchableOpacity style={styles.pickButton} onPress={showFromTimePicker}>
          <Text style={styles.pickButtonText}>Time</Text>
        </TouchableOpacity>
        </View>
        </View>

        <View style={{ flexDirection : 'column' }}>
        <Text style={styles.texthead}>Select To Time</Text>
        <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-evenly'}}>
        <TextInput
          style={styles.manualInput}
          placeholder="00:00"
          placeholderTextColor={'black'}
          value={manualToTime}
          onChangeText={setManualToTime}
          onBlur={handleManualToTimeInput}
        />

        <TouchableOpacity style={styles.pickButton} onPress={showToTimePicker}>
          <Text style={styles.pickButtonText}>Time</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={toggleMenu}>
        <Text style={styles.text}>Schedule Appointment</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

<DateTimePickerModal
        isVisible={isFromTimePickerVisible}
        mode="time"
        onConfirm={handleFromTimeConfirm}
        onCancel={hideFromTimePicker}
      />

<DateTimePickerModal
        isVisible={isToTimePickerVisible}
        mode="time"
        onConfirm={handleToTimeConfirm}
        onCancel={hideToTimePicker}
      />

            
          </Animated.View>
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
    menuButton: {
      padding : 8,
      backgroundColor: 'green',
      borderRadius : 5,
    },
    overlay: {
      flex: 1,
      backgroundColor: '#000000',
    },
    sideMenu: {
      position: 'absolute',
      top: '30%',
      width: '80%',
      height: '50%',
      backgroundColor: '#ffffff',
      padding: 16,
      borderRadius : 5,
      alignSelf : 'center',
    },
    heading : {
      color : 'gray',
      // fontWeight : 'bold',
      fontSize : 18,
    },
    closetext : {
      color : 'black',
    },
    texthead : {
      color : 'black',
      fontWeight : 'bold',
      marginTop : '10%',
    },
    text : {
        color : '#fff',
        alignContent : 'center',
    },
    sidetext : {
      color : 'black',
      alignContent : 'center',
      marginBottom : 20,
      marginLeft : '8%',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    manualInput: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      padding: 8,
      // flex: 1,
      color : 'black',
      alignSelf : 'center',
    },
    pickButton: {
      backgroundColor: 'blue',
      padding: 5,
      borderRadius: 4,
      alignSelf : 'center',
      marginLeft : '5%'
    },
    pickButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
      selectedTimeText: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: 'bold',
      color : 'black',
    },
    button : {
      backgroundColor : '#5f9ea0',
      alignSelf : 'center',
      padding : 10,
      borderRadius : 5,
      marginTop : '10%',
    }
  });
  
  export default SideMenu;
  
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Filter = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [experienceRange, setExperienceRange] = useState([0, 15]);
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [location, setLocation] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const resetFilter = () => {
    setExperienceRange([0, 15]);
    setSalaryRange([0, 100]);
    setLocation('');
  };

  const formatSalaryValue = (value) => {
    if (value === 0) {
      return '10k';
    } else if (value === 100) {
      return '10cr';
    } else {
      const salary = (value / 100) * 100000000; // Convert percentage to salary range
      return `${salary} - ${salary + 10000000}`;
    }
  };

  const formatExperienceValue = (value) => {
    return `${value} years`;
  };

  const handleApplyFilter = () => {
    // Apply the filter based on the selected values
    console.log('Experience Range:', experienceRange);
    console.log('Salary Range:', salaryRange);
    console.log('Location:', location);

    // Close the modal
    toggleModal();
  };

  const handleModalClose = () => {
    if (isModalVisible) {
      toggleModal();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={styles.modalBackdrop}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                  <Text style={styles.texthead01}>FilterBy</Text>
                  <TouchableOpacity onPress={resetFilter}>
                    <Text style={styles.reset}>Reset</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.texthead}>Experience</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{formatExperienceValue(experienceRange[0])}</Text>
                  <Text>{formatExperienceValue(experienceRange[1])}</Text>
                </View>
                <MultiSlider
                  values={experienceRange}
                  min={0}
                  max={15}
                  step={1}
                  allowOverlap={false}
                  snapped
                  sliderLength={200}
                  onValuesChange={(values) => setExperienceRange(values)}
                  minMarkerOverlapDistance={10}
                  customMarkerLeft={(e) => {
                    return <View />;
                  }}
                  customMarkerRight={(e) => {
                    return <View />;
                  }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>From: {experienceRange[0]}</Text>
                  <Text>To: {experienceRange[1]}</Text>
                </View>

                <Text style={styles.texthead}>Salary</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{formatSalaryValue(salaryRange[0])}</Text>
                  <Text>{formatSalaryValue(salaryRange[1])}</Text>
                </View>
                <MultiSlider
                  values={salaryRange}
                  min={0}
                  max={100}
                  step={1}
                  allowOverlap={false}
                  snapped
                  sliderLength={200}
                  onValuesChange={(values) => setSalaryRange(values)}
                  minMarkerOverlapDistance={10}
                  customMarkerLeft={(e) => {
                    return <View />;
                  }}
                  customMarkerRight={(e) => {
                    return <View />;
                  }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>From: {salaryRange[0]}</Text>
                  <Text>To: {salaryRange[1]}</Text>
                </View>

                <Text style={styles.texthead}>Location</Text>
                <TextInput
                  style={styles.textinput}
                  placeholder="Enter location"
                  placeholderTextColor="gray"
                  value={location}
                  onChangeText={setLocation}
                />

                <TouchableOpacity style={styles.filterbutton} onPress={handleApplyFilter}>
                  <Text style={{color:'#fff'}}>Apply Filter</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
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
  filterButton: {
    padding: 10,
    borderRadius: 5,
  },
  filterButtonText: {
    color: 'green',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '70%',
    marginHorizontal: '4%',
  },
  texthead: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  texthead01: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    color: 'black',
  },
  filterbutton: {
    backgroundColor: '#5F9EA0',
    color: 'black',
    width: '45%',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 5,
    // justifyContent:'center'
    height: 30,
    // placeholderTextColor:'#fff'
  },
  reset: {
    color: 'red',
  },
});

export default Filter;
























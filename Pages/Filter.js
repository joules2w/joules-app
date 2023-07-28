import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Filter = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [experienceRange, setExperienceRange] = useState([0, 30]);
  const [salaryRange, setSalaryRange] = useState([0, 200]);
  const [location, setLocation] = useState('');
  const [salaryText, setSalaryText] = useState('');

  const formatSalary = (value) => {
    const crore = Math.floor(value / 10000000);
    const lakh = Math.floor((value - crore * 10000000) / 100000);
    const thousand = Math.floor((value - crore * 10000000 - lakh * 100000) / 1000);

    let formattedSalary = '';
    if (crore > 0) {
      formattedSalary += crore + ' Cr ';
    }
    if (lakh > 0) {
      formattedSalary += lakh + ' Lakh ';
    }
    if (thousand > 0) {
      formattedSalary += thousand + ' Thousand ';
    }
    return formattedSalary.trim();
  };

  const handleFilter = () => {
    console.log('Experience Range:', experienceRange);
    console.log('Salary Range:', salaryRange);
    console.log('Location:', location);

    // Close the modal
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleExperienceChange = (values) => {
    setJobExperience({ jobExperienceFrom: values[0], jobExperienceTo: values[1] });
  };

  const handleSalaryChange = (values) => {
    setSalaryRange(values);
    const formattedMinSalary = formatSalary(values[0] * 100000);
    const formattedMaxSalary = formatSalary(values[1] * 100000);
    const formattedSalary = `${formattedMinSalary} - ${formattedMaxSalary}`;
    setSalaryText(formattedSalary);
  };

  const resetFilter = () => {
    setExperienceRange([0, 30]);
    setSalaryRange([0, 200]);
    setLocation('');
      };

      const formatExperienceValue = (value) => {
        return `${value} years`;
      };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <View style={{ flexDirection : 'row', justifyContent : 'space-between', width : '100%' }}>
             <Text style={styles.texthead01}>FilterBy</Text>
             <TouchableOpacity onPress={resetFilter}>
               <Text style={styles.reset}>Reset</Text>
              </TouchableOpacity>
           </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.texthead}>
                Experience : ({experienceRange[0]} years to {experienceRange[1]} years)
              </Text>
              <MultiSlider
                containerStyle={styles.slider}
                markerStyle={styles.marker}
                pressedMarkerStyle={styles.pressedMarker}
                trackStyle={styles.track}
                selectedStyle={styles.selectedTrack}
                values={experienceRange}
                sliderLength={200}
                onValuesChange={handleExperienceChange}
                min={0}
                max={30}
                step={1}
                allowOverlap
                snapped
              />
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.texthead}>
                Salary Range: ({salaryRange[0]} to {salaryRange[1]})
              </Text>
              <MultiSlider
                containerStyle={styles.slider}
                markerStyle={styles.marker}
                pressedMarkerStyle={styles.pressedMarker}
                trackStyle={styles.track}
                selectedStyle={styles.selectedTrack}
                values={salaryRange}
                min={0}
                max={100}
                step={1}
                sliderLength={200}
                onValuesChange={handleSalaryChange}
                allowOverlap
                snapped
              />
            </View>
            <Text style={styles.texthead}>Location</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Location"
              placeholderTextColor={'#808080'}
              value={location}
              onChangeText={setLocation}
            />
            <TouchableOpacity style={styles.filterbutton} onPress={handleFilter}>
              <Text style={styles.applytext}>Apply</Text>
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
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    width: '80%',
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    marginRight: '5%',
    alignSelf: 'center',
  },
  texthead01 : {
        color : '#000000',
        fontWeight : 'bold',
        fontSize : 18
      },
      reset : {
            color : 'red'
          },
  sliderContainer: {
    marginBottom: 16,
  },
  slider: {
    height: 40,
    marginLeft: '5%',
  },
  marker: {
    backgroundColor: 'green',
    width: 20,
    height: 20,
  },
  pressedMarker: {
    backgroundColor: 'blue',
  },
  track: {
    backgroundColor: 'gray',
    height: 4,
  },
  selectedTrack: {
    backgroundColor: 'green',
    height: 4,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
    color: 'black',
  },
  filterButtonText: {
    color: 'green',
  },
  texthead: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
  applytext: {
    color: '#000000',
    alignSelf: 'center',
    fontSize: 15,
  },
  filterbutton: {
    backgroundColor: '#5F9EA0',
    color: 'black',
    width: '40%',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 5,
    height: 30,
  },
});

export default Filter;
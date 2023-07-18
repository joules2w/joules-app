// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const Filter = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedExperience, setSelectedExperience] = useState('');
//   const [selectedSalary, setSelectedSalary] = useState('');
//   const [location, setLocation] = useState('');

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const resetFilter = () => {
//     setSelectedExperience('');
//     setSelectedSalary('');
//     setLocation('');
//   };

//   const handleApplyFilter = () => {
//     // Apply the filter based on the selected values
//     console.log('Selected Experience:', selectedExperience);
//     console.log('Selected Salary:', selectedSalary);
//     console.log('Location:', location);

//     // Close the modal
//     toggleModal();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
//         <Text style={styles.filterButtonText}>Filter</Text>
//       </TouchableOpacity>

//       <Modal visible={isModalVisible} transparent animationType="fade">
//         <View style={styles.modalBackdrop}>
//           <View style={styles.modalContent}>
//             <View style={{ flexDirection : 'row', justifyContent : 'space-between', width : '100%' }}>
//               <Text style={styles.texthead01}>FilterBy</Text>
//               <TouchableOpacity onPress={resetFilter}>
//                 <Text style={styles.reset}>Reset</Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.texthead}>Experience</Text>
//             <Picker
//               selectedValue={selectedExperience}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedExperience(itemValue)}
//             >
//               <Picker.Item label="Select experience" value="" />
//               <Picker.Item label="1-2 years" value="1-2 years" />
//               <Picker.Item label="3-5 years" value="3-5 years" />
//               <Picker.Item label="6-10 years" value="6-10 years" />
//             </Picker>

//             <Text style={styles.texthead}>Salary</Text>
//             <Picker
//               selectedValue={selectedSalary}
//               style={styles.picker}
//               onValueChange={(itemValue) => setSelectedSalary(itemValue)}
//             >
//               <Picker.Item label="Select salary" value="" />
//               <Picker.Item label="< $5000" value="< $5000" />
//               <Picker.Item label="$5000 - $10000" value="$5000 - $10000" />
//               <Picker.Item label="> $10000" value="> $10000" />
//             </Picker>

//             <Text style={styles.texthead}>Location</Text>
//             <TextInput
//               style={styles.textinput}
//               placeholder="Enter location"
//               placeholderTextColor='gray'
//               value={location}
//               onChangeText={setLocation}
//             />

//             <TouchableOpacity style={styles.filterbutton} onPress={handleApplyFilter}>
//               <Text style={styles.text}>Apply Filter</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   filterButton: {
//     // backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   filterButtonText: {
//     color: 'green',
//     // fontSize: 16,
//   },
//   modalBackdrop: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '70%',
//   },
//   texthead : {
//     color : 'black',
//     fontWeight : 'bold',
//     fontSize : 18
//   },
//   texthead01 : {
//     color : 'black',
//     fontWeight : 'bold',
//     fontSize : 20
//   },
//   picker : {
//     color : 'black',
//     backgroundColor : '#C0C0C0',
//   },
//   text : {
//     color : 'black'
//   },
//   textinput : {
//     borderWidth : 1,
//     borderRadius : 10,
//     borderColor : 'gray',
//     color : 'black'
//   },
//   filterbutton : {
//     backgroundColor : '#5F9EA0',
//     color : 'black',
//     width : '40%',
//     alignSelf : 'center',
//     marginTop : '5%',
//     borderRadius : 5,
//     height : 30,
//   },
//   reset : {
//     color : 'red'
//   }
// })

// export default Filter;





import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

// Rest of the code...


const HomeScreen = () => {
  const [experienceRange, setExperienceRange] = useState([0, 10]);
  const [location, setLocation] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const [salaryRange, setSalaryRange] = useState([0, 200]);
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

  const handleSalaryChange = (values) => {
    setSalaryRange(values);
    const formattedMinSalary = formatSalary(values[0] * 100000);
    const formattedMaxSalary = formatSalary(values[1] * 100000);
    const formattedSalary = `${formattedMinSalary} - ${formattedMaxSalary}`;
    setSalaryText(formattedSalary);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
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
                onValuesChange={(values) => setExperienceRange(values)}
                min={0}
                max={20}
                step={1}
                allowOverlap
                snapped
              />
            </View>
            <View style={styles.sliderContainer}>
              <Text style={styles.texthead}>
                Salary Range: {salaryText}
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

export default HomeScreen;

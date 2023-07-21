import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Filter = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [location, setLocation] = useState('');
  const locationInputRef = useRef(null);
  const [jobExperience, setJobExperience] = useState({ jobExperienceFrom: '', jobExperienceTo: '' });

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

  const handleSalaryChange = (values) => {
    setSalaryRange(values);
  };

  const handleExperienceChange = (values) => {
    setJobExperience({ jobExperienceFrom: values[0], jobExperienceTo: values[1] });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const resetFilter = () => {
    setJobExperience({ jobExperienceFrom: '0', jobExperienceTo: '15' });
    setSalaryRange([0, 100]);
    setLocation('');
    locationInputRef.current.clear();
  };

  const formatExperienceValue = (value) => {
    return `${value} years`;
  };

  const handleApplyFilter = async () => {
    try {
      const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?jobExperienceFrom=${jobExperience.jobExperienceFrom}&jobExperienceTo=${jobExperience.jobExperienceTo}&jobSalaryFrom=${salaryRange[0] * 100000}&jobSalaryTo=${salaryRange[1] * 100000}&jobLocation=${location}`;
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      // Handle the filtered data as per your requirements
      console.log('Filtered Jobs:', jsonData);

      toggleModal();
    } catch (error) {
      console.error('Error fetching filtered jobs:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalBackdrop}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <View style={styles.filterHeader}>
                  <Text style={styles.texthead}>Filter By</Text>
                  <TouchableOpacity style={styles.resetButton} onPress={resetFilter}>
                    <Text style={styles.resetButtonText}>Reset</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.subheading}>Experience</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.subheading}>{formatExperienceValue(jobExperience.jobExperienceFrom)}</Text>
                  <Text style={styles.subheading}>{formatExperienceValue(jobExperience.jobExperienceTo)}</Text>
                </View>
                <MultiSlider
                  values={[jobExperience.jobExperienceFrom, jobExperience.jobExperienceTo]}
                  min={0}
                  max={15}
                  step={1}
                  allowOverlap={false}
                  snapped
                  sliderLength={200}
                  onValuesChange={handleExperienceChange}
                  minMarkerOverlapDistance={10}
                  selectedStyle={styles.selectedStyle}
                  unselectedStyle={styles.unselectedStyle}
                />

                <Text style={styles.subheading}>Salary</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.subheading}>{formatSalary(salaryRange[0] * 100000)}</Text>
                  <Text style={styles.subheading}>{formatSalary(salaryRange[1] * 100000)}</Text>
                </View>
                <MultiSlider
                  values={salaryRange}
                  min={0}
                  max={100}
                  step={1}
                  allowOverlap={false}
                  snapped
                  sliderLength={200}
                  onValuesChange={handleSalaryChange}
                  minMarkerOverlapDistance={10}
                  selectedStyle={styles.selectedStyle}
                  unselectedStyle={styles.unselectedStyle}
                />

                <Text style={styles.subheading}>Location</Text>
                <TextInput
                  ref={locationInputRef}
                  style={styles.textInput}
                  placeholder="Enter location"
                  placeholderTextColor="gray"
                  value={location}
                  onChangeText={setLocation}
                />

                <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilter}>
                  <Text style={styles.applyButtonText}>Apply Filter</Text>
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
	  color: '#449B93',
	  fontSize: 20,
	},
	modalBackdrop: {
	  flex: 1,
	  backgroundColor: 'rgba(0, 0, 0, 0.5)',
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	modalContent: {
	  backgroundColor: 'white',
	  padding: 20,
	  borderRadius: 10,
	},
	filterHeader: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  marginBottom: 10,
	},
	texthead: {
	  color: 'black',
	  fontWeight: 'bold',
	  fontSize: 18,
	},
	resetButton: {
	  padding: 5,
	},
	resetButtonText: {
	  color: 'red',
	  fontWeight: 'bold',
	  fontSize: 16,
	},
	subheading: {
	  fontWeight: 'bold',
	  fontSize: 16,
	  marginTop: 10,
	  color: 'black',
	},
	textInput: {
	  borderWidth: 1,
	  borderRadius: 5,
	  borderColor: 'gray',
	  paddingHorizontal: 10,
	  marginBottom: 10,
	  color: 'black',
	},
	applyButton: {
	  backgroundColor: '#449B93',
	  paddingVertical: 10,
	  borderRadius: 5,
	  marginTop: 10,
	},
	applyButtonText: {
	  color: 'white',
	  fontWeight: 'bold',
	  fontSize: 16,
	  textAlign: 'center',
	},
	selectedStyle: {
	  backgroundColor: 'green',
	},
	unselectedStyle: {
	  backgroundColor: 'lightgray',
	},
});

export default Filter;























// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';

// const Filter = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [experienceRange, setExperienceRange] = useState([0, 15]);
//   const [salaryRange, setSalaryRange] = useState([0, 100]);
//   const [location, setLocation] = useState('');
//   const locationInputRef = useRef(null);

//   const formatSalary = (value) => {
//     const crore = Math.floor(value / 10000000);
//     const lakh = Math.floor((value - crore * 10000000) / 100000);
//     const thousand = Math.floor((value - crore * 10000000 - lakh * 100000) / 1000);

//     let formattedSalary = '';
//     if (crore > 0) {
//       formattedSalary += crore + ' Cr ';
//     }
//     if (lakh > 0) {
//       formattedSalary += lakh + ' Lakh ';
//     }
//     if (thousand > 0) {
//       formattedSalary += thousand + ' Thousand ';
//     }

//     return formattedSalary.trim();
//   };

//   const handleSalaryChange = (values) => {
//     setSalaryRange(values);
//   };

//   const handleExperienceChange = (values) => {
//     setExperienceRange(values);
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const resetFilter = () => {
//     setExperienceRange([0, 15]);
//     setSalaryRange([0, 100]);
//     setLocation('');
//     locationInputRef.current.clear();
//   };

//   const formatExperienceValue = (value) => {
//     return `${value} years`;
//   };

//   const handleApplyFilter = () => {
//     console.log('Experience Range:', experienceRange);
//     console.log('Salary Range:', salaryRange);
//     console.log('Location:', location);

//     toggleModal();
//   };

//   const handleModalClose = () => {
//     if (isModalVisible) {
//       toggleModal();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
//         <Text style={styles.filterButtonText}>Filter</Text>
//       </TouchableOpacity>

//       <Modal visible={isModalVisible} transparent animationType="fade">
//         <TouchableWithoutFeedback onPress={handleModalClose}>
//           <View style={styles.modalBackdrop}>
//             <TouchableWithoutFeedback>
//               <View style={styles.modalContent}>
//                 <View style={styles.filterHeader}>
//                   <Text style={styles.texthead}>Filter By</Text>
//                   <TouchableOpacity style={styles.resetButton} onPress={resetFilter}>
//                     <Text style={styles.resetButtonText}>Reset</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <Text style={styles.subheading}>Experience</Text>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text style={styles.subheading}>{formatExperienceValue(experienceRange[0])}</Text>
//                   <Text style={styles.subheading}>{formatExperienceValue(experienceRange[1])}</Text>
//                 </View>
//                 <MultiSlider
//                   values={experienceRange}
//                   min={0}
//                   max={15}
//                   step={1}
//                   allowOverlap={false}
//                   snapped
//                   sliderLength={200}
//                   onValuesChange={handleExperienceChange}
//                   minMarkerOverlapDistance={10}
//                   selectedStyle={styles.selectedStyle}
//                   unselectedStyle={styles.unselectedStyle}
//                 />

//                 <Text style={styles.subheading}>Salary</Text>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text style={styles.subheading}>{formatSalary(salaryRange[0] * 100000)}</Text>
//                   <Text style={styles.subheading}>{formatSalary(salaryRange[1] * 100000)}</Text>
//                 </View>
//                 <MultiSlider
//                   values={salaryRange}
//                   min={0}
//                   max={100}
//                   step={1}
//                   allowOverlap={false}
//                   snapped
//                   sliderLength={200}
//                   onValuesChange={handleSalaryChange}
//                   minMarkerOverlapDistance={10}
//                   selectedStyle={styles.selectedStyle}
//                   unselectedStyle={styles.unselectedStyle}
//                 />

//                 <Text style={styles.subheading}>Location</Text>
//                 <TextInput
//                   ref={locationInputRef}
//                   style={styles.textInput}
//                   placeholder="Enter location"
//                   placeholderTextColor="gray"
//                   value={location}
//                   onChangeText={setLocation}
//                 />

//                 <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilter}>
//                   <Text style={styles.applyButtonText}>Apply Filter</Text>
//                 </TouchableOpacity>
//               </View>
//             </TouchableWithoutFeedback>
//           </View>
//         </TouchableWithoutFeedback>
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
//     padding: 10,
//     borderRadius: 5,
//     // backgroundColor: 'green',
//   },
//   filterButtonText: {
//     color: '#449B93',
//     // fontWeight: 'bold',
//     fontSize: 20,
//   },
//   modalBackdrop: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//   },
//   filterHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   texthead: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   resetButton: {
//     padding: 5,
//   },
//   resetButtonText: {
//     color: 'red',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   subheading: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginTop: 10,
//     color: 'black',
//   },
//   textInput: {
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: 'gray',
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     color:'black'
//   },
//   applyButton: {
//     backgroundColor: '#449B93',
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   applyButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   selectedStyle: {
//     backgroundColor: 'green',
//   },
//   unselectedStyle: {
//     backgroundColor: 'lightgray',
//   },
// });

// export default Filter;































































// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';

// const Filter = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [experienceRange, setExperienceRange] = useState([0, 15]);
//   const [salaryRange, setSalaryRange] = useState([0, 100]);
//   const [location, setLocation] = useState('');

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const resetFilter = () => {
//     setExperienceRange([0, 15]);
//     setSalaryRange([0, 100]);
//     setLocation('');
//   };

//   const formatSalaryValue = (value) => {
//     if (value === 0) {
//       return '10k';
//     } else if (value === 100) {
//       return '10cr';
//     } else {
//       const salary = (value / 100) * 100000000; // Convert percentage to salary range
//       return `${salary} - ${salary + 10000000}`;
//     }
//   };

//   const formatExperienceValue = (value) => {
//     return `${value} years`;
//   };

//   const handleApplyFilter = () => {
//     // Apply the filter based on the selected values
//     console.log('Experience Range:', experienceRange);
//     console.log('Salary Range:', salaryRange);
//     console.log('Location:', location);

//     // Close the modal
//     toggleModal();
//   };

//   const handleModalClose = () => {
//     if (isModalVisible) {
//       toggleModal();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
//         <Text style={styles.filterButtonText}>Filter</Text>
//       </TouchableOpacity>

//       <Modal visible={isModalVisible} transparent animationType="fade">
//         <TouchableWithoutFeedback onPress={handleModalClose}>
//           <View style={styles.modalBackdrop}>
//             <TouchableWithoutFeedback>
//               <View style={styles.modalContent}>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
//                   <Text style={styles.texthead01}>FilterBy</Text>
//                   <TouchableOpacity onPress={resetFilter}>
//                     <Text style={styles.reset}>Reset</Text>
//                   </TouchableOpacity>
//                 </View>
//                 <Text style={styles.texthead}>Experience</Text>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text>{formatExperienceValue(experienceRange[0])}</Text>
//                   <Text>{formatExperienceValue(experienceRange[1])}</Text>
//                 </View>
//                 <MultiSlider
//                   values={experienceRange}
//                   min={0}
//                   max={15}
//                   step={1}
//                   allowOverlap={false}
//                   snapped
//                   sliderLength={200}
//                   onValuesChange={(values) => setExperienceRange(values)}
//                   minMarkerOverlapDistance={10}
//                   customMarkerLeft={(e) => {
//                     return <View />;
//                   }}
//                   customMarkerRight={(e) => {
//                     return <View />;
//                   }}
//                 />
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text>From: {experienceRange[0]}</Text>
//                   <Text>To: {experienceRange[1]}</Text>
//                 </View>

//                 <Text style={styles.texthead}>Salary</Text>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text>{formatSalaryValue(salaryRange[0])}</Text>
//                   <Text>{formatSalaryValue(salaryRange[1])}</Text>
//                 </View>
//                 <MultiSlider
//                   values={salaryRange}
//                   min={0}
//                   max={100}
//                   step={1}
//                   allowOverlap={false}
//                   snapped
//                   sliderLength={200}
//                   onValuesChange={(values) => setSalaryRange(values)}
//                   minMarkerOverlapDistance={10}
//                   customMarkerLeft={(e) => {
//                     return <View />;
//                   }}
//                   customMarkerRight={(e) => {
//                     return <View />;
//                   }}
//                 />
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text>From: {salaryRange[0]}</Text>
//                   <Text>To: {salaryRange[1]}</Text>
//                 </View>

//                 <Text style={styles.texthead}>Location</Text>
//                 <TextInput
//                   style={styles.textinput}
//                   placeholder="Enter location"
//                   placeholderTextColor="gray"
//                   value={location}
//                   onChangeText={setLocation}
//                 />

//                 <TouchableOpacity style={styles.filterbutton} onPress={handleApplyFilter}>
//                   <Text style={{color:'#fff'}}>Apply Filter</Text>
//                 </TouchableOpacity>
//               </View>
//             </TouchableWithoutFeedback>
//           </View>
//         </TouchableWithoutFeedback>
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
//     padding: '2%',
//     borderRadius: 5,
//   },
//   filterButtonText: {
//     color: 'green',
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
//     marginHorizontal: '4%',
//   },
//   texthead: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   texthead01: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   textinput: {
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: 'gray',
//     color: 'black',
//   },
//   filterbutton: {
//     backgroundColor: '#5F9EA0',
//     color: 'black',
//     width: '45%',
//     alignSelf: 'center',
//     marginTop: '5%',
//     borderRadius: 5,
//     // justifyContent:'center'
//     height: 30,
//     // placeholderTextColor:'#fff'
//   },
//   reset: {
//     color: 'red',
//   },
// });

// export default Filter;
























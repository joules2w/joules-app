

// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   ImageBackground,
//   Modal,
//   Pressable,
//   Dimensions,
//   useWindowDimensions,
//   TouchableWithoutFeedback,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   FlatList
// } from 'react-native';
// import { RadioButton } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { MultipleSelectList } from 'react-native-dropdown-select-list';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { Button } from 'react-native-paper';
// import { DatePickerModal } from 'react-native-paper-dates';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import {  ticket } from './StaticValues'


// import Header from './Header';
// import Footer from './Footer';

// const Sparsh = ({ navigation }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [priority, setPriority] = useState('');
//   const [activeTab, setActiveTab] = useState('Tab1');
//   // const [priority, setPriority] = useState('');



//   const [selected, setSelected] = React.useState([]);
//   const data = [
//     { key: '1', value: 'name1' },
//     { key: '2', value: 'name2' },
//     { key: '3', value: 'name3' },
//     { key: '4', value: 'name4' },
//     { key: '5', value: 'name5' },
//   ];

//   const handleTabPress = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const ticketDetails = (ticket) => {
//     navigation.navigate('TicketDetails', { ticket });
// };


//   const [range, setRange] = React.useState({ startDate: undefined, endDate: undefined });
//   const [open, setOpen] = React.useState(false);

//   const onDismiss = React.useCallback(() => {
//     setOpen(false);
//   }, [setOpen]);

//   const onConfirm = React.useCallback(
//     ({ startDate, endDate }) => {
//       setOpen(false);
//       setRange({ startDate, endDate });
//     },
//     [setOpen, setRange]
//   );

//   const getButtonTitle = () => {
//     if (range.startDate && range.endDate) {
//       const startDateString = range.startDate.toDateString();
//       const endDateString = range.endDate.toDateString();
//       return `${startDateString} - ${endDateString}`;
//     } else {
//       return "Select Date";
//     }
//   };

//   const handleSelect = () => {
//     Alert.alert('Selected:', selected.join(', '));
//   };

//   const logout = () => {
//     navigation.navigate('Login');
//   };

//   const interviewpanel = () => {
//     navigation.navigate('InterviewPanel');
//   };

//   const jobportal = () => {
//     navigation.navigate('Job_Portal');
//   };

//   const sparsh = () => {
//     navigation.navigate('Sparsh');
//   };

//   const home = () => {
//     navigation.navigate('Home');
//   };

//   const [selectedTab, setSelectedTab] = useState('All');
//   const getFilteredData = (priority) => {
//     if (priority === 'All') {
//         return ticket;
//     }
//     return ticket.filter((item) => item.priority === priority);
// };


// const ticketItem = ({ item }) => {
        
//   let backgroundColor = '#808080';

// if (item.priority === 'High') {
//   backgroundColor = 'green';
// } else if (item.priority === 'Medium') {
//   backgroundColor = 'blue';
// } else if (item.priority === 'Low') {
//   backgroundColor = 'red';
// }

//   return (
//       <View style={[styles.card, styles.elevation]}>
//           <TouchableOpacity onPress={() => ticketDetails(item)}>
//               <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text style={[styles.priority, { backgroundColor : backgroundColor }]}>
//                       <Text style={styles.texthead03}>{item.priority}</Text>
//                   </Text>
//                   <Text style={styles.heading02}>Created on {item.createdOn}</Text>
//               </View>
//               <Text style={styles.heading01}>{item.heading}</Text>
//               <Text style={styles.heading02}>{item.ticketdescription}</Text>
//               <Text style={styles.texthead03}>Assigned on {item.assigned}</Text>
//           </TouchableOpacity>
//       </View>
//   )
// };

// const renderTabContent = () => {
//   const ticket = getFilteredData(selectedTab);
//   return (
//       <FlatList scrollEnabled={false}
//           data={ticket}
//           keyExtractor={(ticket) => ticket.id.toString()}
//           renderItem={ticketItem} />
//   );
// };


//   return (
//     <SafeAreaProvider>
//       <View style={styles.container}>
//         <ScrollView>
//           <View style={{ flexDirection: 'row', width: '80%' }}>
//             <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
//           </View>
//           <ImageBackground source={require('./Images/background.jpg')} style={styles.background}>
//             <Text style={styles.texthead02}>Sparsh</Text>
//             <Text style={styles.texthead05}>
//               Say Hello to Hassle-Free HR Query Resolution with sparsh : Your On-Stop Tcking Raising Platform
//             </Text>
//           </ImageBackground>
//           <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ticket')}>
//             <Text style={styles.button2}>Create New Ticket</Text>
//           </TouchableOpacity>

//           <View style={styles.tabContainer}>
//             <TouchableOpacity
//               style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]}
//               onPress={() => handleTabPress('Tab1')}
//             >
//               <Text style={styles.tabText}>Open Ticket</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]}
//               onPress={() => handleTabPress('Tab2')}
//             >
//               <Text style={styles.tabText}>Close Ticket</Text>
//             </TouchableOpacity>
//           </View>

//           {activeTab === 'Tab1' && (
//             <View>
//               <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                   Alert.alert('Modal has been closed.');
//                   setModalVisible(!modalVisible);
//                 }}
//               >
//                 <View>
//                   <View style={styles.modalView}>
//                     <RadioButton.Group onValueChange={value => setPriority(value)} value={priority}>
//                       <View style={styles.radioItem}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           <RadioButton color="red" value="high" />
//                           <Text style={[styles.modalText, { color: 'red' }]}>High Priority</Text>
//                         </View>
//                       </View>
//                       <View style={styles.radioItem}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           <RadioButton color="orange" value="medium" />
//                           <Text style={[styles.modalText, { color: 'orange' }]}>Medium Priority</Text>
//                         </View>
//                       </View>
//                       <View style={styles.radioItem}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           <RadioButton color="#3590ae" value="low" />
//                           <Text style={[styles.modalText, { color: '#3590ae' }]}>Low Priority</Text>
//                         </View>
//                       </View>
//                     </RadioButton.Group>
//                     <Pressable
//                       style={[styles.button, styles.buttonClose]}
//                       onPress={() => {
//                         setModalVisible(!modalVisible);
//                         if (priority) {
//                           console.log('Filter by:', priority);

//                         }
//                       }}
//                     >
//                       <Text style={styles.textStyle}>Filter</Text>
//                     </Pressable>


//                   </View>
//                 </View>
//               </Modal>
//               <Pressable
//                 style={[styles.button, styles.buttonOpen]}
//                 onPress={() => setModalVisible(true)}
//               >
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <Text style={[styles.textStyle, { marginRight: '50%' }]}>
//                     {priority ? `${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority` : 'Ticket Priority'}
//                   </Text>
//                   <Icon name="chevron-down" size={15} color="#000" />
//                 </View>
//               </Pressable>


//               <View style={styles.cont1}>
//                 <MultipleSelectList
//                   style={styles.text}
//                   onSelect={() => alert(selected)}
//                   setSelected={(val) => setSelected(val)}
//                   label="Tickets assigned to"
//                   data={data}
//                   arrowicon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
//                   searchicon={<MaterialIcons name="search" size={24} color="black" />}
//                   search={true}
//                   boxStyles={{ borderRadius: 0, width: '98.9%', height: 45, borderRadius: 30, padding: '2%', paddingHorizontal: '5%' }}
//                 />
//               </View>
//               <View style={styles.container1}>
//                 <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined" style={styles.button022}>
//                   <Text style={styles.buttonText}>{getButtonTitle()}</Text>
//                 </Button>
//                 <DatePickerModal
                  
//                   mode="range"
//                   visible={open}
//                   onDismiss={onDismiss}
//                   startDate={range.startDate}
//                   endDate={range.endDate}
//                   onConfirm={onConfirm}
//                   startLabel="Start Date"
//                   endLabel="End Date"
//                   saveLabel="Save"
//                 />
//               </View>

//               <TextInput
//                 style={styles.textinput}
//                 placeholder="search with ticket number here.."
//                 keyboardType="numeric"
//                 maxLength={10}
//                 placeholderTextColor="gray"
//               />

//               <View style={[styles.card, styles.elevation]}>
//                 <View style={{ flexDirection: 'row' }}>
//                   <Text style={styles.texthead5}>High</Text>
//                   <Text style={styles.texthead06}>Created on 4 Apirl 2023</Text>
//                 </View>
//                 <Text style={styles.heading01}>Testing</Text>
//                 <Text style={styles.heading02}>Testing</Text>
//                 <Text style={styles.heading03}>Assigned on 10 Apirl 2023</Text>
//                 <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}></View>
//               </View>
//             </View>
//           )}
//           {activeTab === 'Tab2' && (
//             <View>
//               <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                   Alert.alert('Modal has been closed.');
//                   setModalVisible(!modalVisible);
//                 }}
//               >
//                 <View>
//                   <View style={styles.modalView}>
//                     <RadioButton.Group onValueChange={value => setPriority(value)} value={priority}>
//                       <View style={styles.radioItem}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           <RadioButton color="red" value="high" />
//                           <Text style={[styles.modalText, { color: 'red' }]}>High Priority</Text>
//                         </View>
//                       </View>
//                       <View style={styles.radioItem}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           <RadioButton color="orange" value="medium" />
//                           <Text style={[styles.modalText, { color: 'orange' }]}>Medium Priority</Text>
//                         </View>
//                       </View>
//                       <View style={styles.radioItem}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                           <RadioButton color="#3590ae" value="low" />
//                           <Text style={[styles.modalText, { color: '#3590ae' }]}>Low Priority</Text>
//                         </View>
//                       </View>
//                     </RadioButton.Group>
//                     <Pressable
//                       style={[styles.button, styles.buttonClose]}
//                       onPress={() => {
//                         setModalVisible(!modalVisible);
//                         if (priority) {
//                           console.log('Filter by:', priority);

//                         }
//                       }}
//                     >
//                       <Text style={styles.textStyle}>Filter</Text>
//                     </Pressable>


//                   </View>
//                 </View>
//               </Modal>
//               <Pressable
//                 style={[styles.button, styles.buttonOpen]}
//                 onPress={() => setModalVisible(true)}
//               >
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                   <Text style={[styles.textStyle, { marginRight: '50%' }]}>
//                     {priority ? `${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority` : 'Ticket Priority'}
//                   </Text>
//                   <Icon name="chevron-down" size={15} color="#000" />
//                 </View>
//               </Pressable>
//               <View style={styles.cont1}>
//                 <MultipleSelectList
//                   style={styles.text}
//                   onSelect={() => alert(selected)}
//                   setSelected={(val) => setSelected(val)}
//                   label="Tickets assigned to"
//                   data={data}
//                   arrowicon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
//                   searchicon={<MaterialIcons name="search" size={24} color="black" />}
//                   search={true}
//                   boxStyles={{ borderRadius: 0, width: '98.9%', height: 45, borderRadius: 30, padding: '2%', paddingHorizontal: '5%' }}
//                 />
//               </View>

//               <View style={styles.container1}>
//                 <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined" style={styles.button022}>
//                   <Text style={styles.buttonText}>{getButtonTitle()}</Text>
//                 </Button>
//                 <DatePickerModal
                  
//                   mode="range"
//                   visible={open}
//                   onDismiss={onDismiss}
//                   startDate={range.startDate}
//                   endDate={range.endDate}
//                   onConfirm={onConfirm}
//                   startLabel="Start Date"
//                   endLabel="End Date"
//                   saveLabel="Save"
//                 />
//               </View>





//               <TextInput
//                 style={styles.textinput}
//                 placeholder="search with ticket number here.."
//                 keyboardType="numeric"
//                 maxLength={10}
//                 placeholderTextColor="gray"
//               />

//               {/* <View style={[styles.card, styles.elevation]}>
//                 <TouchableOpacity onPress={() => navigation.navigate('TicketDetails')}>
//                 <View style={{ flexDirection: 'row' }}>
//                   <Text style={styles.texthead5}>High</Text>
//                   <Text style={styles.texthead06}>Created on 4 Apirl 2023</Text>
//                 </View>
//                 <Text style={styles.heading01}>Testing</Text>
//                 <Text style={styles.heading02}>Testing</Text>
//                 <Text style={styles.heading03}>Assigned on 10 Apirl 2023</Text>
//                 <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}></View>
//                 </TouchableOpacity>
//               </View> */}
//               <View>
//                                       {renderTabContent()}
//                                       </View>

//             </View>
//           )}

//           <Footer />
//         </ScrollView>
//       </View>
//     </SafeAreaProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   texthead02: {
//     marginLeft: '8%',
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 20,
//     marginTop: '3%',
//     marginBottom: '5%',
//   },
//   texthead05: {
//     marginLeft: '8%',
//     marginRight: '8%',
//     color: 'black',
//     fontSize: 16,
//     marginBottom: '5%',
//     textAlign: 'justify',
//   },
//   button2: {
//     color: 'white',
//     marginLeft: '50%',
//     marginRight: '8%',
//     borderRadius: 10,
//     backgroundColor: '#5f9ea0',
//     padding: 10,
//     textAlign: 'center',
//     alignItems: 'flex-end',
//     width: '50%'
//   },
//   background: {
//     height: 150,
//     width: Dimensions.get('window').width,
//     opacity: 0.35,
//   },
//   textinput: {
//     height: 50,
//     width: 250,
//     borderWidth: 1,
//     color: 'black',
//     borderRadius: 12,
//     margin: 55,
//     marginBottom: 20,
//     marginLeft: 20,
//   },
//   heading01: {
//     fontSize: 18,
//     marginLeft: 20,
//     marginBottom: 8,
//     color: 'black',
//   },
//   heading02: {
//     fontSize: 15,
//     marginBottom: 13,
//     marginLeft: 20,
//     color: 'black',
//   },
//   heading03: {
//     fontSize: 10,
//     marginBottom: 13,
//     marginLeft: 20,
//     color: 'black',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     borderColor: 'black',
//     padding: 5,
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginBottom: '5%',
//   },
//   elevation: {
//     shadowColor: 'black',
//     elevation: 3,
//   },
//   texthead5: {
//     marginLeft: 10,
//     color: '#FF6666',
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     fontSize: 16,
//     backgroundColor: '#FFEAE9',
//   },
//   texthead06: {
//     marginLeft: 90,
//     color: 'black',
//     fontSize: 12,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     shadowColor: '#000',
//   },
//   shadowOffset: {
//     width: 0,
//     height: 2,
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     marginVertical: 260,
//   },
//   button: {
//     marginBottom: 10,
//     padding: 10,
//     borderRadius: 10,
//     textAlign: 'left',
//   },
//   buttonOpen: {
//     backgroundColor: '#d3d3d3',
//     borderRadius: 20,
//     height: 54.9,
//     flexDirection: 'row',
//     marginHorizontal: 10,
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//     borderRadius: 15,
//     width: 80,
//     height: 37.5,
//   },
//   textStyle: {
//     color: 'black',
//     paddingHorizontal: 10,
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   picker: {
//     width: 200,
//     height: 44,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//   },
//   radioItem: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   button3: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: 'lightgray',
//     borderRadius: 5,
//     marginRight: 100,
//   },
//   buttonText3: {
//     marginRight: 5,
//     fontWeight: 'bold',
//   },

//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#808080',
//   },
//   activeTab: {
//     backgroundColor: '#5f9ea0',
//   },
//   tabText: {
//     fontSize: 16,
//     color: '#fff',
//     marginLeft: '8%',
//   },
//   text: {
//     color: 'black',
//   },
//   button04: {
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 10,
//     height: '22%'
//   },
//   label: {
//     color: 'black',
//   },
//   container1: {
//     width: "100%",
//     padding: '2%'
//   },
//   button022: {
//     borderColor: 'black',
//     borderWidth: 1
//   },
//   buttonText: {
//     color: 'black'
//   },
//   cont1: { padding: '2%' }
// });

// export default Sparsh;



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------










import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Filter = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [experienceRange, setExperienceRange] = useState([0, 15]);
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [location, setLocation] = useState('');
  const locationInputRef = useRef(null);

  useEffect(() => {
    fetchFilterData();
  }, []);

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
    setExperienceRange(values);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const resetFilter = () => {
    setExperienceRange([0, 15]);
    setSalaryRange([0, 100]);
    setLocation('');
    locationInputRef.current.clear();
  };

  const formatExperienceValue = (value) => {
    return `${value} years`;
  };

  const handleApplyFilter = () => {
    console.log('Experience Range:', experienceRange);
    console.log('Salary Range:', salaryRange);
    console.log('Location:', location);

    toggleModal();
  };

  const handleModalClose = () => {
    if (isModalVisible) {
      toggleModal();
    }
  };

  const fetchFilterData = async () => {
    try {
      const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?jobExperience=2-6&jobSalary=500000-1100000&jobLocation=Bangalore';
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Extracting the salary, experience, and location from the data and setting the initial values
      const minExperience = Math.min(...data.map((job) => Number(job.jobExperience[0].jobExperienceFrom)));
      const maxExperience = Math.max(...data.map((job) => Number(job.jobExperience[0].jobExperienceTo)));
      setExperienceRange([minExperience, maxExperience]);

      const minSalary = Math.min(...data.map((job) => Number(job.JobSalary[0].jobSalaryFrom)) / 100000);
      const maxSalary = Math.max(...data.map((job) => Number(job.JobSalary[0].jobSalaryTo)) / 100000);
      setSalaryRange([minSalary, maxSalary]);

      const locations = [...new Set(data.map((job) => job.jobLocation))]; // Remove duplicates using Set
      setLocation(locations[0] || ''); // Set the first location as the initial value
    } catch (error) {
      console.error('Error fetching filter data:', error);
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
                <View style={styles.filterHeader}>
                  <Text style={styles.texthead}>Filter By</Text>
                  <TouchableOpacity style={styles.resetButton} onPress={resetFilter}>
                    <Text style={styles.resetButtonText}>Reset</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.subheading}>Experience</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.subheading}>{formatExperienceValue(experienceRange[0])}</Text>
                  <Text style={styles.subheading}>{formatExperienceValue(experienceRange[1])}</Text>
                </View>
                <MultiSlider
                  values={experienceRange}
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

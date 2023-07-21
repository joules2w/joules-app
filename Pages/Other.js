// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';

// const Filter = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [experienceRange, setExperienceRange] = useState([0, 15]);
//   const [salaryRange, setSalaryRange] = useState([0, 100]);
//   const [location, setLocation] = useState('');
//   const locationInputRef = useRef(null);

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

//   const formatSalaryValue = (value) => {
//     if (value === 0) {
//       return '10k';
//     } else if (value === 100) {
//       return '10cr';
//     } else {
//       const salary = (value / 100) * 100000000;
//       return `${salary} - ${salary + 10000000}`;
//     }
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
//                   onValuesChange={(values) => {
//                     handleExperienceChange(values);
//                   }}
//                   minMarkerOverlapDistance={10}
//                   selectedStyle={styles.selectedStyle}
//                   unselectedStyle={styles.unselectedStyle}
//                 />
//                 <Text>{formatExperienceValue(experienceRange[1])}</Text>

//                 <Text style={styles.subheading}>Salary</Text>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                   <Text style={styles.subheading}>Salary from {formatSalaryValue(salaryRange[0])}</Text>
//                   <Text style={styles.subheading}>{formatSalaryValue(salaryRange[1])}</Text>
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
//                   selectedStyle={styles.selectedStyle}
//                   unselectedStyle={styles.unselectedStyle}
//                   customMarkerLeft={(e) => {
//                     return <View />;
//                   }}
//                   customMarkerRight={(e) => {
//                     return <View />;
//                   }}
//                 />
//                 <Text>{formatSalaryValue(salaryRange[1])}</Text>

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
//     backgroundColor: 'green',
//   },
//   filterButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
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
//     color: 'black',
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
// ----------------------------------------------------------------------------COPY OF SPARSH-------------------------------------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import { constants } from './StaticValues';

// import Header from './Header';
// import Footer from './Footer';
// import FilterBy from './Filter';
// import SearchBox from './SearchBox';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const renderCellContent = (value) => {
//     if (value?.length > 10) {
//       return <Text>{value.substring(0, 78)}...</Text>;
//     }
//     return <Text>{value}</Text>;
//   };

//   const renderskillContent = (value) => {
//     if (value?.length > 40) {
//       return <Text>{value.substring(0, 50)}...</Text>;
//     }
//     return <Text>{value}</Text>;
//   };

//   const renderJobItem = ({ item }) => {
//     const skillsToShow = item.skills.slice(0, 3);
//     const remainingSkillsCount = item.skills.length - 3;

//     return (
//       <View style={[styles.card, styles.elevation]}>
//         <TouchableOpacity onPress={() => handleJobPress(item)}>
//           <Text style={styles.heading01}>{item.title}</Text>
//           <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
//           <View style={styles.skillsContainer}>
//             {skillsToShow.map((skill, index) => (
//               <View key={index} style={styles.skillItem}>
//                 <Text style={styles.skillText}>{renderskillContent(skill)}</Text>
//               </View>
//             ))}
//             {remainingSkillsCount > 0 && (
//               <View style={styles.skillItem}>
//                 <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
//               </View>
//             )}
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const fetchJobs = () => {
    
//     const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=1&limit=10&search=&jobExperience=2-6&jobSalary=500000-1100000&jobLocation=Bangalore';

   
//     const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//     fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${bearerToken}`,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Fetched jobs:', data);
//         setJobs(data); 
//       })
//       .catch((error) => {
//         console.error('Error fetching jobs:', error);
//       });
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

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
//         <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
//           <SearchBox />
//           <FilterBy />
//         </View>
//         <FlatList
//           data={jobs}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderJobItem}
//           contentContainerStyle={{ paddingBottom: 20 }}
//         />
//         <Footer />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   background: {
//     height: 150,
//     width: Dimensions.get('window').width,
//     opacity: 0.45,
//   },
//   texthead01: {
//     color: 'black',
//     fontSize: 22,
//     textAlign: 'left',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginTop: 10,
//   },
//   texthead02: {
//     color: 'black',
//     fontSize: 16,
//     textAlign: 'justify',
//     marginLeft: '5%',
//     marginRight: '5%',
//   },
//   myreferral: {
//     color: 'red',
//     textAlign: 'right',
//     textDecorationLine: 'underline',
//     fontSize: 13,
//     marginRight: '5%',
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
//   heading01: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: '5%',
//     marginRight: '5%',
//     color: 'black',
//     padding: 5,
//   },
//   heading02: {
//     fontSize: 13,
//     marginLeft: '5%',
//     color: '#808080',
//     textAlign: 'justify',
//     marginRight: '5%',
//     padding: 5,
//   },
//   skillsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   skillItem: {
//     padding: 3,
//     marginLeft: '5%',
//   },
//   skillText: {
//     fontSize: 13,
//     color: '#449b93',
//     backgroundColor: '#e0f9f6',
//     padding: 8,
//     borderRadius: 15,
//   },
// });

// export default Job_portal;
// ---------------------------------------------------------------------------working not shown in app------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import { constants } from './StaticValues';

// import Header from './Header';
// import Footer from './Footer';
// import FilterBy from './Filter';
// import SearchBox from './SearchBox';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = () => {
//     const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=1&limit=10&jobExperience=2-6&jobSalary=500000-1100000&jobLocation=Bangalore';
//     const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//     fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${bearerToken}`,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Fetched jobs:', data);
//         setJobs(data); // Assuming the response data contains an array of job objects
//       })
//       .catch((error) => {
//         console.error('Error fetching jobs:', error);
//       });
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const renderCellContent = (value) => {
//     if (value?.length > 10) {
//       return <Text>{value.substring(0, 78)}...</Text>;
//     }
//     return <Text>{value}</Text>;
//   };

//   const renderskillContent = (value) => {
//     if (value?.length > 40) {
//       return <Text>{value.substring(0, 50)}...</Text>;
//     }
//     return <Text>{value}</Text>;
//   };

//   const renderJobItem = ({ item }) => {
//     const skillsToShow = item.jobSkills.slice(0, 3);
//     const remainingSkillsCount = item.jobSkills.length - 3;

//     return (
//       <View style={[styles.card, styles.elevation]}>
//         <TouchableOpacity onPress={() => handleJobPress(item)}>
//           <Text style={styles.heading01}>{item.jobTitle}</Text>
//           <Text style={styles.heading02}>{renderCellContent(item.jobDescription)}</Text>
//           <View style={styles.skillsContainer}>
//             {skillsToShow.map((skill, index) => (
//               <View key={index} style={styles.skillItem}>
//                 <Text style={styles.skillText}>{renderskillContent(skill)}</Text>
//               </View>
//             ))}
//             {remainingSkillsCount > 0 && (
//               <View style={styles.skillItem}>
//                 <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
//               </View>
//             )}
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
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

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
//         <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
//           <SearchBox />
//           <FilterBy />
//         </View>
//         <FlatList
//           data={jobs}
//           keyExtractor={(item) => item.jobId.toString()} // Assuming the jobId is used as a unique identifier for each job
//           renderItem={renderJobItem}
//           contentContainerStyle={{ paddingBottom: 100 }} // Add padding to the bottom of the FlatList
//         />
//         <Footer />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   background: {
//     height: 150,
//     width: Dimensions.get('window').width,
//     opacity: 0.45,
//   },
//   texthead01: {
//     color: 'black',
//     fontSize: 22,
//     textAlign: 'left',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginTop: 10,
//   },
//   texthead02: {
//     color: 'black',
//     fontSize: 16,
//     textAlign: 'justify',
//     marginLeft: '5%',
//     marginRight: '5%',
//   },
//   myreferral: {
//     color: 'red',
//     textAlign: 'right',
//     textDecorationLine: 'underline',
//     fontSize: 13,
//     marginRight: '5%',
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
//   heading01: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: '5%',
//     marginRight: '5%',
//     color: 'black',
//     padding: 5,
//   },
//   heading02: {
//     fontSize: 13,
//     marginLeft: '5%',
//     color: '#808080',
//     textAlign: 'justify',
//     marginRight: '5%',
//     padding: 5,
//   },
//   skillsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   skillItem: {
//     padding: 3,
//     marginLeft: '5%',
//   },
//   skillText: {
//     fontSize: 13,
//     color: '#449b93',
//     backgroundColor: '#e0f9f6',
//     padding: 8,
//     borderRadius: 15,
//   },
// });

// export default Job_portal;
// ----------------------------------------------------------ERROR ON JOBID------------------------------------------------------------------------------------------





// import React, { useEffect, useState } from 'react';
// import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import { constants } from './StaticValues';

// import Header from './Header';
// import Footer from './Footer';
// import FilterBy from './Filter';
// import SearchBox from './SearchBox';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = () => {
//     const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=1&limit=10&jobExperience=2-6&jobSalary=500000-1100000&jobLocation=Bangalore';
//     const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//     fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${bearerToken}`,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Fetched jobs:', data);
//         setJobs(data?.jobs || []); // Use the jobs array from the response or an empty array if it's not available
//       })
//       .catch((error) => {
//         console.error('Error fetching jobs:', error);
//       });
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const renderCellContent = (value) => {
//     if (value?.length > 10) {
//       return <Text>{value.substring(0, 78)}...</Text>;
//     }
//     return <Text>{value}</Text>;
//   };

//   const renderskillContent = (value) => {
//     if (value?.length > 40) {
//       return <Text>{value.substring(0, 50)}...</Text>;
//     }
//     return <Text>{value}</Text>;
//   };

//   const renderJobItem = ({ item }) => {
//     if (!item) {
//       return null;
//     }

//     const jobId = item.jobId || '';
//     const jobTitle = item.jobTitle || '';
//     const jobDescription = item.jobDescription || '';
//     const jobSkills = item.jobSkills || [];

//     const skillsToShow = jobSkills.slice(0, 3);
//     const remainingSkillsCount = jobSkills.length - 3;

//     return (
//       <View style={[styles.card, styles.elevation]}>
//         <TouchableOpacity onPress={() => handleJobPress(item)}>
//           <Text style={styles.heading01}>{jobTitle}</Text>
//           <Text style={styles.heading02}>{renderCellContent(jobDescription)}</Text>
//           <View style={styles.skillsContainer}>
//             {skillsToShow.map((skill, index) => (
//               <View key={index} style={styles.skillItem}>
//                 <Text style={styles.skillText}>{renderskillContent(skill)}</Text>
//               </View>
//             ))}
//             {remainingSkillsCount > 0 && (
//               <View style={styles.skillItem}>
//                 <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
//               </View>
//             )}
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
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

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
//         <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
//           <SearchBox />
//           <FilterBy />
//         </View>
//         <FlatList
//           data={jobs}
//           keyExtractor={(item) => item?.jobId?.toString()}
//           renderItem={renderJobItem}
//           contentContainerStyle={{ paddingBottom: 100 }} // Add padding to the bottom of the FlatList
//         />
//         <Footer />
//       </ScrollView>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   background: {
//     height: 150,
//     width: Dimensions.get('window').width,
//     opacity: 0.45,
//   },
//   texthead01: {
//     color: 'black',
//     fontSize: 22,
//     textAlign: 'left',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginTop: 10,
//   },
//   texthead02: {
//     color: 'black',
//     fontSize: 16,
//     textAlign: 'justify',
//     marginLeft: '5%',
//     marginRight: '5%',
//   },
//   myreferral: {
//     color: 'red',
//     textAlign: 'right',
//     textDecorationLine: 'underline',
//     fontSize: 13,
//     marginRight: '5%',
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
//   heading01: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: '5%',
//     marginRight: '5%',
//     color: 'black',
//     padding: 5,
//   },
//   heading02: {
//     fontSize: 13,
//     marginLeft: '5%',
//     color: '#808080',
//     textAlign: 'justify',
//     marginRight: '5%',
//     padding: 5,
//   },
//   skillsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   skillItem: {
//     padding: 3,
//     marginLeft: '5%',
//   },
//   skillText: {
//     fontSize: 13,
//     color: '#449b93',
//     backgroundColor: '#e0f9f6',
//     padding: 8,
//     borderRadius: 15,
//   },
// });

// export default Job_portal;



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------



import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { constants } from './StaticValues';

import Header from './Header';
import Footer from './Footer';
import FilterBy from './Filter';
import SearchBox from './SearchBox';

const Job_portal = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=1&limit=10&jobExperience=2-6&jobSalary=500000-1100000&jobLocation=Bangalore';
      const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Fetched jobs:', data);
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleJobPress = (job) => {
    navigation.navigate('JobDetail', { job });
  };

  const renderCellContent = (value) => {
    if (value?.length > 10) {
      return <Text>{value.substring(0, 78)}...</Text>;
    }
    return <Text>{value}</Text>;
  };

  const renderskillContent = (value) => {
    if (value?.length > 40) {
      return <Text>{value.substring(0, 50)}...</Text>;
    }
    return <Text>{value}</Text>;
  };

  const renderJobItem = ({ item }) => {
    if (!item) {
      return null;
    }

    const jobId = item.jobId || '';
    const jobTitle = item.jobTitle || '';
    const jobDescription = item.jobDescription || '';
    const jobSkills = item.jobSkills || [];

    const skillsToShow = jobSkills.slice(0, 3);
    const remainingSkillsCount = jobSkills.length - 3;

    return (
      <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity onPress={() => handleJobPress(item)}>
          <Text style={styles.heading01}>{jobTitle}</Text>
          <Text style={styles.heading02}>{renderCellContent(jobDescription)}</Text>
          <View style={styles.skillsContainer}>
            {skillsToShow.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Text style={styles.skillText}>{renderskillContent(skill)}</Text>
              </View>
            ))}
            {remainingSkillsCount > 0 && (
              <View style={styles.skillItem}>
                <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const logout = () => {
    navigation.navigate('Login');
  };

  const interviewpanel = () => {
    navigation.navigate('InterviewPanel');
  };

  const jobportal = () => {
    navigation.navigate('Job_Portal');
  };

  const sparsh = () => {
    navigation.navigate('Sparsh');
  };

  const home = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
        <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
          <Text style={styles.texthead01}>Job Portal</Text>
          <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
        </ImageBackground>
        <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
          <Text style={styles.myreferral}>My Referrals</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
          <SearchBox />
          <FilterBy />
        </View>
        <FlatList
          data={jobs.data}
          keyExtractor={(item) => item?.jobId?.toString()}
          renderItem={renderJobItem}
          contentContainerStyle={{ paddingBottom: 100 }} // Add padding to the bottom of the FlatList
        />
        <Footer />
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  background: {
    height: 150,
    width: Dimensions.get('window').width,
    opacity: 0.45,
  },
  texthead01: {
    color: 'black',
    fontSize: 22,
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
  },
  texthead02: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: '5%',
    marginRight: '5%',
  },
  myreferral: {
    color: 'red',
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontSize: 13,
    marginRight: '5%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'black',
    padding: 5,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
  },
  elevation: {
    shadowColor: 'black',
    elevation: 3,
  },
  heading01: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginRight: '5%',
    color: 'black',
    padding: 5,
  },
  heading02: {
    fontSize: 13,
    marginLeft: '5%',
    color: '#808080',
    textAlign: 'justify',
    marginRight: '5%',
    padding: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    padding: 3,
    marginLeft: '5%',
  },
  skillText: {
    fontSize: 13,
    color: '#449b93',
    backgroundColor: '#e0f9f6',
    padding: 8,
    borderRadius: 15,
  },
});

export default Job_portal;


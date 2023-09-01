// import React, { useEffect, useState, useCallback, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions, TextInput } from 'react-native';
// import Header from './Header';
// import Footer from './Footer';
// import SearchBox from './SearchBox';
// import Filter from './Filter';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; // Replace with your actual bearer token

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data.data);
//       setCurrentPage(1);
//       setMorePagesAvailable(true);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const fetchMoreJobs = async () => {
//     try {
//       const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=${currentPage + 1}`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; // Replace with your actual bearer token

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched more jobs:', data);
//       if (data.data && data.data.length > 0) {
//         setJobs((prevJobs) => [...prevJobs, ...data.data]);
//         setCurrentPage((prevPage) => prevPage + 1);
//         setMorePagesAvailable(true);
//       } else {
//         setMorePagesAvailable(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleSearch = useCallback((searchQuery) => {
//     setSearchQuery(searchQuery);
//     const normalizedQuery = searchQuery.toLowerCase();
//     const filteredJobs = jobs.filter((job) => {
//       const jobTitle = job.jobTitle || '';
//       const jobDescription = job.jobDescription || '';
//       const jobSkills = job.jobSkills || [];

//       const skills = jobSkills.join(' ');

//       return (
//         jobTitle.toLowerCase().includes(normalizedQuery) ||
//         jobDescription.toLowerCase().includes(normalizedQuery) ||
//         skills.toLowerCase().includes(normalizedQuery)
//       );
//     });
//     setFilteredJobs(filteredJobs);
//   }, [jobs, searchQuery]);

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

//   // const scrollViewRef = useRef();

//   // const handleScrollToTop = () => {
//   //   if (scrollViewRef.current) {
//   //     scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
//   //   }
//   // };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Header navigation={navigation} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
//         <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
//           <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
//           <Filter />
//         </View>
//         <FlatList
//           data={filteredJobs.length > 0 ? filteredJobs : jobs}
//           keyExtractor={(item) => item?.jobId?.toString()}
//           renderItem={renderJobItem}
//           contentContainerStyle={{ paddingBottom: 100 }}
//           onEndReached={fetchMoreJobs}
//           onEndReachedThreshold={1}
//         />

//         {/* <TouchableOpacity style={styles.scrollToTopButton} onPress={handleScrollToTop}>
//           <Text style={styles.scrollToTopButtonText}>Scroll to Top</Text>
//         </TouchableOpacity> */}
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
//   loadMoreButtonContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 10,
//     Color: '#5F9EA0',
//   },

//   scrollToTopButton: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     backgroundColor: '#449B9',
//     padding: 10,
//     borderRadius: 5,
//     zIndex: 1,
//   },
//   scrollToTopButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },

// });

// export default Job_portal;













































// import React, { useEffect, useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions, TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Header from './Header';
// import Footer from './Footer';
// import Filter from './Filter';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   const scrollViewRef = useRef();
//   const [showScrollToTop, setShowScrollToTop] = useState(false); 

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; 

//       // Adding a delay of 1 second before fetching the jobs
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data.data);
//       setCurrentPage(1);
//       setMorePagesAvailable(true);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const fetchMoreJobs = async () => {
//     try {
//       if (!morePagesAvailable) {
//         return; // No more pages available, so no need to fetch more jobs
//       }

//       const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=${currentPage + 1}`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; // Replace with your actual bearer token

//       // Adding a delay of 1 second before fetching more jobs
//       await new Promise(resolve => setTimeout(resolve, 8000));

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched more jobs:', data);
//       if (data.data && data.data.length > 0) {
//         setJobs((prevJobs) => [...prevJobs, ...data.data]);
//         setCurrentPage((prevPage) => prevPage + 1);
//         setMorePagesAvailable(true);
//       } else {
//         setMorePagesAvailable(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleScrollToTop = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     }
//   };

//   const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isVisible = offsetY > Dimensions.get('window').height;
//     setShowScrollToTop(isVisible);
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

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         onScroll={handleScroll} // Added event handler for scrolling
//         scrollEventThrottle={16} // Adjust the scroll event throttle as needed
//       >
//         <Header navigation={navigation} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
//         {/* <Filter /> */}
//         <FlatList
//           data={jobs}
//           keyExtractor={(item) => item?.jobId?.toString()}
//           renderItem={renderJobItem}
//           contentContainerStyle={styles.flatListContainer}
//           onEndReached={fetchMoreJobs}
//           onEndReachedThreshold={0.1}
//         />
        
//         <Footer />
//       </ScrollView>
//       {showScrollToTop && ( 
//           <TouchableOpacity style={styles.scrollToTopButton}   onPress={handleScrollToTop}>
//             <Icon name="arrow-up" size={24} color="#e0f9f6" />
//           </TouchableOpacity>
//         )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
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
//   flatListContainer: {
//     paddingBottom: 100,
//   },
//   scrollToTopButton: {
//     position: 'relative',
//     bottom: 20, 
//     // right: 90, 
//     alignSelf:'flex-end',
//     // zIndex : 4 ,
//     backgroundColor: 'grey',
//     borderRadius: 20,
//     padding: '2%',
//     opacity: 0.9,
//   },
// });

// export default Job_portal;































// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Searchbar } from 'react-native-paper';
// import Header from './Header';
// import Footer from './Footer';
// import Filter from './Filter';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const scrollViewRef = useRef();
//   const [showScrollToTop, setShowScrollToTop] = useState(false);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; 
      
//       await new Promise(resolve => setTimeout(resolve, 9000));

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data.data);
//       setCurrentPage(1);
//       setMorePagesAvailable(true);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const fetchMoreJobs = async () => {
//     try {
//       if (!morePagesAvailable) {
//         return;
//       }

//       const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=${currentPage + 1}`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; // Replace with your actual bearer token

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched more jobs:', data);
//       if (data.data && data.data.length > 0) {
//         setJobs((prevJobs) => [...prevJobs, ...data.data]);
//         setCurrentPage((prevPage) => prevPage + 1);
//         setMorePagesAvailable(true);
//       } else {
//         setMorePagesAvailable(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleSearch = useCallback(
//     (searchQuery) => {
//       setSearchQuery(searchQuery);
//       setCurrentPage(1);
//     },
//     []
//   );

//   useEffect(() => {
//     // Perform filtering when the searchQuery changes
//     const filteredJobs = jobs.filter((job) => {
//       const skills = job.jobSkills || [];
//       const normalizedQuery = searchQuery.toLowerCase();
//       return (
//         job.jobTitle.toLowerCase().includes(normalizedQuery) ||
//         job.jobLocation.toLowerCase().includes(normalizedQuery) ||
//         skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
//       );
//     });

//     setFilteredJobs(filteredJobs);
//   }, [searchQuery, jobs]);

 

//   const handleScrollToTop = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     }
//   };

//   const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isVisible = offsetY > Dimensions.get('window').height;
//     setShowScrollToTop(isVisible);
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

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//       >
//         <Header navigation={navigation} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
//         <View style={styles.searchContainer}>
//         <Searchbar
//           style={styles.input}
//           placeholder="Search"
//           placeholderTextColor={'#808080'}
//           value={searchQuery}
//           onChangeText={handleSearch}
//           onSubmitEditing={() => handleSearch(searchQuery)} // Trigger search on submit
//         />
//           <Filter />
//         </View>

//         <FlatList
//         data={searchQuery ? filteredJobs : jobs}
//         keyExtractor={(item) => item.jobId?.toString()}
//         renderItem={renderJobItem}
//         contentContainerStyle={styles.flatListContainer}
//         onEndReached={fetchMoreJobs}
//         onEndReachedThreshold={0.01}
//       />

//         <Footer />
//       </ScrollView>
//       {showScrollToTop && (
//         <TouchableOpacity style={styles.scrollToTopButton} onPress={handleScrollToTop}>
//           <Icon name="arrow-up" size={24} color="#e0f9f6" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
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
//     marginRight: '12%',
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
//   searchContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'center',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginTop: 20,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: 'black',
//     borderWidth: 1,
//     borderColor: 'silver',
//     borderRadius: 10,
//     paddingLeft: '2%',
//     backgroundColor: 'white',
//     width: '50%',
//     marginLeft: '2.2%',
//   },
//   flatListContainer: {
//     paddingBottom: 100,
//   },
//   scrollToTopButton: {
//     position: 'relative',
//     bottom: 20,
//     alignSelf: 'flex-end',
//     backgroundColor: 'grey',
//     borderRadius: 20,
//     padding: '2%',
//     opacity: 0.9,
//     fontSize: 14,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
// },
// });

// export default Job_portal;






















// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Searchbar } from 'react-native-paper';
// import Header from './Header';
// import Footer from './Footer';
// import Filter from './Filter';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const scrollViewRef = useRef();
//   const [showScrollToTop, setShowScrollToTop] = useState(false);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';
      
//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data.data);
//       setCurrentPage(1);
//       setMorePagesAvailable(true);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const fetchMoreJobs = async () => {
//     try {
//       if (!morePagesAvailable) {
//         return;
//       }

//       const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=${currentPage + 1}`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched more jobs:', data);
//       if (data.data && data.data.length > 0) {
//         setJobs(prevJobs => [...prevJobs, ...data.data]);
//         setCurrentPage(prevPage => prevPage + 1);
//         setMorePagesAvailable(true);
//       } else {
//         setMorePagesAvailable(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleSearch = useCallback((searchQuery) => {
//     setSearchQuery(searchQuery);
//     setCurrentPage(1);
//   }, []);

//   useEffect(() => {
//     // Perform filtering when the searchQuery changes
//     const filteredJobs = jobs.filter(job => {
//       const skills = job.jobSkills || [];
//       const normalizedQuery = searchQuery.toLowerCase();
//       return (
//         job.jobTitle.toLowerCase().includes(normalizedQuery) ||
//         job.jobLocation.toLowerCase().includes(normalizedQuery) ||
//         skills.some(skill => skill.toLowerCase().includes(normalizedQuery))
//       );
//     });

//     setFilteredJobs(filteredJobs);
//   }, [searchQuery, jobs]);

//   const handleScrollToTop = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     }
//   };

//   const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isVisible = offsetY > Dimensions.get('window').height;
//     setShowScrollToTop(isVisible);
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

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//       >
//         <Header navigation={navigation} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
//         <View style={styles.searchContainer}>
//           <Searchbar
//             style={styles.input}
//             placeholder="Search"
//             placeholderTextColor="#808080"
//             value={searchQuery}
//             onChangeText={handleSearch}
//             onSubmitEditing={() => handleSearch(searchQuery)}
//           />
//           <Filter />
//         </View>

//         <FlatList
//           data={searchQuery ? filteredJobs : jobs}
//           keyExtractor={(item) => item.jobId?.toString()}
//           renderItem={renderJobItem}
//           contentContainerStyle={styles.flatListContainer}
//           onEndReached={fetchMoreJobs}
//           onEndReachedThreshold={0.01}
//         />

//         <Footer />
//       </ScrollView>
//       {showScrollToTop && (
//         <TouchableOpacity style={styles.scrollToTopButton} onPress={handleScrollToTop}>
//           <Icon name="arrow-up" size={24} color="#e0f9f6" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
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
//     marginRight: '12%',
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
//   searchContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'center',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginTop: 20,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: 'black',
//     borderWidth: 1,
//     borderColor: 'silver',
//     borderRadius: 10,
//     paddingLeft: '2%',
//     backgroundColor: 'white',
//     width: '50%',
//     marginLeft: '2.2%',
//   },
//   flatListContainer: {
//     paddingBottom: 100,
//   },
//   scrollToTopButton: {
//     position: 'relative',
//     bottom: 20,
//     alignSelf: 'flex-end',
//     backgroundColor: 'grey',
//     borderRadius: 20,
//     padding: '2%',
//     opacity: 0.9,
//     fontSize: 14,
//   },
// });

// export default Job_portal;



































































































































// without search--------------






// import React, { useEffect, useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Header from './Header';
// import Footer from './Footer';
// import Filter from './Filter';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   const scrollViewRef = useRef();
//   const [showScrollToTop, setShowScrollToTop] = useState(false);

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';
      
//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data.data);
//       setCurrentPage(1);
//       setMorePagesAvailable(true);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const fetchMoreJobs = async () => {
//     try {
//       if (!morePagesAvailable) {
//         return;
//       }

//       const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=${currentPage + 1}`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched more jobs:', data);
//       if (data.data && data.data.length > 0) {
//         setJobs(prevJobs => [...prevJobs, ...data.data]);
//         setCurrentPage(prevPage => prevPage + 1);
//         setMorePagesAvailable(true);
//       } else {
//         setMorePagesAvailable(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleScrollToTop = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     }
//   };

//   const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isVisible = offsetY > Dimensions.get('window').height;
//     setShowScrollToTop(isVisible);
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

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//       >
//         <Header navigation={navigation} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
//         <Filter/>

//         <FlatList
//           data={jobs}
//           keyExtractor={(item) => item.jobId?.toString()}
//           renderItem={renderJobItem}
//           contentContainerStyle={styles.flatListContainer}
//           onEndReached={fetchMoreJobs}
//           onEndReachedThreshold={0.01}
//         />

//         <Footer />
//       </ScrollView>
//       {showScrollToTop && (
//         <TouchableOpacity style={styles.scrollToTopButton} onPress={handleScrollToTop}>
//           <Icon name="arrow-up" size={24} color="#e0f9f6" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
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
//     marginRight: '12%',
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
//   flatListContainer: {
//     paddingBottom: 100,
//   },
//   scrollToTopButton: {
//     position: 'relative',
//     bottom: 20,
//     alignSelf: 'flex-end',
//     backgroundColor: 'grey',
//     borderRadius: 20,
//     padding: '2%',
//     opacity: 0.9,
//     fontSize: 14,
//   },
// });

// export default Job_portal;

// add searchbar which acts as live search the key factors for search are jobLocation,jobTitle,jobSkills, when user enters those data must be fetched and dislayed









// import React, { useEffect, useState, useCallback, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import { Searchbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Header from './Header';
// import Footer from './Footer';
// import Filter from './Filter';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   const scrollViewRef = useRef();
//   const [showScrollToTop, setShowScrollToTop] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [locationQuery, setLocationQuery] = useState('');
//   const [skillsQuery, setSkillsQuery] = useState('');

//   // const [jobs, setJobs] = useState([]);
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   // const [filteredJobs, setFilteredJobs] = useState([]);
//   // const [searchQuery, setSearchQuery] = useState('');
//   // const scrollViewRef = useRef();
//   // const [showScrollToTop, setShowScrollToTop] = useState(false); 

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';
      
//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data.data);
//       setCurrentPage(1);
//       setMorePagesAvailable(true);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const fetchMoreJobs = async () => {
//     try {
//       if (!morePagesAvailable) {
//         return;
//       }

//       const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=${currentPage + 1}`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';
//       await new Promise(resolve => setTimeout(resolve, 8000));
//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched more jobs:', data);
//       if (data.data && data.data.length > 0) {
//         setJobs(prevJobs => [...prevJobs, ...data.data]);
//         setCurrentPage(prevPage => prevPage + 1);
//         setMorePagesAvailable(true);
//       } else {
//         setMorePagesAvailable(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleScrollToTop = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     }
//   };

//   const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isVisible = offsetY > Dimensions.get('window').height;
//     setShowScrollToTop(isVisible);
//   };

//   const filterJobs = (jobs, query) => {
//     return jobs.filter(job =>
//       (!query || job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
//         (job.jobDescription && job.jobDescription.toLowerCase().includes(query.toLowerCase())) ||
//         (job.location && job.location.toLowerCase().includes(query.toLowerCase())) ||
//         (job.jobSkills && job.jobSkills.some(skill =>
//           skill.toLowerCase().includes(query.toLowerCase())
//         )))
//     );
//   };

//   const renderCellContent = (value, maxLength) => {
//     if (value?.length > maxLength) {
//       return <Text>{value.substring(0, maxLength)}...</Text>;
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
//     const location = item.location || '';

//     const skillsToShow = jobSkills.slice(0, 3);
//     const remainingSkillsCount = jobSkills.length - 3;
    
//     const logout = () =>{
//       navigation.navigate('Login')
//       }
  
//       const interviewpanel = () =>{
//           navigation.navigate('InterviewPanel')
//       }
  
//       const jobportal = () => {
//           navigation.navigate('Job_Portal')
//       }
  
//       const sparsh = () => {
//           navigation.navigate('Sparsh')
//       }
  
//       const home = () => {
//           navigation.navigate()
//       }

//     return (
//       <View style={[styles.card, styles.elevation]}>
//         <TouchableOpacity onPress={() => handleJobPress(item)}>
//           <Text style={styles.heading01}>{jobTitle}</Text>
//           <Text style={styles.heading02}>{renderCellContent(jobDescription, 78)}</Text>
//           <View style={styles.skillsContainer}>
//             {skillsToShow.map((skill, index) => (
//               <View key={index} style={styles.skillItem}>
//                 <Text style={styles.skillText}>{renderCellContent(skill, 50)}</Text>
//               </View>
//             ))}
//             {remainingSkillsCount > 0 && (
//               <View style={styles.skillItem}>
//                 <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
//               </View>
//             )}
//           </View>
//           <Text style={styles.locationText}>{location}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const filteredJobs = filterJobs(jobs, searchQuery, locationQuery, skillsQuery);

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//       >
//         <Header navigation={navigation} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>
        
//         <View style={styles.searchContainer}>
//         <Searchbar
//           placeholder="Search"
//           onChangeText={setSearchQuery}
//           value={searchQuery}
//           style={styles.searchBar}
//           onChangeText={handleSearch}
//           onSubmitEditing={() => handleSearch(searchQuery)}
//         />
//         <Filter/>
//         </View>
//         <FlatList
//           data={filteredJobs}
//           keyExtractor={(item) => item.jobId?.toString()}
//           renderItem={renderJobItem}
//           contentContainerStyle={styles.flatListContainer}
//           onEndReached={fetchMoreJobs}
//           onEndReachedThreshold={0.01}
//         />

//         <Footer />
//       </ScrollView>
//       {showScrollToTop && (
//         <TouchableOpacity style={styles.scrollToTopButton} onPress={handleScrollToTop}>
//           <Icon name="arrow-up" size={24} color="#e0f9f6" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };


// import React, { useEffect, useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import { Searchbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Header from './Header';
// import Footer from './Footer';
// import Filter from './Filter';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   const scrollViewRef = useRef();
//   const [showScrollToTop, setShowScrollToTop] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data.data);
//       setCurrentPage(1);
//       setMorePagesAvailable(true);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const fetchMoreJobs = async () => {
//     try {
//       if (!morePagesAvailable) {
//         return;
//       }

//       const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=${currentPage + 1}`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//       await new Promise(resolve => setTimeout(resolve, 8000)); // Adding a delay to simulate API call

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched more jobs:', data);
//       if (data.data && data.data.length > 0) {
//         setJobs(prevJobs => [...prevJobs, ...data.data]);
//         setCurrentPage(prevPage => prevPage + 1);
//         setMorePagesAvailable(true);
//       } else {
//         setMorePagesAvailable(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleScrollToTop = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     }
//   };

//   const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isVisible = offsetY > Dimensions.get('window').height;
//     setShowScrollToTop(isVisible);
//   };

//   const filterJobs = (jobs, query) => {
//     return jobs.filter((job) => {
//       const jobTitle = job.jobTitle ? job.jobTitle.toLowerCase() : '';
//       const jobDescription = job.jobDescription
//         ? job.jobDescription.toLowerCase()
//         : '';
//       const location = job.location ? job.location.toLowerCase() : '';
//       const jobSkills = job.jobSkills || [];
  
//       return (
//         !query ||
//         jobTitle.includes(query.toLowerCase()) ||
//         jobDescription.includes(query.toLowerCase()) ||
//         location.includes(query.toLowerCase()) ||
//         jobSkills.some((skill) => skill.toLowerCase().includes(query.toLowerCase()))
//       );
//     });
//   };
  
//     const jobId = item.jobId || '';
//     const jobTitle = item.jobTitle || '';
//     const jobDescription = item.jobDescription || '';
//     const jobSkills = item.jobSkills || [];
//     const location = item.location || '';

//     const skillsToShow = jobSkills.slice(0, 3);
//     const remainingSkillsCount = jobSkills.length - 3;

//     return (
//       <View style={[styles.card, styles.elevation]}>
//         <TouchableOpacity onPress={() => handleJobPress(item)}>
//           <Text style={styles.heading01}>{jobTitle}</Text>
//           <Text style={styles.heading02}>{renderCellContent(jobDescription, 78)}</Text>
//           <View style={styles.skillsContainer}>
//             {skillsToShow.map((skill, index) => (
//               <View key={index} style={styles.skillItem}>
//                 <Text style={styles.skillText}>{renderCellContent(skill, 50)}</Text>
//               </View>
//             ))}
//             {remainingSkillsCount > 0 && (
//               <View style={styles.skillItem}>
//                 <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
//               </View>
//             )}
//           </View>
//           <Text style={styles.locationText}>{location}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         ref={scrollViewRef}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}
//       >
//         <Header navigation={navigation} />
//         <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>

//         <View style={styles.searchContainer}>
//           <Searchbar
//             placeholder="Search by title, location, or skills"
//             onChangeText={setSearchQuery}
//             value={searchQuery}
//             style={styles.searchBar}
//             onSubmitEditing={() => fetchJobs()} // If you want to fetch filtered jobs on submit
//           />
//           <Filter />
//         </View>

//         <FlatList
//           data={filteredJobs}
//           keyExtractor={(item) => item.jobId?.toString()}
//           renderItem={renderJobItem}
//           contentContainerStyle={styles.flatListContainer}
//           onEndReached={fetchMoreJobs}
//           onEndReachedThreshold={0.01}
//         />

//         <Footer />
//       </ScrollView>
//       {showScrollToTop && (
//         <TouchableOpacity style={styles.scrollToTopButton} onPress={handleScrollToTop}>
//           <Icon name="arrow-up" size={24} color="#e0f9f6" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 120,
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
//     fontWeight: "bold",
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
//     marginLeft: '5%'
//   },
//   skillText: {
//     fontSize: 13,
//     color: '#449b93',
//     backgroundColor: '#e0f9f6',
//     padding: 8,
//     borderRadius: 15,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   paginationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   paginationButton: {
//     fontSize: 15,
//     paddingHorizontal: 6,
//     color: '#808080', 
//   },
//   activePage: {
//     fontWeight: 'bold',
//     color : '#000000',
//   },
//   searchContainer: {
//     flex:1,
//     width: '100%',
//     justifyContent: 'center',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginTop: 20,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: 'black',
//     borderWidth: 1,
//     borderColor: 'silver',
//     borderRadius: 10,
//     paddingLeft: '2%',
//     backgroundColor: 'white',
//     width: '50%',
//     marginLeft: '2.2%',
//   },

// })

// export default Job_portal;

// import React, { useEffect, useState, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import { Searchbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Header from './Header';
// import Footer from './Footer';
// import Filter from './Filter';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [morePagesAvailable, setMorePagesAvailable] = useState(true);
//   const scrollViewRef = useRef();
//   const [showScrollToTop, setShowScrollToTop] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data.data);
//       setCurrentPage(1);
//       setMorePagesAvailable(true);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const fetchMoreJobs = async () => {
//     try {
//       if (!morePagesAvailable) {
//         return;
//       }

//       const apiUrl = `http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?page=${currentPage + 1}`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

//       await new Promise(resolve => setTimeout(resolve, 8000)); // Adding a delay to simulate API call

//       const response = await fetch(apiUrl, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched more jobs:', data);
//       if (data.data && data.data.length > 0) {
//         setJobs(prevJobs => [...prevJobs, ...data.data]);
//         setCurrentPage(prevPage => prevPage + 1);
//         setMorePagesAvailable(true);
//       } else {
//         setMorePagesAvailable(false);
//       }
//     } catch (error) {
//       console.error('Error fetching more jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleScrollToTop = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     }
//   };

//   const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isVisible = offsetY > Dimensions.get('window').height;
//     setShowScrollToTop(isVisible);
//   };
//   const renderCellContent = (value) => {
//     if (value?.length > 10) {
//       return <Text>{value.substring(0, 78)}...</Text>;
//     }
//     return <Text>{value}</Text>;
//   };

//   const filterJobs = (query) => {
//     return jobs.filter((job) => {
//       const jobTitle = job.jobTitle ? job.jobTitle.toLowerCase() : '';
//       const jobDescription = job.jobDescription
//         ? job.jobDescription.toLowerCase()
//         : '';
//       const location = job.location ? job.location.toLowerCase() : '';
//       const jobSkills = job.jobSkills || [];
  
//       return (
//         !query ||
//         jobTitle.includes(query.toLowerCase()) ||
//         jobDescription.includes(query.toLowerCase()) ||
//         location.includes(query.toLowerCase()) ||
//         jobSkills.some((skill) => skill.toLowerCase().includes(query.toLowerCase()))
//       );
//     });
//   };

//   const filteredJobs = filterJobs(searchQuery);

//   const renderJobItem = ({ item }) => {
//     if (!item) {
//       return null;
//     }

//     const jobId = item.jobId || '';
//     const jobTitle = item.jobTitle || '';
//     const jobDescription = item.jobDescription || '';
//     const jobSkills = item.jobSkills || [];
//     const location = item.location || '';

//     const skillsToShow = jobSkills.slice(0, 3);
//     const remainingSkillsCount = jobSkills.length - 3;

//     return (
//       <View style={[styles.card, styles.elevation]}>
//         <TouchableOpacity onPress={() => handleJobPress(item)}>
//           <Text style={styles.heading01}>{jobTitle}</Text>
//           <Text style={styles.heading02}>{renderCellContent(jobDescription, 78)}</Text>
//           <View style={styles.skillsContainer}>
//             {skillsToShow.map((skill, index) => (
//               <View key={index} style={styles.skillItem}>
//                 <Text style={styles.skillText}>{renderCellContent(skill, 50)}</Text>
//               </View>
//             ))}
//             {remainingSkillsCount > 0 && (
//               <View style={styles.skillItem}>
//                 <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
//               </View>
//             )}
//           </View>
//           <Text style={styles.locationText}>{location}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

  
//     return (
//       <View style={styles.container}>
//         <ScrollView
//           ref={scrollViewRef}
//           onScroll={handleScroll}
//           scrollEventThrottle={16}
//         >
//           <Header navigation={navigation} />
//           <ImageBackground style={styles.background} source={require('./Images/background.jpg')}>
//             <Text style={styles.texthead01}>Job Portal</Text>
//             <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//           </ImageBackground>
//           <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//             <Text style={styles.myreferral}>My Referrals</Text>
//           </TouchableOpacity>
  
//           <View style={styles.searchContainer}>
//             <Searchbar
//               placeholder="Search by title, location, or skills"
//               onChangeText={setSearchQuery}
//               value={searchQuery}
//               style={styles.searchBar}
//               onSubmitEditing={() => fetchJobs()} // If you want to fetch filtered jobs on submit
//             />
//             <Filter />
//           </View>
  
//           <FlatList
//             data={filteredJobs}
//             keyExtractor={(item) => item.jobId?.toString()}
//             renderItem={renderJobItem}
//             contentContainerStyle={styles.flatListContainer}
//             onEndReached={fetchMoreJobs}
//             onEndReachedThreshold={0.01}
//           />
  
//           <Footer />
//         </ScrollView>
//         {showScrollToTop && (
//           <TouchableOpacity style={styles.scrollToTopButton} onPress={handleScrollToTop}>
//             <Icon name="arrow-up" size={24} color="#e0f9f6" />
//           </TouchableOpacity>
//         )}
//       </View>
//   );  
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 120,
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
//     fontWeight: "bold",
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
//     marginLeft: '5%'
//   },
//   skillText: {
//     fontSize: 13,
//     color: '#449b93',
//     backgroundColor: '#e0f9f6',
//     padding: 8,
//     borderRadius: 15,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   paginationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   paginationButton: {
//     fontSize: 15,
//     paddingHorizontal: 6,
//     color: '#808080', 
//   },
//   activePage: {
//     fontWeight: 'bold',
//     color : '#000000',
//   },
//   searchContainer: {
//     flex:1,
//     width: '100%',
//     justifyContent: 'center',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginTop: 20,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: 'black',
//     borderWidth: 1,
//     borderColor: 'silver',
//     borderRadius: 10,
//     paddingLeft: '2%',
//     backgroundColor: 'white',
//     width: '50%',
//     marginLeft: '2.2%',
//   },

// })

// export default Job_portal;
























// import React, { useState } from 'react';
// import { StyleSheet, ImageBackground, Modal, Dimensions, Text, FlatList, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import CheckBox from 'react-native-check-box';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { DatePickerModal } from 'react-native-paper-dates';
// import { Button } from 'react-native-paper';
// // import { SafeAreaProvider } from 'react-native-safe-area-context';

// import Header from '../../common/header/Header';
// import Footer from '../../common/Footer';
// import { ticket, assign } from '../../common/StaticValues';

// const Sparsh = ({ navigation, onSelectionConfirmed }) => {
//   const [activeTab, setActiveTab] = useState('Tab1');
//   const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
//   const [selectedPriority, setSelectedPriority] = useState('');
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [isModalVisible, setModalVisible] = useState(false);

//   const PriorityOptions = ['High', 'Medium', 'Low'];

//   const multipleSelectionData = [
//     { id: 1, label: 'Ramya' },
//     { id: 2, label: 'Priyanka' },
//     { id: 3, label: 'Tharani' },
//     { id: 4, label: 'Sheetal' },
//     { id: 5, label: 'Khushboo' },
//     { id: 6, label: 'Sindhura' },
//     { id: 7, label: 'Meenu' },
//     { id: 8, label: 'Pooja' },
//     { id: 9, label: 'Sumona' },
//     { id: 10, label: 'Sai' },
//   ];

//   const renderName = ({ item }) => {
//     return (
//       <View>
//         <ScrollView>
//           <TouchableOpacity key={item.id} onPress={() => handleItemToggle(item)}>
//             <View style={styles.itemContainer}>
//               <CheckBox
//                 isChecked={selectedItems.includes(item.id)}
//                 onClick={() => handleItemToggle(item)}
//                 checkBoxColor="#000000"
//                 checkedCheckBoxColor="#000000"
//               />
//               <Text style={styles.text}>{item.label}</Text>
//             </View>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     );
//   };

//   const [selectedTab, setSelectedTab] = useState('All');

//   const getFilteredData = (selectedPriority) => {
//     if (selectedPriority === 'All') {
//       return ticket;
//     }
//     return ticket?.filter((item) => item.priority === selectedPriority);
//   };

//   const handleTabPress = (tabName) => {
//     setActiveTab(tabName);
//   };

//   const handleItemToggle = (item) => {
//     if (selectedItems.includes(item.id)) {
//       setSelectedItems(selectedItems.filter((id) => id !== item.id));
//     } else {
//       setSelectedItems([...selectedItems, item.id]);
//     }
//   };

//   const handleSelectionConfirm = () => {
//     setModalVisible(false);
//     if (typeof onSelectionConfirmed === 'function') {
//       onSelectionConfirmed(selectedItems);
//     }
//   };

//   const clearFilter = () => {
//     setSelectedPriority('');
//     setSelectedItems('');
//     setSelectedTab('All'); // Set selectedTab to 'All' to show all tickets
//   };

//   const ticketDetails = (ticket) => {
//     navigation.navigate('TicketDetails', { ticket });
//   };

//   const handlePrioritySelect = (option) => {
//     setSelectedPriority(option);
//     setIsPriorityDropdownOpen(false);
//     // After selecting the priority, filter the tickets based on the selected priority
//     setSelectedTab(option);
//   };

//   const togglePriorityDropdown = () => {
//     setIsPriorityDropdownOpen(!isPriorityDropdownOpen);
//   };

//   const ticketItem = ({ item }) => {
//     let backgroundColor = '#808080';
//     if (item.priority === 'High') {
//       backgroundColor = 'green';
//     } else if (item.priority === 'Medium') {
//       backgroundColor = 'blue';
//     } else if (item.priority === 'Low') {
//       backgroundColor = 'red';
//     }

//     return (
//       <View style={[styles.card, styles.elevation]}>
//         <TouchableOpacity onPress={() => ticketDetails(item)}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <Text style={[styles.priority, { backgroundColor: backgroundColor }]}>
//               <Text style={styles.texthead03}>{item.priority}</Text>
//             </Text>
//             <Text style={styles.heading02}>Created on {item.createdOn}</Text>
//           </View>
//           <Text style={styles.heading01}>{item.heading}</Text>
//           <Text style={styles.heading02}>{item.ticketdescription}</Text>
//           <Text style={styles.texthead03}>Assigned on {item.assigned}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderTabContent = () => {
//     const filteredTickets = getFilteredData(selectedPriority || selectedTab);
//     return (
//       <FlatList
//         scrollEnabled={false}
//         data={filteredTickets}
//         keyExtractor={(ticket) => ticket.id.toString()}
//         renderItem={ticketItem}
//       />
//     );
//   };

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
//       return "Created Date:";
//     }
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
//     <SafeAreaProvider>
//       <View style={styles.container}>
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           {/* Header */}
//           <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />

//           {/* Image background */}
//           <ImageBackground source={require('../../../Assets/Images/background.jpg')} style={styles.background}>
//             <Text style={styles.texthead01}>Sparsh</Text>
//             <Text style={styles.texthead02}>
//               Say Hello to Hassle-Free HR Query Resolution with sparsh : Your On-Stop Tcking Raising Platform
//             </Text>
//           </ImageBackground>

//           {/* Create new ticket */}
//           <TouchableOpacity style={styles.createbutton} onPress={() => navigation.navigate('ticket')}>
//             <Text style={styles.createbuttontext}>Create New Ticket</Text>
//           </TouchableOpacity>

//           {/* Open and Close Tickets */}
//           <View style={styles.tabContainer}>
//             <TouchableOpacity
//               style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]}
//               onPress={() => handleTabPress('Tab1')}>
//               <Text style={styles.tabText}>Open Ticket</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]}
//               onPress={() => handleTabPress('Tab2')}>
//               <Text style={styles.tabText}>Close Ticket</Text>
//             </TouchableOpacity>
//           </View>

//           {activeTab === 'Tab1' && (
//             <View>
//               <View style={styles.tabview}>
//                 <Text style={styles.text}>FilterBy</Text>
//                 <TouchableOpacity onPress={clearFilter}>
//                   <Text style={styles.clearfiltertext}>Clear Filter</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Select Ticket priority */}
//               <TouchableOpacity onPress={togglePriorityDropdown} style={styles.dropdownButton}>
//                 <Text style={styles.dropdownButtonText}>Ticket priority : {selectedPriority}</Text>
//               </TouchableOpacity>
//               <Modal transparent visible={isPriorityDropdownOpen} animationType="fade" onRequestClose={() => setIsPriorityDropdownOpen(false)}>
//                 <View style={styles.modalContainer}>
//                   <View style={styles.dropdownList}>
//                     {PriorityOptions.map((option, index) => (
//                       <TouchableOpacity style={styles.dropdownOption} key={index} onPress={() => handlePrioritySelect(option)}>
//                         <Text style={styles.dropdownOptionText}>{option}</Text>
//                       </TouchableOpacity>
//                     ))}
//                   </View>
//                 </View>
//               </Modal>

//               {/* Select Ticket assign to */}
//               <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
//                 <Text style={styles.dropdownButtonText}>Ticket Assigned To </Text>
//               </TouchableOpacity>
//               <Modal visible={isModalVisible} animationType="slide" transparent={true}>
//                 <View style={styles.modalContainer}>
//                   <View style={styles.modalContent}>
//                     <FlatList
//                       scrollEnabled={true}
//                       data={assign}
//                       keyExtractor={(item) => item?.jobId?.toString()}
//                       renderItem={renderName}
//                     />
//                     <TouchableOpacity style={styles.confirmbutton} onPress={handleSelectionConfirm}>
//                       <Text style={styles.confirmtext}>Confirm</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </Modal>
              

//               {/* date with range and custom dates */}
//       <View style={styles.container1}>
//         <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined" style={styles.button022}>
//           <Text style={styles.buttonText}>{getButtonTitle()}</Text>
//         </Button>
//         <DatePickerModal
//           mode="range"
//           visible={open}
//           onDismiss={onDismiss}
//           startDate={range.startDate}
//           endDate={range.endDate}
//           onConfirm={onConfirm}
//           startLabel="Start Date"
//           endLabel="End Date"
//           saveLabel="Save"
//         />
//       </View>
    

//               {/* Search */}
//               <View style={styles.view}>
//                 <Icon name="search" size={15} color="#666" style={styles.searchIcon} />
//                 <TextInput
//                   style={styles.textinput}
//                   maxLength={10}
//                   placeholder="search with ticket number here.."
//                   keyboardType="numeric"
//                   placeholderTextColor="#808080"
//                 />
//               </View>

//               {/* Tickets */}
//               <View>{renderTabContent()}</View>
//             </View>
//           )}
//           {activeTab === 'Tab2' && <View></View>}
//           <View style={styles.footer}>
//             <Footer />
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaProvider>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     alignContent: 'center',
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 120,
//   },
//   background: {
//     height: 150,
//     width: Dimensions.get('window').width,
//     opacity: 0.35,
//   },
//   texthead01: {
//     marginLeft: '8%',
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 20,
//     marginTop: '3%',
//     marginBottom: '5%',
//   },
//   texthead02: {
//     marginLeft: '8%',
//     marginRight: '8%',
//     color: 'black',
//     fontSize: 16,
//     marginBottom: '5%',
//     textAlign: 'justify',
//   },
//   createbutton: {
//     padding: 10,
//     borderRadius: 10,
//     textAlign: 'left',
//   },
//   createbuttontext: {
//     color: '#fff',
//     alignSelf: 'flex-end',
//     marginRight: '5%',
//     borderRadius: 10,
//     backgroundColor: '#5f9ea0',
//     padding: 10,
//     textAlign: 'center',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: '5%',
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#808080',
//     borderRadius: 10,
//   },
//   activeTab: {
//     backgroundColor: '#5f9ea0',
//   },
//   tabText: {
//     fontSize: 15,
//     color: '#fff',
//   },
//   tabview: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: '5%',
//   },
//   text: {
//     color: '#000000',
//   },
//   text01: {
//     color: '#000000',
//     marginLeft: '5%',
//   },
//   clearfiltertext: {
//     color: 'red',
//     textDecorationLine: 'underline',
//   },
//   dropdownButton: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#808080',
//     borderRadius: 15,
//     alignItems: 'center',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginBottom: '2%',
//   },
//   dropdownButtonText: {
//     fontSize: 13,
//     color: '#000000',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 5,
//     width: '80%',
//     height : '70%'
//   },
//   dropdownList: {
//     backgroundColor: '#fff',
//     width: 150,
//     borderRadius: 5,
//     padding: 10,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   dropdownOption: {
//     paddingVertical: 5,
//   },
//   dropdownOptionText: {
//     fontSize: 15,
//     color: '#000000',
//   },
//   confirmbutton: {
//     backgroundColor: '#5f9ea0',
//     marginLeft: '10%',
//     marginRight: '10%',
//     borderRadius: 10,
//   },
//   confirmtext: {
//     color: '#fff',
//     fontSize: 15,
//     alignSelf: 'center',
//     padding: 10,
//   },
//   view: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#808080',
//     margin: '5%',
//     width: '80%',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//   },
//   searchIcon: {
//     marginRight: '2%',
//   },
//   textinput: {
//     color: '#000000'
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
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
//   priority: {
//     borderRadius: 8,
//     padding: 5,
//     marginLeft: '5%'
//   },
//   texthead03: {
//     fontSize: 15,
//     color: '#fff',
//   },
//   heading01: {
//     fontSize: 16,
//     marginLeft: 20,
//     fontWeight: "bold",
//     marginBottom: 8,
//     color: 'black',
//   },
//   heading02: {
//     fontSize: 15,
//     marginBottom: 13,
//     marginLeft: 20,
//     color: 'black',
//   },
//   subtabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginBottom: 20,
//   },
//   subtabItem: {
//     alignItems: 'center',
//     padding: 8,
//     backgroundColor: '#808080',
//     marginLeft: '5%',
//     borderRadius: 5,
//     color: '#fff',
//   },
//   subactiveTab: {
//     backgroundColor: '#5f9ea0',
//   },
//   subtabText: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: '#fff',
//   },
//   manualInput: {
//     borderWidth: 0.5,
//     borderColor: '#000000',
//     borderRadius: 5,
//     padding: 5,
//     color: '#000000',
//     alignSelf: 'center',
//     margin: '1%',
//   },
//   pickButton: {
//     backgroundColor: 'blue',
//     padding: 5,
//     borderRadius: 5,
//     alignSelf: 'center',
//     marginRight: '5%',
//   },
//   pickButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   button022: {
//     // borderColor: 'black',
//     borderWidth: 1,
//     width:'100%',
//     borderRadius:15,
//   },
//   buttonText: {
//     color: 'black',
//     textAlignVertical:"center",
//     fontWeight:'400',

//   },
//   container1: {
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginBottom: '2%'
//   },
// });

// export default Sparsh;


















// import React from "react";
// import { View, StyleSheet, Text, TouchableOpacity, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
// // import { constants } from '../../common/StaticValues';

// import Header from "../../common/header/Header";
// import Footer from "../../common/Footer";
// import SearchBox from "../../common/SearchBox";
// import Filter from "../../common/Filter";

// const InterViewPanel = ({ navigation }) => {

//     const handleJobPress = (constants) => {
//         navigation.navigate('MoreDetails', { constants });
//     };

//     const renderCellContent = (value) => {
//         if (value?.length > 10) {
//             return <Text>{value.substring(0, 78)}...</Text>;
//         }
//         return <Text>{value}</Text>;
//     };

//     const renderskillContent = (value) => {
//         if (value?.length > 40) {
//             return <Text>{value.substring(0, 50)}...</Text>;
//         }
//         return <Text>{value}</Text>;
//     };

//     const renderJobItem = ({ item }) => {
//         const skillsToShow = item.skills.slice(0, 3);
//         const remainingSkillsCount = item.skills.length - 3;

//         return (
//             <View style={[styles.card, styles.elevation]}>
//                 <Text style={styles.heading01}>{item.title}</Text>
//                 <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
//                 <View style={styles.skillsContainer}>
//                     {skillsToShow.map((skill, index) => (
//                         <View key={index} style={styles.skillItem}>
//                             <Text style={styles.skillText}>{renderskillContent(skill)}</Text>
//                         </View>
//                     ))}
//                     {remainingSkillsCount > 0 && (
//                         <View style={styles.skillItem}>
//                             <Text style={styles.skillText}>+{remainingSkillsCount} more</Text>
//                         </View>
//                     )}
//                 </View>
//                 <TouchableOpacity onPress={() => handleJobPress(item)}>
//                     <Text style={styles.moredetails}>More details ➤</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     };

//     const logout = () => {
//         navigation.navigate('Login')
//     }
//     const interviewpanel = () => {
//         navigation.navigate('InterviewPanel')
//     }
//     const jobportal = () => {
//         navigation.navigate('Job_Portal')
//     }
//     const sparsh = () => {
//         navigation.navigate('Sparsh')
//     }
//     const home = () => {
//         navigation.navigate('Home')
//     }

//     return (
//         <View style={styles.container}>
//             <ScrollView>
//                 <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
//                 <ImageBackground style={styles.background} source={require('../../../Assets/Images/background.jpg')}>
//                     <Text style={styles.texthead01}>Interview Panel</Text>
//                     <Text style={styles.texthead02}>Welcome to our Interview Panel page, where you can discover everything you need to know about panel interviews and how to excel in them.</Text>
//                 </ImageBackground>
//                 <View style={styles.view}>
//                     <SearchBox />
//                     <Filter />
//                 </View>
//                 <FlatList scrollEnabled={false}
//                     data={constants}
//                     renderItem={renderJobItem}
//                     keyExtractor={(item) => item.id.toString()} />
//                 <Footer />
//             </ScrollView>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#fff',
//         alignContent: 'center',
//     },
//     background: {
//         height: 150,
//         width: Dimensions.get('window').width,
//         opacity: 0.5,
//         marginBottom: '5%',
//     },
//     texthead01: {
//         color: 'black',
//         fontSize: 22,
//         textAlign: 'left',
//         marginLeft: '5%',
//         marginRight: '5%',
//         marginTop: 10,
//         fontWeight : "bold"
//     },
//     texthead02: {
//         color: 'black',
//         fontSize: 16,
//         textAlign: 'justify',
//         marginLeft: '5%',
//         marginRight: '5%',
//     },
//     view : {
//         flexDirection: 'row',
//         width: '100%',
//         justifyContent: 'center',
//         marginLeft: '5%',
//         marginRight: '5%'
//     },
//     card: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         borderColor: 'black',
//         padding: 5,
//         marginLeft: '5%',
//         marginRight: '5%',
//         marginBottom: '5%',
//     },
//     elevation: {
//         shadowColor: 'black',
//         elevation: 3,
//     },
//     heading01: {
//         fontSize: 16,
//         fontWeight: "bold",
//         marginLeft: '5%',
//         marginRight: '5%',
//         color: 'black',
//         padding: 5,
//     },
//     heading02: {
//         fontSize: 13    ,
//         marginLeft: '5%',
//         color: '#808080',
//         textAlign: 'justify',
//         marginRight: '5%',
//         padding: 5,
//     },
//     skillsContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//     },
//     skillItem: {
//         padding : 3,
//     },
//     skillText: {
//         fontSize: 13,
//         color: '#449b93',
//         backgroundColor: '#e0f9f6',
//         padding: 8,
//         borderRadius: 15,
//     },
//     moredetails : {
//         color: 'red',
//         textAlign: 'right',
//         textDecorationLine: 'underline',
//         fontSize: 13,
//     },    
// })

// export default InterViewPanel;





// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { View, StyleSheet, Text, TouchableOpacity, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import Header from "../../common/header/Header";
// import Footer from "../../common/Footer";
// import SearchBox from "../../common/SearchBox";
// import Filter from "../../common/Filter";
// import Baseurl from "../../../constant/Baseurl";
// import { connect } from 'react-redux';
// import { setJobs, setFilteredJobs } from '../../../actions/jobActions';

// const InterViewPanel = ({ navigation, jobs, filteredJobs, setJobs, setFilteredJobs }) => {

//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [searchTotalPages, setSearchTotalPages] = useState(0);
//   const [showScrollToTop, setShowScrollToTop] = useState(false);
//   const scrollViewRef = useRef();

//   const jobsPerPage = 237;

//   const [filterCriteria, setFilterCriteria] = useState({
//     jobExperience: { jobExperienceFrom: 0, jobExperienceTo: 15 },
//     salaryRange: [0, 100],
//     location: '',
//   });

//   const calculateTotalPages = (filteredJobs) => {
//     return Math.ceil(filteredJobs?.length / jobsPerPage);
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiurl = `${Baseurl}job/get_all_jobs?limit=237`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; // Replace with your actual bearer token

//       const response = await fetch(apiurl, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${bearerToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Fetched jobs:', data);
//       setJobs(data);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const handleSearch = useCallback(
//     (searchQuery) => {
//       setSearchQuery(searchQuery);
//       setCurrentPage(1);

//       const normalizedQuery = searchQuery.toLowerCase();

//       // Update the filtered jobs based on the search query
//       const filteredJobs = jobs.data.filter((job) => {
//         const skills = job.jobSkills || [];
//         return (
//           job.jobTitle.toLowerCase().includes(normalizedQuery) ||
//           job.jobLocation.toLowerCase().includes(normalizedQuery) ||
//           skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
//         );
//       });

//       // Calculate the total pages for filtered jobs and update the searchTotalPages state
//       const totalFilteredPages = Math.ceil(filteredJobs.length / jobsPerPage);
//       setSearchTotalPages(totalFilteredPages);

//       // Set the filtered jobs in the state
//       setFilteredJobs(filteredJobs);

//       console.log('filteredJobs:', filteredJobs);
//       console.log('totalPages:', totalFilteredPages);
//     },
//     [jobs.data, jobsPerPage]
//   );

//   useEffect(() => {
//     // Recalculate total pages whenever filteredJobs changes
//     setTotalPages(calculateTotalPages(filteredJobs));
//     console.log('filteredJobs:', filteredJobs);
//     console.log('totalPages:', totalPages);
//   }, [filteredJobs]);

//   const handleApplyFilter = (filterCriteria) => {
//     // Apply filtering based on the filter criteria and set the filtered jobs
//     // const filteredJobs = jobs.data.filter((job) => {
//     //   const { jobExperience, salaryRange, location } = filterCriteria;

//     //   // Apply filtering logic here based on jobExperience, salaryRange, and location

//     //   return true; // Replace this with your actual filtering logic
//     // });

//     setFilteredJobs(filteredJobs || []);
//   };

//   useEffect(() => {
//     if (filterCriteria) {
//       handleApplyFilter(filterCriteria);
//     }
//   }, [filterCriteria]);

//   const handleJobPress = (job) => {
//     navigation.navigate('MoreDetails', { job });
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

//   const handleScrollToTop = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     }
//   };

//   const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const isVisible = offsetY > Dimensions.get('window').height;
//     setShowScrollToTop(isVisible);
//   };

//   const logout = () => {
//     navigation.navigate('Login')
//   }
//   const interviewpanel = () => {
//     navigation.navigate('InterviewPanel')
//   }
//   const jobportal = () => {
//     navigation.navigate('Job_Portal')
//   }
//   const sparsh = () => {
//     navigation.navigate('Sparsh')
//   }
//   const home = () => {
//     navigation.navigate('Home')
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         ref={scrollViewRef}
//         onScroll={handleScroll}
//         scrollEventThrottle={5}
//       >
//         <Header
//           logout={logout}
//           interviewpanel={interviewpanel}
//           jobportal={jobportal}
//           home={home}
//           sparsh={sparsh}
//         />
//         <ImageBackground
//           style={styles.background}
//           source={require('../../../Assets/Images/background.jpg')}
//         >
//           <Text style={styles.texthead01}>Interview Panel</Text>
//           <Text style={styles.texthead02}>
//             Welcome to our Interview Panel page, where you can discover
//             everything you need to know about panel interviews and how to excel
//             in them.
//           </Text>
//         </ImageBackground>
//         <View style={styles.view}>
//           <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
//           <Filter />
//         </View>
//         <FlatList
//           scrollEnabled={false}
//           data={filteredJobs.length > 0 ? filteredJobs : jobs.data}
//           renderItem={renderJobItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//         <View style={styles.footer}>
//           <Footer />
//         </View>
//       </ScrollView>
//       {showScrollToTop && (
//         <TouchableOpacity
//           style={styles.scrollToTopButton}
//           onPress={handleScrollToTop}
//         >
//           <Icon name="arrow-up" size={24} color="#e0f9f6" />
//         </TouchableOpacity>
//       )}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignContent: 'center',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 120,
//   },
//   background: {
//     height: 150,
//     width: Dimensions.get('window').width,
//     opacity: 0.5,
//     marginBottom: '5%',
//   },
//   texthead01: {
//     color: 'black',
//     fontSize: 22,
//     textAlign: 'left',
//     marginLeft: '5%',
//     marginRight: '5%',
//     marginTop: 10,
//     fontWeight: "bold"
//   },
//   texthead02: {
//     color: 'black',
//     fontSize: 16,
//     textAlign: 'justify',
//     marginLeft: '5%',
//     marginRight: '5%',
//   },
//   view: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'center',
//     marginLeft: '5%',
//     marginRight: '5%'
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
//     fontWeight: "bold",
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
//   moredetails: {
//     color: 'red',
//     textAlign: 'right',
//     textDecorationLine: 'underline',
//     fontSize: 13,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })

// const mapStateToProps = (state) => ({
//   jobs: state.jobs.jobs,
//   filteredJobs: state.jobs.filteredJobs,
// });

// const mapDispatchToProps = {
//   setJobs,
//   setFilteredJobs,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(InterViewPanel);







import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from "../../common/header/Header";
import Footer from "../../common/Footer";
import SearchBox from "../../common/SearchBox";
import Filter from "../../common/Filter";
import Baseurl from "../../../constant/Baseurl";
import { connect } from 'react-redux';
import { setJobs, setFilteredJobs } from '../../../actions/jobActions';

const InterViewPanel = ({ navigation, jobs, filteredJobs, setJobs, setFilteredJobs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const scrollViewRef = useRef();

  const jobsPerPage = 237;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const apiurl = `${Baseurl}job/get_all_jobs?limit=237`;
      const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; // Replace with your actual bearer token

      const response = await fetch(apiurl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleSearch = useCallback(
    (searchQuery) => {
      setSearchQuery(searchQuery);

      const normalizedQuery = searchQuery.toLowerCase();

      const filteredJobs = jobs.filter((job) => {
        const skills = job.jobSkills || [];
        return (
          job.jobTitle.toLowerCase().includes(normalizedQuery) ||
          job.jobLocation.toLowerCase().includes(normalizedQuery) ||
          skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
        );
      });

      setFilteredJobs(filteredJobs);
    },
    [jobs]
  );
  
  // const renderJobItem = ({ item }) => {
  //   console.log("Item:", item); // Add this line
   
  // };
  
  const renderJobItem = ({ item }) => {
    const jobTitle = item?.jobTitle || '';
    const jobDescription = item?.jobDescription || '';
    const jobSkills = item?.jobSkills || [];
    // console.log("Item:", item);
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

  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const isVisible = offsetY > Dimensions.get('window').height;
    setShowScrollToTop(isVisible);
  };

  const handleJobPress = (job) => {
    navigation.navigate('MoreDetails', { job });
  };

  const renderCellContent = (value) => {
    return <Text numberOfLines={2}>{value}</Text>;
  };

  const renderskillContent = (value) => {
    return <Text numberOfLines={1}>{value}</Text>;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={5}
      >
        <Header logout={() => navigation.navigate('Login')} />
        <ImageBackground
          style={styles.background}
          source={require('../../../Assets/Images/background.jpg')}
        >
          <Text style={styles.texthead01}>Interview Panel</Text>
          <Text style={styles.texthead02}>
            Welcome to our Interview Panel page, where you can discover
            everything you need to know about panel interviews and how to excel
            in them.
          </Text>
        </ImageBackground>
        <View style={styles.view}>
          <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
          <Filter />
        </View>
        <FlatList
          scrollEnabled={false}
          data={filteredJobs.length > 0 ? filteredJobs : jobs}
          renderItem={renderJobItem}
          keyExtractor={(item) => item?.id.toString()}
        />
        <View style={styles.footer}>
          <Footer />
        </View>
      </ScrollView>
      {showScrollToTop && (
        <TouchableOpacity
          style={styles.scrollToTopButton}
          onPress={handleScrollToTop}
        >
          <Icon name="arrow-up" size={24} color="#e0f9f6" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120,
  },
  background: {
    height: 150,
    width: Dimensions.get('window').width,
    opacity: 0.5,
    marginBottom: '5%',
  },
  texthead01: {
    color: 'black',
    fontSize: 22,
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 10,
    fontWeight: "bold"
  },
  texthead02: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    marginLeft: '5%',
    marginRight: '5%',
  },
  view: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginLeft: '5%',
    marginRight: '5%'
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
    fontWeight: "bold",
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
  moredetails: {
    color: 'red',
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontSize: 13,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  filteredJobs: state.jobs.filteredJobs,
});

const mapDispatchToProps = {
  setJobs,
  setFilteredJobs,
};

export default connect(mapStateToProps, mapDispatchToProps)(InterViewPanel);

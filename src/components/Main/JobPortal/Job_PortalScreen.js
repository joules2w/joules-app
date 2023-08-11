import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../common/Header/Header';
import Footer from '../../common/Footer';
import Filter from '../../common/Filter';
import SearchBox from '../../common/SearchBox';
import BASE_URL from '../../../constants/baseurl';

const Job_portal = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTotalPages, setSearchTotalPages] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false); 
  const scrollViewRef = useRef();

  const jobsPerPage = 100;

  const [filterCriteria, setFilterCriteria] = useState({
    jobExperience: { jobExperienceFrom: 0, jobExperienceTo: 15 },
    salaryRange: [0, 100],
    location: '',
  });

  const calculateTotalPages = (filteredJobs) => {
    return Math.ceil(filteredJobs?.length / jobsPerPage);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const apiurl = `${BASE_URL}job/get_all_jobs?limit=237`;
      const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4Mzc3Njh9.7kJGZq32P17z3bWosWS0mmoX95pKT2f5g4P63QO17Mw';
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
      console.log('Fetched jobs:', data);
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleJobPress = (job) => {
    navigation.navigate('JobDetail', { job });
  };

  const handleSearch = useCallback(
    (searchQuery) => {
      setSearchQuery(searchQuery);
      setCurrentPage(1);

      // Update the filtered jobs based on the search query
      const filteredJobs = jobs?.data?.filter((job) => {
        const skills = job.jobSkills || [];
        const normalizedQuery = searchQuery.toLowerCase();
        return (
          job.jobTitle.toLowerCase().includes(normalizedQuery) ||
          job.jobLocation.toLowerCase().includes(normalizedQuery) ||
          skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
        );
      });

      // Calculate the total pages for filtered jobs and update the searchTotalPages state
      const totalFilteredPages = Math.ceil(filteredJobs?.length / jobsPerPage);
      setSearchTotalPages(totalFilteredPages);

      // Set the filtered jobs in the state
      setFilteredJobs(filteredJobs);

      console.log('filteredJobs:', filteredJobs);
      console.log('totalPages:', totalFilteredPages);
    },
    [jobs.data, jobsPerPage]
  );

  useEffect(() => {
    // Recalculate total pages whenever filteredJobs changes
    setTotalPages(calculateTotalPages(filteredJobs));
    console.log('filteredJobs:', filteredJobs);
  console.log('totalPages:', totalPages);
  }, [filteredJobs]);

  useEffect(() => {
    // Fetch the jobs whenever the search query changes
    fetchJobs();
  }, [searchQuery]);


  const handleApplyFilter = (filterCriteria) => {
    // Apply filtering based on the filter criteria and set the filtered jobs
    // const filteredJobs = jobs?.filter((job) => {
    //   const { jobExperience, salaryRange, location } = filterCriteria;

    //   // Apply filtering logic here based on jobExperience, salaryRange, and location

    //   return true; // Replace this with your actual filtering logic
    // });

    setFilteredJobs(filteredJobs || []);
  };

  useEffect(() => {
    if (filterCriteria) {
      handleApplyFilter(filterCriteria);
    }
  }, [filterCriteria]);


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

    // Give empty values if the value is null
    const jobTitle = item.jobTitle || '';
    const jobDescription = item.jobDescription || '';
    const jobSkills = item.jobSkills || [];

    // Limiting 3 skills per job
    const skillsToShow = jobSkills.slice(0, 3);
    const remainingSkillsCount = jobSkills.length - 3;

    return (
      <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity onPress={() => handleJobPress(item)}>
          <Text style={styles.heading01}>{jobTitle}</Text>
          <Text style={styles.heading02}>{renderCellContent(jobDescription)}</Text>
          <View style={styles.skillsContainer}>
            {/* Limiting to first 3 skills only */}
            {skillsToShow.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Text style={styles.skillText}>{renderskillContent(skill)}</Text>
              </View>
            ))}
            {/* If there is more than 3 skills, then it shows number of remaining skills */}
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
      <ScrollView contentContainerStyle={styles.scrollContainer} ref={scrollViewRef}
        onScroll={handleScroll} // Added event handler for scrolling
        scrollEventThrottle={5} // Adjust the scroll event throttle as needed
        >
          {/* Heading */}
        <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />

        {/* Image Background */}
        <ImageBackground style={styles.background} source={require('../../../Assets/Images/background.jpg')}>
          <Text style={styles.texthead01}>Job Portal</Text>
          <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
        </ImageBackground>

         {/* My Referrals */}
        <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
          <Text style={styles.myreferral}>My Referrals</Text>
        </TouchableOpacity>

        {/* Search and Filter */}
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
          <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
          <Filter onApplyFilter={handleApplyFilter} />
        </View>

        {/* Job List */}
        <FlatList scrollEnabled={false}
          data={filteredJobs.length > 0 ? filteredJobs : jobs.data}
          keyExtractor={(item) => item?.jobId?.toString()}
          renderItem={renderJobItem} />
        
        <View style={styles.footer}>
          <Footer />
        </View>
      </ScrollView>
      {/* Go to top button */}
      {showScrollToTop && ( 
          <TouchableOpacity style={styles.scrollToTopButton}   onPress={handleScrollToTop}>
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
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120,
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
    marginLeft: '5%'
  },
  skillText: {
    fontSize: 13,
    color: '#449b93',
    backgroundColor: '#e0f9f6',
    padding: 8,
    borderRadius: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationButton: {
    fontSize: 15,
    paddingHorizontal: 6,
    color: '#808080', 
  },
  activePage: {
    fontWeight: 'bold',
    color : '#000000',
  },
  scrollToTopButton: {
    position: 'relative',
    bottom: 20, 
    alignSelf:'flex-end',
    backgroundColor: '#808080',
    borderRadius: 20,
    padding: '2%',
    opacity: 0.9,
  },
})

export default Job_portal;

// import React, { useState, useEffect, useCallback } from 'react';
// import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';

// import Header from './Header';
// import Footer from './Footer';
// import FilterBy from './Filter';
// import SearchBox from './SearchBox';
// import BASE_URL from '../src/constants/mainurl';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 10;

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiurl = `${BASE_URL}job/get_all_jobs?limit=237`;
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4Mzc3Njh9.7kJGZq32P17z3bWosWS0mmoX95pKT2f5g4P63QO17Mw'; // Replace with your actual bearer token
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

      
//     // Apply filter on jobs based on the filter criteria
//     const filteredJobs = data.filter((job) => {
//       const skills = job.jobSkills || [];
//       const normalizedQuery = searchQuery.toLowerCase();
//       return (
//         job.jobTitle.toLowerCase().includes(normalizedQuery) ||
//         job.jobLocation.toLowerCase().includes(normalizedQuery) ||
//         skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
//       );
//     }).filter((job) => {
//       const { jobExperienceFrom, jobExperienceTo } = filterCriteria.jobExperience;
//       const { jobSalaryFrom, jobSalaryTo } = filterCriteria.salaryRange;
//       const { location } = filterCriteria;
//       return (
//         job.jobExperienceFrom >= jobExperienceFrom &&
//         job.jobExperienceTo <= jobExperienceTo &&
//         job.jobSalaryFrom >= jobSalaryFrom * 100000 &&
//         job.jobSalaryTo <= jobSalaryTo * 100000 &&
//         (location === '' || job.jobLocation.toLowerCase().includes(location.toLowerCase()))
//       );
//     });

//       setJobs(filteredJobs);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleSearch = useCallback(
//     (searchQuery) => {
//       setSearchQuery(searchQuery);
//       const filteredJobs = jobs?.data?.filter((job) => {
//         const skills = job.jobSkills || [];
//         const normalizedQuery = searchQuery.toLowerCase();
//         return (
//           job.jobTitle.toLowerCase().includes(normalizedQuery) ||
//           job.jobLocation.toLowerCase().includes(normalizedQuery) ||
//           skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
//         );
//       });
//       setFilteredJobs(filteredJobs);
//       console.log('filteredJobs:', filteredJobs);
//     },
//     [jobs.data]
//   );

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

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const startIndex = (currentPage - 1) * jobsPerPage;
//   const endIndex = startIndex + jobsPerPage;
//   const currentJobs = filteredJobs.length > 0 ? filteredJobs?.slice(startIndex, endIndex) : jobs?.data?.slice(startIndex, endIndex);

//   const totalPages = Math.ceil((filteredJobs?.length > 0 ? filteredJobs?.length : jobs?.data?.length) / jobsPerPage);
//   console.log('totalPages:', totalPages);

//   const isPreviousButtonDisabled = currentPage === 1;
//   const isNextButtonDisabled = currentPage === totalPages;

//   const getPageNumbers = () => {
//     const pageNumbers = [];

//     // Always include the first page number
//     pageNumbers.push(1);

//     // Calculate the range of page numbers to be displayed around the current page
//     const range = 2;
//     let start = Math.max(2, currentPage - range);
//     let end = Math.min(totalPages - 1, currentPage + range);

//     // Add the page numbers in the range
//     for (let i = start; i <= end; i++) {
//       pageNumbers.push(i);
//     }

//     // Add the last page number if it's not already included
//     if (!pageNumbers.includes(totalPages) && totalPages > 1) {
//       pageNumbers.push(totalPages);
//     }

//     // Add the dots if needed
//     if (!pageNumbers.includes(2)) {
//       pageNumbers.splice(1, 0, '...');
//     }
//     if (!pageNumbers.includes(totalPages - 1) && totalPages > 2) {
//       pageNumbers.splice(pageNumbers.length - 1, 0, '...');
//     }

//     return pageNumbers;
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
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />

//         {/* Image Background */}
//         <ImageBackground style={styles.background} source={require('./Images/background.png')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>

//         {/* My Referrals */}
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>

//         {/* Search and Filter */}
//         <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
//           <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
//           <FilterBy />
//         </View>

//         {/* Job List */}
//         <FlatList scrollEnabled={false}
//           data={currentJobs}
//           keyExtractor={(item) => item?.jobId?.toString()}
//           renderItem={renderJobItem} />

//         {/* Pagination */}
//         {filteredJobs.length === 0 && totalPages > 1 && (
//           <View style={styles.paginationContainer}>
//             <TouchableOpacity onPress={handlePrevPage} disabled={isPreviousButtonDisabled}>
//               <Text style={[styles.paginationButton, isPreviousButtonDisabled && styles.disabledButton]}>Previous</Text>
//             </TouchableOpacity>
//             {getPageNumbers().map((pageNumber, index) => (
//               <TouchableOpacity key={index} onPress={() => handlePageClick(pageNumber)} disabled={pageNumber === '...' || currentPage === pageNumber}>
//                 <Text
//                   style={[styles.paginationButton, currentPage === pageNumber && styles.activePage, pageNumber === '...' && styles.disabledButton]}>{pageNumber === '...' ? '...' : pageNumber}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity onPress={handleNextPage} disabled={isNextButtonDisabled}>
//               <Text style={[styles.paginationButton, isNextButtonDisabled && styles.disabledButton]}>Next</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         <View style={styles.footer}>
//           <Footer />
//         </View>
//       </ScrollView>
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
//     color: '#000000',
//   },
// })

// export default Job_portal;




// import React, { useState, useEffect, useCallback } from 'react';
// import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';

// import Header from './Header';
// import Footer from './Footer';
// import FilterBy from './Filter';
// import SearchBox from './SearchBox';
// // import Filter from './HomeScreen';

// const Job_portal = ({ navigation }) => {
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [searchTotalPages, setSearchTotalPages] = useState(0);
//   const jobsPerPage = 10;

//   const calculateTotalPages = (filteredJobs) => {
//     return Math.ceil(filteredJobs?.length / jobsPerPage);
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const apiurl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs?limit=237';
//       const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4Mzc3Njh9.7kJGZq32P17z3bWosWS0mmoX95pKT2f5g4P63QO17Mw'; // Replace with your actual bearer token
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

//   const handleJobPress = (job) => {
//     navigation.navigate('JobDetail', { job });
//   };

//   const handleSearch = useCallback(
//     (searchQuery) => {
//       setSearchQuery(searchQuery);
//       setCurrentPage(1);

//       // Update the filtered jobs based on the search query
//       const filteredJobs = jobs?.data?.filter((job) => {
//         const skills = job.jobSkills || [];
//         const normalizedQuery = searchQuery.toLowerCase();
//         return (
//           job.jobTitle.toLowerCase().includes(normalizedQuery) ||
//           job.jobLocation.toLowerCase().includes(normalizedQuery) ||
//           skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
//         );
//       });

//       // Calculate the total pages for filtered jobs and update the searchTotalPages state
//       const totalFilteredPages = Math.ceil(filteredJobs?.length / jobsPerPage);
//       setSearchTotalPages(totalFilteredPages);

//       // Set the filtered jobs in the state
//       setFilteredJobs(filteredJobs);

//      console.log('filteredJobs:', filteredJobs);
//      console.log('totalPages:', totalFilteredPages);

//     },
//     [jobs.data, jobsPerPage]
//   );

//   useEffect(() => {
//     // Recalculate total pages whenever filteredJobs changes
//     setTotalPages(calculateTotalPages(filteredJobs));
//     console.log('filteredJobs:', filteredJobs);
//   console.log('totalPages:', totalPages);
//   }, [filteredJobs]);

//   useEffect(() => {
//     // Fetch the jobs whenever the search query changes
//     fetchJobs();
//   }, [searchQuery]);


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

//     // const jobId = item.jobId || '';
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

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // const startIndex = (currentPage - 1) * jobsPerPage;
//   // const endIndex = startIndex + jobsPerPage;
//   // const currentJobs = filteredJobs.length > 0 ? filteredJobs?.slice(startIndex, endIndex) : jobs?.data?.slice(startIndex, endIndex);

//   const startIndex = (currentPage - 1) * jobsPerPage;
// const endIndex = startIndex + jobsPerPage;
// const currentJobs = searchQuery ? filteredJobs?.slice(startIndex, endIndex) : jobs?.data?.slice(startIndex, endIndex);

//   const totalPage = Math.ceil((filteredJobs?.length > 0 ? filteredJobs?.length : jobs?.data?.length) / jobsPerPage);
//   console.log('totalPages:', totalPage);

//   const TotalPages = calculateTotalPages(filteredJobs);
//   console.log('totalPages:', TotalPages);

//   const getPageNumbers = () => {
//     const pageNumbers = [];

//     // Always include the first page number
//     pageNumbers.push(1);

//     // Calculate the range of page numbers to be displayed around the current page
//     const range = 2;
//     let start = Math.max(2, currentPage - range);
//     let end = Math.min(totalPage - 1, currentPage + range);

//     // Add the page numbers in the range
//     for (let i = start; i <= end; i++) {
//       pageNumbers.push(i);
//     }

//     // Add the last page number if it's not already included
//     if (!pageNumbers.includes(totalPage) && totalPage > 1) {
//       pageNumbers.push(totalPage);
//     }

//     // Add the dots if needed
//     if (!pageNumbers.includes(2)) {
//       pageNumbers.splice(1, 0, '...');
//     }
//     if (!pageNumbers.includes(totalPage - 1) && totalPage > 2) {
//       pageNumbers.splice(pageNumbers.length - 1, 0, '...');
//     }

//     console.log('pageNumbers:', pageNumbers);

//     return pageNumbers;
//   };


//   const isPreviousButtonDisabled = currentPage === 1;
//   const isNextButtonDisabled = currentPage === totalPage;


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
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />

//         {/* Image Background */}
//         <ImageBackground style={styles.background} source={require('./Images/background.png')}>
//           <Text style={styles.texthead01}>Job Portal</Text>
//           <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
//         </ImageBackground>

//          {/* My Referrals */}
//         <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
//           <Text style={styles.myreferral}>My Referrals</Text>
//         </TouchableOpacity>

//         {/* Search and Filter */}
//         <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
//           <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
//           <FilterBy />
//         </View>

//         {/* Job List */}
//         <FlatList scrollEnabled={false}
//           data={currentJobs}
//           keyExtractor={(item) => item?.jobId?.toString()}
//           renderItem={renderJobItem}
//         />

//         {/* Pagination */}
//         {filteredJobs.length === 0 && totalPage > 1 && (
//         <View style={styles.paginationContainer}>
//           <TouchableOpacity onPress={handlePrevPage} disabled={isPreviousButtonDisabled}>
//             <Text style={[ styles.paginationButton, isPreviousButtonDisabled && styles.disabledButton ]}>Previous</Text>
//           </TouchableOpacity>
//           {getPageNumbers().map((pageNumber, index) => (
//             <TouchableOpacity key={index} onPress={() => handlePageClick(pageNumber)} disabled={pageNumber === '...' || currentPage === pageNumber}>
//               <Text
//                 style={[ styles.paginationButton, currentPage === pageNumber && styles.activePage, pageNumber === '...' && styles.disabledButton ]}>{pageNumber === '...' ? '...' : pageNumber}</Text>
//             </TouchableOpacity>
//           ))}
//           <TouchableOpacity onPress={handleNextPage} disabled={isNextButtonDisabled}>
//             <Text style={[ styles.paginationButton, isNextButtonDisabled && styles.disabledButton ]}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//         <View style={styles.footer}>
//           <Footer />
//         </View>
//       </ScrollView>
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
// })

// export default Job_portal;
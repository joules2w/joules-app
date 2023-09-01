import React, { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Header from "../../common/header/Header";
import Footer from "../../common/Footer";
import SearchBox from "../../common/SearchBox";
import FilterBy from "../../common/Filter";

import { fetchJobs, setFilteredJobs } from '../../../actions1/jobActions';

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
  filteredJobs: state.jobs.filteredJobs,
});

const mapDispatchToProps = {
  fetchJobs,
  setFilteredJobs,
};

const Job_portal = ({ navigation, jobs, filteredJobs, fetchJobs, setFilteredJobs }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTotalPages, setSearchTotalPages] = useState(0);
  const jobsPerPage = 20;

  const calculateTotalPages = (totalItems) => {
    return Math.ceil(totalItems / jobsPerPage);
  };

  useEffect(() => {
    // Fetch all jobs initially
    fetchJobs();
  }, []);

  const handleJobPress = (job) => {
    navigation.navigate('MoreDetails', { job });
  };

  const handleSearch = useCallback(
    (query) => {
      setSearchQuery(query);
      setCurrentPage(1);

      // Update the filtered jobs based on the search query
      const normalizedQuery = query.toLowerCase();
      const newFilteredJobs = jobs?.data?.filter((job) => {
        const skills = job.jobSkills || [];
        return (
          job.jobTitle.toLowerCase().includes(normalizedQuery) ||
          job.jobDescription.toLowerCase().includes(normalizedQuery) ||
          job.jobLocation.toLowerCase().includes(normalizedQuery) ||
          skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))
        );
      });

      setFilteredJobs(newFilteredJobs);
      setSearchTotalPages(calculateTotalPages(newFilteredJobs?.length));
    },
    [jobs, setFilteredJobs]
  );

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredJobs([]); // Clear filtered jobs
  };

  useEffect(() => {
    // Recalculate total pages whenever filteredJobs changes
    setTotalPages(calculateTotalPages(filteredJobs?.length));
  }, [filteredJobs]);

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

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = searchQuery ? filteredJobs?.slice(startIndex, endIndex) : jobs?.data?.slice(startIndex, endIndex);

  const totalPage = Math.ceil((filteredJobs?.length > 0 ? filteredJobs?.length : jobs?.data?.length) / jobsPerPage);
  console.log('totalPages:', totalPage);

  const getPageNumbers = () => {
    const pageNumbers = [];

    // Always include the first page number
    pageNumbers.push(1);

    // Calculate the range of page numbers to be displayed around the current page
    const range = 2;
    let start = Math.max(2, currentPage - range);
    let end = Math.min(totalPage - 1, currentPage + range);

    // Add the page numbers in the range
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }

    // Add the last page number if it's not already included
    if (!pageNumbers.includes(totalPage) && totalPage > 1) {
      pageNumbers.push(totalPage);
    }

    // Add the dots if needed
    if (!pageNumbers.includes(2)) {
      pageNumbers.splice(1, 0, '...');
    }
    if (!pageNumbers.includes(totalPage - 1) && totalPage > 2) {
      pageNumbers.splice(pageNumbers.length - 1, 0, '...');
    }

    console.log('pageNumbers:', pageNumbers);

    return pageNumbers;
  };

  const isPreviousButtonDisabled = currentPage === 1;
  const isNextButtonDisabled = currentPage === totalPage;

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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />

        {/* Image Background */}
        <ImageBackground style={styles.background} source={require('../../../Assets/Images/background.jpg')}>
          <Text style={styles.texthead01}>Interview Panel</Text>
          <Text style={styles.texthead02}>Welcome to our Interview Panel page, where you can discover everything you need to know about panel interviews and how to excel in them.</Text>
        </ImageBackground>

        {/* My Referrals */}
        <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
          <Text style={styles.myreferral}>My Referrals</Text>
        </TouchableOpacity>

        {/* Search and Filter */}
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginLeft: '5%', marginRight: '5%' }}>
          <SearchBox searchQuery={searchQuery} onSearch={handleSearch} onClear={handleClearSearch} />
          <FilterBy />
        </View>

        {/* Job List */}
        <FlatList scrollEnabled={false}
          data={currentJobs}
          keyExtractor={(item) => item?.jobId?.toString()}
          renderItem={renderJobItem}/>

        {/* Pagination */}
        <View style={styles.paginationContainer}>
          <TouchableOpacity onPress={handlePrevPage} disabled={isPreviousButtonDisabled}>
            <Text style={[styles.paginationButton, isPreviousButtonDisabled && styles.disabledButton]}>Previous</Text>
          </TouchableOpacity>
          {getPageNumbers().map((pageNumber, index) => (
            <TouchableOpacity key={index} onPress={() => handlePageClick(pageNumber)} disabled={pageNumber === '...' || currentPage === pageNumber}>
              <Text
                style={[styles.paginationButton, currentPage === pageNumber && styles.activePage, pageNumber === '...' && styles.disabledButton]}>{pageNumber === '...' ? '...' : pageNumber}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={handleNextPage} disabled={isNextButtonDisabled}>
            <Text style={[styles.paginationButton, isNextButtonDisabled && styles.disabledButton]}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Footer />
        </View>

      </ScrollView>
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
    opacity: 0.5,
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
    color: '#000000',
  },
})

const ConnectedJob_portalScreen = connect(mapStateToProps, mapDispatchToProps)(Job_portal);

export default ConnectedJob_portalScreen;
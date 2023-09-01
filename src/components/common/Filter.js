
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, Alert } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Base_url from '../../constant/Baseurl';

const Filter = ({ onApplyFilter }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [location, setLocation] = useState('');
  const locationInputRef = useRef(null);
  const [jobExperience, setJobExperience] = useState({ jobExperienceFrom: 0, jobExperienceTo: 15 });
  const [filteredJobs, setFilteredJobs] = useState([]);

   // Define the filterCriteria state to hold the filter values
   const [filterCriteria, setFilterCriteria] = useState({
    jobExperience: { jobExperienceFrom: 0, jobExperienceTo: 15 },
    salaryRange: [0, 100],
    location: '',
  }); 

  const formatExperienceValue = (value) => {
    if (!value) return ''; // Handle the case when value is undefined or null
    // Convert value to a string
    const stringValue = value.toString();
    if (stringValue === 'Fresher') return '0 years';
    if (stringValue.includes('+')) return `${stringValue.replace('+', '')}+ years`;
    return `${stringValue} years`;
  };

  const formatSalary = (value) => {
    if (typeof value !== 'string') {
      return '';
    }
  
    // Remove any extra spaces
    const trimmedValue = value.trim();
  
    // Check if the value is in the format "50000 to 500000" or "6000000"
    const salaryRangePattern = /^(\d+)\s+to\s+(\d+)$/;
    const singleSalaryPattern = /^(\d+)$/;
  
    if (salaryRangePattern.test(trimmedValue)) {
      const matches = trimmedValue.match(salaryRangePattern);
      const from = parseInt(matches[1]);
      const to = parseInt(matches[2]);
      return `${from} LPA - ${to} LPA`;
    } else if (singleSalaryPattern.test(trimmedValue)) {
      const salaryValue = parseFloat(trimmedValue);
      const crore = Math.floor(salaryValue / 10000000);
      const lakh = Math.floor((salaryValue - crore * 10000000) / 100000);
      const thousand = Math.floor((salaryValue - crore * 10000000 - lakh * 100000) / 1000);
  
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
    }
  
    // If the value doesn't match any known format, return the original value
    return trimmedValue;
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
    setJobExperience({ jobExperienceFrom: 0, jobExperienceTo: 30 });
    setSalaryRange([0, 100]);
    setLocation('');
    locationInputRef.current.clear();
  };

  const handleApplyFilter = () => {
    const filterCriteria = {
      jobExperience,
      salaryRange,
      location,
    };
    onApplyFilter(filterCriteria);
    setModalVisible(false);
  };

  const fetchFilteredJobs = async () => {
    try {
      const apiUrl = `${Base_url}job/get_all_jobs?limit=237`;
      const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';

      // Extract filter criteria from the filterCriteria object
      const { jobExperience, salaryRange, location } = filterCriteria;

      // Build the query parameters for the filter criteria
      const queryParams = new URLSearchParams();
      queryParams.append('jobExperienceFrom', jobExperience.jobExperienceFrom);
      queryParams.append('jobExperienceTo', jobExperience.jobExperienceTo);
      queryParams.append('jobSalaryFrom', salaryRange[0] * 100000);
      queryParams.append('jobSalaryTo', salaryRange[1] * 100000);
      queryParams.append('jobLocation', location);

      // Append the query parameters to the apiUrl
      const apiUrlWithParams = `${apiUrl}?${queryParams.toString()}`;

      const response = await fetch(apiUrlWithParams, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok. Status: ${response.status}. Error: ${errorMessage}`);
      }

      const data = await response.json();
      console.log('Fetched filtered jobs:', data);

      if (data && data?.length > 0) {
        const filteredJobs = data.map((job) => ({
          title: job.jobTitle,
          experience: `${job.jobExperienceFrom} - ${job.jobExperienceTo} years`,
          salary: formatSalary(`${job.jobSalaryFrom} to ${job.jobSalaryTo}`),
          location: job.jobLocation,
        }));
        setFilteredJobs(filteredJobs);
        // Pass the filtered jobs back to the parent component (Job_portal) using onApplyFilter
        onApplyFilter(filteredJobs);
      } else {
        setFilteredJobs([]);
        Alert.alert('No Jobs Found', 'No jobs found for the applied filters.');
      }
    } catch (error) {
      console.error('Error fetching filtered jobs:', error.message);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      fetchFilteredJobs(filterCriteria); // Pass the filter criteria object here
    }
  }, [isModalVisible, filterCriteria]); 

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
                  max={30}
                  step={1}
                  allowOverlap={false}
                  snapped
                  sliderLength={200}
                  onValuesChange={handleExperienceChange}
                  minMarkerOverlapDistance={10}
                  selectedStyle={styles.selectedStyle}
                  unselectedStyle={styles.unselectedStyle} />

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
                  unselectedStyle={styles.unselectedStyle} />

                <Text style={styles.subheading}>Location</Text>
                <TextInput
                  ref={locationInputRef}
                  style={styles.textInput}
                  placeholder="Enter location"
                  placeholderTextColor="gray"
                  value={location}
                  onChangeText={setLocation} />

                <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilter}>
                  <Text style={styles.applyButtonText}>Apply Filter</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      
      <View style={styles.filteredJobsContainer}>
        <Text style={styles.filteredJobsHeading}>Filtered Jobs:</Text>
        {filteredJobs.map((job, index) => (
          <View key={index} style={styles.jobItem}>
            <Text style={styles.jobTitle}>{job.jobTitle}</Text>
            <Text style={styles.jobDetail}>{job.jobExperience}</Text>
            <Text style={styles.jobDetail}>{job.JobSalary}</Text>
            <Text style={styles.jobDetail}>{job.jobLocation}</Text>
          </View>
        ))}
      </View>
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
    marginTop : '5%',
    color: '#449B93',
    fontSize: 15,
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
  filteredJobsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  jobDetail: {
    fontSize: 14,
    color: '#555',
  },
});

export default Filter;

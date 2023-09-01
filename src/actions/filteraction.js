export const setJobExperience = (jobExperience) => ({
    type: 'SET_JOB_EXPERIENCE',
    payload: jobExperience,
  });
  
  export const setSalaryRange = (salaryRange) => ({
    type: 'SET_SALARY_RANGE',
    payload: salaryRange,
  });
  
  export const setLocation = (location) => ({
    type: 'SET_LOCATION',
    payload: location,
  });
  
  export const setFilteredJobs = (filteredJobs) => ({
    type: 'SET_FILTERED_JOBS',
    payload: filteredJobs,
  });
  
  export const fetchFilteredJobs = (jobExperience, salaryRange, location) => {
    return async (dispatch) => {
      try {
        const apiUrl = 'http://www.consultant.joulestowatts-uat.com/job/get_all_jobs';
        const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ'; // Replace with your actual bearer token
  
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jobExperienceFrom: jobExperience.jobExperienceFrom,
            jobExperienceTo: jobExperience.jobExperienceTo,
            jobSalaryFrom: salaryRange[0] * 100000,
            jobSalaryTo: salaryRange[1] * 100000,
            jobLocation: location,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log('Fetched filtered jobs:', data);
  
        if (data && data.length > 0) {
          const filteredJobs = data.map((job) => ({
            title: job.title,
            experience: `${job.experienceFrom} - ${job.experienceTo} years`,
            salary: `${formatSalary(job.salaryFrom)} - ${formatSalary(job.salaryTo)}`,
            location: job.location,
          }));
  
          dispatch(setFilteredJobs(filteredJobs));
        } else {
          dispatch(setFilteredJobs([]));
          Alert.alert('No Jobs Found', 'No jobs found for the applied filters.');
        }
      } catch (error) {
        console.error('Error fetching filtered jobs:', error);
      }
    };
  };
  
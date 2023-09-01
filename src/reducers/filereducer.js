const initialState = {
    jobExperience: { jobExperienceFrom: 0, jobExperienceTo: 15 },
    salaryRange: [0, 100],
    location: '',
    filteredJobs: [],
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JOB_EXPERIENCE':
        return {
          ...state,
          jobExperience: action.payload,
        };
      case 'SET_SALARY_RANGE':
        return {
          ...state,
          salaryRange: action.payload,
        };
      case 'SET_LOCATION':
        return {
          ...state,
          location: action.payload,
        };
      case 'SET_FILTERED_JOBS':
        return {
          ...state,
          filteredJobs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  
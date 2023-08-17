export const setJobs = (jobs) => ({
  type: 'SET_JOBS',
  payload: jobs,
});

export const setFilteredJobs = (filteredJobs) => ({
  type: 'SET_FILTERED_JOBS',
  payload: filteredJobs,
});

// jobReducer.js
const initialState = {
  jobs: [],
  filteredJobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return {
        ...state,
        jobs: action.payload,
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

export default jobReducer;
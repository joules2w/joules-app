import { SET_JOBS, SET_FILTERED_JOBS } from '../constants/jobTypes';

const initialState = {
  jobs: [],
  filteredJobs: [],
  // ... other initial state properties
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case SET_FILTERED_JOBS:
      return {
        ...state,
        filteredJobs: action.payload,
      };
    // ... other cases
    default:
      return state;
  }
};

export default jobReducer;
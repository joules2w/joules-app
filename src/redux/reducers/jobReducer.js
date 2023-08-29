import { SET_JOBS, SET_FILTERED_JOBS } from '../actions/types';

const initialState = {
  jobs: [],
  filteredJobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload
      };
    case SET_FILTERED_JOBS:
      return {
        ...state,
        filteredJobs: action.payload
      };
    default:
      return state;
  }
};

export default jobReducer;
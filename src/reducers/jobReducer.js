// // reducers/jobReducer.js
// import {SET_JOBS,SET_FILTERED_JOBS} from '../actions/types';
// const initialState = {
//     jobs: [],
//     loading: false,
//     error: null,
//     filteredJobs : [],
//   };
  
//   const jobReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case SET_JOBS:
//         return {...state, jobs: action.payload};
//       case SET_FILTERED_JOBS:
//           return {...state, filteredJobs: action.payload};
//       // case 'FETCH_JOBS_REQUEST':
//       //   return { ...state, loading: true };
//       // case 'FETCH_JOBS_SUCCESS':
//       //   return { ...state, loading: false, jobs: action.payload, error: null };
//       // case 'FETCH_JOBS_FAILURE':
//       //   return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default jobReducer;

// import { SET_JOBS, SET_FILTERED_JOBS } from '../actions/types';

// const initialState = {
//   jobs: [],
//   filteredJobs: [],
// };

// const jobReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_JOBS:
//       return {
//         ...state,
//         jobs: action.payload
//       };
//     case SET_FILTERED_JOBS:
//       return {
//         ...state,
//         filteredJobs: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default jobReducer;

// jobReducer.js
import { SET_JOBS, SET_FILTERED_JOBS } from '../actions/actiontypes';

const initialState = {
  jobs: [],
  filteredJobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return { ...state, jobs: action.payload };
    case SET_FILTERED_JOBS:
      return { ...state, filteredJobs: action.payload };
    default:
      return state;
  }
};

export default jobReducer;
  
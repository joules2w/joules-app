// // actions/jobActions.js
// import {SET_JOBS,SET_FILTERED_JOBS} from './types';
// import { Base_url } from "../constant/Baseurl";

// // actions/jobActions.js
// export const fetchJobs = () => async (dispatch) =>{
//     // return async (dispatch) => {
//     //   dispatch({ type: 'FETCH_JOBS_REQUEST' });
  
//       try {
//         const apiurl = `${Base_url}job/get_all_jobs?limit=237`; // Replace with your URL
//         const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';
//         const response = await fetch(apiurl, {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${bearerToken}`,
//             'Content-Type': 'application/json',
//           },
//         });
  
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//         const data = await response.json();

//         dispatch({ type: SET_JOBS , payload: data });
//         console.log(data);
//       } catch (error) {
//         dispatch({ type: 'FETCH_JOBS_FAILURE', payload: error.message });
//       }

//     // };

//   };
//   export const setFilteredJobs=(filteredJobs) =>({
//     type: SET_FILTERED_JOBS,
//     payload:filteredJobs,
//   })
  



// import {SET_JOBS, SET_FILTERED_JOBS} from './types';
// import { Base_url } from "../constant/Baseurl";

// export const fetchJobs = () => async (dispatch) => {
//   try {
//     const apiurl = `${Base_url}job/get_all_jobs?limit=100000`;
//     const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4Mzc3Njh9.7kJGZq32P17z3bWosWS0mmoX95pKT2f5g4P63QO17Mw';
//     const response = await fetch(apiurl, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${bearerToken}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     dispatch({ type: SET_JOBS, payload: data });
//     // console.log("Fetched jobs : ", data);
//   } catch (error) {
//     console.error('Error fetching jobs:', error);
//   }
// };

// export const setFilteredJobs = (filteredJobs) => ({
//   type: SET_FILTERED_JOBS,
//   payload: filteredJobs,
// });




// jobActions.js
import { SET_JOBS, SET_FILTERED_JOBS } from '../actions/actiontypes';

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
});

export const setFilteredJobs = (filteredJobs) => ({
  type: SET_FILTERED_JOBS,
  payload: filteredJobs,
});

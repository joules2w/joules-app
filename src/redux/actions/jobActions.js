import { SET_JOBS, SET_FILTERED_JOBS } from './types';
import BASE_URL from '../../constants/baseurl';

export const fetchJobs = () => async (dispatch) => {
  try {
    const apiurl = `${BASE_URL}job/get_all_jobs?limit=100000`;
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
    dispatch({ type: SET_JOBS, payload: data });
    // console.log("Fetched jobs : ", data);
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
};

export const setFilteredJobs = (filteredJobs) => ({
  type: SET_FILTERED_JOBS,
  payload: filteredJobs,
});
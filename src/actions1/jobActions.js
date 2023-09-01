import { SET_JOBS, SET_FILTERED_JOBS } from '../actions1/types';
import BASE_URL from '../constant/Baseurl';

export const fetchJobs = () => async (dispatch) => {
  try {
    const apiurl = `${BASE_URL}job/get_all_jobs?limit=100000`;
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAwNjdhYzQxNjY4ZTI3ZDNjNDFmNDEiLCJpYXQiOjE2ODk4MzgyMDR9.XiiXjOPpqZsj6_SRJO2GI0QHAKr4tUaUrl0FHLhp2bQ';
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
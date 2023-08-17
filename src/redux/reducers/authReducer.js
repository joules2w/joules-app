import { SET_OTP_DETAILS } from '../actions/types'; // Import SET_OTP_DETAILS type

const initialState = {
    phoneNumber: '', // Add other authentication-related states here
    otpData: null,

  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PHONE_NUMBER':
        return { 
          ...state, 
          phoneNumber: action.payload 
        };
      case SET_OTP_DETAILS:
        return {
          ...state,
          otpData: action.payload,
        };
      // Add other cases for different states
      default:
        return state;
    }
  };
  
  export default authReducer;
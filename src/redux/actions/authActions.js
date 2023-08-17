export const setPhoneNumber = (phoneNumber) => ({
    type: 'SET_PHONE_NUMBER',
    payload: phoneNumber,
  });

import { SET_OTP_DETAILS } from './types'; // Define SET_OTP_DETAILS type

export const setOtpDetails = (otpData) => ({
  type: SET_OTP_DETAILS,
  payload: otpData,
});
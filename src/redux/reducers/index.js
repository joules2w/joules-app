import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Import your other reducers here
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
  jobs : jobReducer,
  auth: authReducer, // Use meaningful names for different parts of your app
  // Add other reducers here
});

export default rootReducer;
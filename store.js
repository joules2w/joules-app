// import { createStore } from 'redux';
// import rootReducer from './src/redux/reducers';

// const store = createStore(rootReducer); // Create the store with your root reducer

// export default store;

// import authReducer from './authReducer'; // Import your other reducers here
// import jobReducer from './jobReducer';

// const rootReducer = combineReducers({
//   jobs : jobReducer,
//   auth: authReducer, // Use meaningful names for different parts of your app
//   // Add other reducers here
// });

// export default rootReducer;


import { createStore, combineReducers } from 'redux';
import jobReducer from './src/redux/actions/jobActions';
import authReducer from './src/redux/reducers/authReducer';

const rootReducer = combineReducers({
  jobs: jobReducer, 
  auth: authReducer // Add other reducers here
});

const store = createStore(rootReducer); // Create store with combined reducers

export default store;
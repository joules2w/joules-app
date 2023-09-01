// // reducers/index.js
// import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import jobReducer from './reducers/jobReducer';

// const rootReducer = combineReducers({
//   jobs: jobReducer
//   // Add other reducers here if needed
// });

// export default rootReducer;
import { combineReducers } from 'redux';
import filterReducer from './reducers/filereducer';

const rootReducer = combineReducers({
  filters: filterReducer,
  // ...other reducers
});

export default rootReducer;




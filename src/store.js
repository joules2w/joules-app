// // store.js
// // import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
// import jobReducer from './reducers/jobReducer';

// const rootReducer = combineReducers({
//     jobs: jobReducer,
//     // ... other reducers if you have them
//   });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import jobReducer from './reducers/jobReducer';

const rootReducer = combineReducers({
  jobs: jobReducer,
  // ... other reducers if you have them
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

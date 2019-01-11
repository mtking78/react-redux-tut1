import { createStore } from 'redux';
import storyReducer from '../reducers/story';

// Create the Redux store instance in a separate src/store/index.js file. It already takes a reducer, storyReducer.
const store = createStore(
  storyReducer
);

export default store;
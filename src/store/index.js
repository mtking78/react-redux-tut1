import { createStore } from 'redux';
// The Redux store in its instantiation in this file needs to get both reducers instead of only the storyReducer. Since the Redux store takes only one reducer, you have to combine both of your reducers to one reducer somehow. Let’s pretend that the store can import the combined reducer from the entry file for the reducers, the reducers/index.js file, without worrying about combining the reducers.
// import storyReducer from '../reducers/story';
import rootReducer from './reducers';

// Create the Redux store instance in a separate src/store/index.js file. It already takes a reducer, storyReducer.
const store = createStore(
  // storyReducer
  rootReducer
);

export default store;
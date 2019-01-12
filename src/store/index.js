import { createStore, applyMiddleware } from 'redux';
// Use the redux-logger middleware in your Redux store to console.log() every action, the previous state and the next state, automatically to your development tools in your browser when dispatching an action.
import { createLogger } from 'redux-logger';
// The Redux store in its instantiation in this file needs to get both reducers instead of only the storyReducer. Since the Redux store takes only one reducer, you have to combine both of your reducers to one reducer somehow. Let’s pretend that the store can import the combined reducer from the entry file for the reducers, the reducers/index.js file, without worrying about combining the reducers.
// import storyReducer from '../reducers/story';
import rootReducer from './reducers';

const logger = createLogger();

// Create the Redux store instance in a separate src/store/index.js file. It already takes a reducer, storyReducer.
const store = createStore(
  // storyReducer
  rootReducer,
  // The second argument of the createStore() function is undefined, because it is usually used for the initial state of the Redux store. We have handled the initial state in the reducers, so there is no need for us to define it here.
  undefined,
  applyMiddleware(logger)
);

export default store;
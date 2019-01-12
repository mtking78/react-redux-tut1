import { combineReducers } from 'redux';
import storyReducer from './story';
import archiveReducer from './archive';

// Combine both reducers in the src/reducers/index.js file with Redux’s helper function combineReducers(). Then the combined root reducer can be used by the Redux store.
const rootReducer = combineReducers({
  storyState: storyReducer,
  archiveState: archiveReducer,
});

export default rootReducer;
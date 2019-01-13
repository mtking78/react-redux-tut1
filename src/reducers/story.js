import { STORIES_ADD, STORIES_FETCH_ERROR, } from '../constants/actionTypes';

const INITIAL_STATE = {
  stories: [],
  error: null,
};

// The stories reducer below will keep a list of stories and an error object.
const applyAddStories = (state, action) => ({
  stories: action.stories,
  error: null,
});

// The second action type in the reducer file. It would allocate the error object in the state but keeps the list of stories empty.
const applyFecthErrorStories = (state, action) => ({
  stories: [],
  error: action.error,
});

// INITIAL_STATE sets the intial state of the store.
function storyReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case STORIES_ADD : {
      return applyAddStories(state, action);
    }
    case STORIES_FETCH_ERROR : {
      return applyFecthErrorStories(state, action);
    }
    default: return state;
  }
}

export default storyReducer;
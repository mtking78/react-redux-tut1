import { STORIES_ADD } from '../constants/actionTypes';

const INITIAL_STATE = [];

// The first action is only used to activate the saga in your root saga.
const applyAddStories = (state, action) =>
  action.stories;

// INITIAL_STATE sets the intial state of the store.
function storyReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case STORIES_ADD : {
      return applyAddStories(state, action);
    }
    default: return state;
  }
}

export default storyReducer;
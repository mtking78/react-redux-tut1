import STORY_ARCHIVE from '../constants/actionTypes';

// The initial state is an empty list, because no story is archived in the beginning.
const INITIAL_STATE = [];

const applyArchiveStory = (state, action) =>
  [ ...state, action.id ];

// A second reducer, archiveReducer, that keeps a list of references to the archived stories.
function archiveReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case STORY_ARCHIVE : {
      // When archiving a story, all the previous ids in the state and the new archived id will be merged in a new array.
      return applyArchiveStory(state, action);
    }
    default : return state;
  }
}

export default archiveReducer;
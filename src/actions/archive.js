import { STORY_ARCHIVE } from '../constants/actionTypes';

// Define the action creator that takes a story id, to identify the story to be archived, in a new file.
const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id,
});

export {
  doArchiveStory,
};
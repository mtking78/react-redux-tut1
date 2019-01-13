import {
  STORIES_ADD,
  STORIES_FETCH,
  STORIES_FETCH_ERROR
} from '../constants/actionTypes';

// Define both actions creators in the src/actions/story.js file: the first one that activates the side-effect to fetch stories by a search term and the second one that adds the fetched stories to your Redux store.
const doAddStories = stories => ({
  type: STORIES_ADD,
  stories,
});

const doFetchStories = query => ({
  type: STORIES_FETCH,
  query,
});

const doFetchErrorStories = error => ({
  type: STORIES_FETCH_ERROR,
  error,
});

export {
  doAddStories,
  doFetchStories,
  doFetchErrorStories,
};
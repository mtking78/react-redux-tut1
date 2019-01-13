import { call, put } from 'redux-saga/effects';
import { doAddStories } from '../actions/story';

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = query =>
  fetch(HN_BASE_URL + query)
  .then(response => response.json());

// In your handleFetchStories() generator function, that is used in your root saga, you can use the yield statement to write asynchronous code as it would be synchronous code. As long as the promise from the Hacker News request doesn’t resolve (or reject), the next line of code after the yield state will not be evaluated.
function* handleFetchStories(action) {
  const { query } = action;
  const result = yield call(fetchStories, query);
  // When you finally have the result from the API request, you can use the put() effect to dispatch another action.
  yield put (doAddStories(result.hits));
}

export {
  handleFetchStories,
};
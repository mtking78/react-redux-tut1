import { call, put } from 'redux-saga/effects';
import { doAddStories } from '../actions/story';
import { fetchStories } from '../api/story';

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
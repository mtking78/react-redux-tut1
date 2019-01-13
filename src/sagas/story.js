import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchErrorStories } from '../actions/story';
import { fetchStories } from '../api/story';

// In your handleFetchStories() generator function, that is used in your root saga, you can use the yield statement to write asynchronous code as it would be synchronous code. As long as the promise from the Hacker News request doesn’t resolve (or reject), the next line of code after the yield state will not be evaluated.
function* handleFetchStories(action) {
  const { query } = action;

  try {
  const result = yield call(fetchStories, query);
  // When you finally have the result from the API request, you can use the put() effect to dispatch another action.
  yield put (doAddStories(result.hits));
  // Redux Saga, because of its generators, uses try and catch statements for error handling. Every time you would get an error in your try block, you would end up in the catch block to do something with the error object. In this case, you can dispatch your new action to store the error state in your Redux store
  } catch (error) {
    yield put (doFetchErrorStories(error));
  }
}

export {
  handleFetchStories,
};
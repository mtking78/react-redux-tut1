// Introduce a root saga. It's similar to the previously implemented combined root reducer, because the Redux store expects one root saga for its creation.
import { takeEvery, all } from 'redux-saga/effects';
import { STORIES_FETCH } from '../constants/actionTypes';
import { handleFetchStories } from './story';

// The root saga watches all (hence the all function) saga activated actions by using so called effects (such as the takeEvery() effect).
function *watchAll() {
  yield all([
    takeEvery(STORIES_FETCH, handleFetchStories),
  ])
}

export default watchAll;
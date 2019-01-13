import React from 'react';
import ReactDOM from 'react-dom';
// The provider component makes the Redux store available to all React components.
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
// import { getReadableStories } from './selectors/story';
// import { doArchiveStory } from './actions/archive';
// import STORY_ARCHIVE from './constants/actionTypes';
// import * as serviceWorker from './serviceWorker';
import './index.css';

// The sample stories data has been moved to reucers/story.js to be used as an initial state.
// const stories = [
//   {
//     title: 'React',
//     url: 'https://facebook.github.io/react/',
//     author: 'Jordan Walke',
//     points: 4,
//     objectID: 0,
//   }, {
//     title: 'Redux',
//     url: 'https://github.com/reactjs/redux',
//     author: 'Dan Abramov, Andrew Clark',
//     points: 5,
//     objectID: 1,
//   },
// ];


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
// import * as serviceWorker from './serviceWorker';

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
  // An archiving function can be passed down to the Story component from your src/index.js file. In the beginning, it can be an empty function. The function will be replaced later when you will dispatch a Redux action.
  // <App stories={stories} onArchive={() => {}} />,

  // Instead of using the sample stories, you will use the stories that are stored in the Redux store. Taken that the store only saves a list of stories as state, you can simply get all the global state of the store and assume that it is the list of stories.

  //  Since the state is sliced up into two substates now, you have to adjust how you retrieve the stories from your store in the src/index.js file with the intermediate storyState now. This is a crucial step, because it shows how combined reducers slice up the state into substates.
  <App
    stories={store.getState().storyState}
    onArchive={() => {}}
  />,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

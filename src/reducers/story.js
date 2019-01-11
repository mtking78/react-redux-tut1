// The sample stories can be used as an initial state in the reducer, storyReducer. Initial state in Redux can be initialized when creating the Redux store. This is another way of creating initial state on a reducer level:
const INITIAL_STATE = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    points: 5,
    objectID: 1,
  },
];

// INITIAL_STATE sets the intial state of the store.
function storyReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    default: return state;
  }
}

export default storyReducer;
// Use both substates now, storyState and archiveState, to derive the list of stories that are not archived. The deriving of those properties from the state can either happen directly when passing props from the Redux store to the components or in an intermediate layer which can be called Redux selectors.
const isNotArchived = archivedIds => story =>
  archivedIds.indexOf(story.objectID) === -1;
// es5 syntax:
// function isNotArchived(archivedIds) {
//   return function (story) {
//     return archivedIds.indexOf(story.objectID) === -1;
//   };
// }

// Create your first selector in a new src/selectors/story.js file that only returns the part of the stories that is not archived. The archiveState is the list of archived ids.
const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));
// es5 syntax:
// function getReadableStories(state) {
//   return state.storyState.filter(isNotArchived(state.archiveState));
// }

export {
  getReadableStories,
};
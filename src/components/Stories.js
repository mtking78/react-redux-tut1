import React from 'react';
import { connect } from 'react-redux';
// import { doArchiveStory } from '../actions/archive';
import { getReadableStories } from '../selectors/story';
import Story from './Story';
import './Stories.css';

// Define an object to describe the columns in the src/components/Stories.js file:
const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

// The Stories component in the src/components/Stories.js file, receives the stories as props and renders for each story a Story component. You may want to default to an empty array that the Stories component doesn’t crash when the list of stories is null.
const Stories = ({ stories }) =>
  <div className="stories">
    {/* Use the COLUMNS object to give the Stories component matching header columns as well. That’s why the COLUMNS object got defined in the Stories component in the first place. Now, rather than doing it manually, as in the Story component, map over the object dynamically to render the header columns. Since it is an object, you have to turn it into an array of the property names, and then access the object by its keys to retrieve its properties (width, label). */}
    {/* Extract the header columns as its own StoriesHeader component to keep your components well arranged and separated by concerns. */}
    <StoriesHeader columns={COLUMNS} />
      {(stories || []).map(story =>
        <Story
          key={story.objectID}
          story={story}
          // Pass this object to your Story component in the src/components/Stories.js file. Still the Stories component has access to the object to use it later on for its own column headings.
          columns={COLUMNS}
        />
      )}
  </div>

  const StoriesHeader = ({columns }) =>
    <div className="stories-header">
      {Object.keys(COLUMNS).map(key =>
        <span
          key={key}
          style={{ width: COLUMNS[key].width }}
        >
          {COLUMNS[key].label}
        </span>
      )}
    </div>

// mapStateToProps(state, [props]) => derivedProps: It is a function that can be passed to the connect higher order components. If it is passed, the input component of the connect HOC will subscribe to updates from the Redux store. Thus, it means that every time the store subscription notices an update, the mapStateToProps() function will run. The mapStateToProps() function itself has two arguments in its function signature: the global state object from the provided Redux store and optionally the props from the parent component where the enhanced component is used eventually. After all, the function returns an object that is derived from the global state and optionally from the props from the parent component. The returned object will be merged into the remaining props that come as input from the parent component.
const mapStateToProps = state => ({
  stories: getReadableStories(state),
});

export default connect(
  mapStateToProps
)(Stories);
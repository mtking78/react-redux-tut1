import React from 'react';
import './Stories.css';
import Story from './Story';

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

export default Stories;
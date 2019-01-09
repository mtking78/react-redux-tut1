import React from 'react';
import './Stories.css';
import Story from './Story';

// Second, the Stories component in the src/components/Stories.js file, receives the stories as props and renders for each story a Story component. You may want to default to an empty array that the Stories component doesn’t crash when the list of stories is null.

const Stories = ({ stories }) =>
  <div className="stories">
    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
      />
    )}
  </div>

export default Stories;
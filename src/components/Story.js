import React from 'react';
import './Story.css';

// Third, the Story component, in the src/components/Story.js file, renders a few properties of the passed story object. The story object gets already destructured from the props in the function signature. Furthermore, the story object gets destructured as well.

const Story = ({ story }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
  } = story;

  return (
    <div className="story">
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
  );
}

export default Story;
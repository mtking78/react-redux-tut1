import React from 'react';
import './Story.css';

// Third, the Story component, in the src/components/Story.js file, renders a few properties of the passed story object. The story object gets already destructured from the props in the function signature. Furthermore, the story object gets destructured as well.

const Story = ({ story, columns }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
  } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}
      </span>
      <span style={{ width: columns.comments.width }}>{num_comments}
      </span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
      </span>
    </div>
  );
}

export default Story;
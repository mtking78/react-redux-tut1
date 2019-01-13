import React from 'react';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import ButtonInline from './Button';
import './Story.css';

// Third, the Story component, in the src/components/Story.js file, renders a few properties of the passed story object. The story object gets already destructured from the props in the function signature. Furthermore, the story object gets destructured as well.

const Story = ({ story, columns, onArchive }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    objectID,
  } = story;

  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>
        {author}
      </span>
      <span style={{ width: columns.comments.width }}>
        {num_comments}
      </span>
      <span style={{ width: columns.points.width }}>
        {points}
      </span>
      <span style={{ width: columns.archive.width }}>
        {/* // The archiving function passes the Story component in a button's onClick handler: */}
        {/* <button
          type="button"
          className="button-inline"
          onClick={() => onArchive(objectID)}
        >
          Archive
        </button> */}
        {/* Refactored button to be reusable component: */}
        <ButtonInline onClick={() => onArchive(objectID)}>
          Archive
        </ButtonInline>
      </span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(Story);
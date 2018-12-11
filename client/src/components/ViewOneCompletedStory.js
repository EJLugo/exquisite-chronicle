import React from 'react';

function ViewOneCompletedStory(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>Genre: {props.genre}</h4>
      <p>{props.body}</p>
      <button
        onClick={props.onDelete}
      >Delete Story</button>
    </div>
  )
}

export default ViewOneCompletedStory;

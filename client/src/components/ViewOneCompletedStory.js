import React from 'react';

function ViewOneCompletedStory(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <h4>Genre: {props.genre}</h4>
      <p>{props.body}</p>
    </div>
  )
}

export default ViewOneCompletedStory;

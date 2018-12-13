import React from 'react';

function ViewOnePrompt(props){
  return (
    <div>
      <h4>{props.genre}</h4>
      <p>{props.body}</p>
      <h4>{props.max_chapters}</h4>
      <h4>{props.chapter_length}</h4>

    </div>
  )
}
export default ViewOnePrompt;

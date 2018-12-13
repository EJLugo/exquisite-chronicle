import React from 'react';
import ChapterForm from './ChapterForm.js'

function ViewOnePrompt(props){
  return (
    <div>
      <h4>{props.genre}</h4>
      <p>{props.body}</p>
      <h4>{props.max_chapters}</h4>
      <h4>{props.chapter_length}</h4>
			<ChapterForm prompt_id={props.id}
									 token={props.token}
									 setView={props.setView}
			/>
    </div>
  )
}
export default ViewOnePrompt;

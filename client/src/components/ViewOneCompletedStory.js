import React from 'react';
import './ViewOneCompletedStory.css'

export default function ViewOneCompletedStory(props) {
	const story = props.story;
  return (
		<div className='story-wrapper'>
    <div className='story-book'>
      <h4>{story.title}</h4>
			<p>{story.body}</p>
    </div>
		</div>
  )
};

import React from 'react';

export default function ViewOneCompletedStory(props) {
	const story = props.story;
  return (
    <div>
      <h4>{story.title}</h4>
			<p>{story.body}</p>
    </div>
  )
};

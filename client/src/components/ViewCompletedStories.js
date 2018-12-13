import React from 'react';
import ViewOneCompletedStory from './ViewOneCompletedStory';

export default function ViewCompletedStories(props){
	const stories = props.stories;

    return(
      <div>
        <h2>Completed Stories</h2>
        {stories.map(story => (
          <ViewOneCompletedStory
            key={story.id}
            title={story.title}
            genre={story.genre}
            body={story.body}
          />
        ))}
      </div>
    )
};

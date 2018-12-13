import React from 'react';
import ViewOnePrompt from './ViewOnePrompt';

export default function ViewAllPrompts(props){
	const prompts = props.prompts;
	console.log(prompts);
    return(
      <div>
        <h2>All Prompts</h2>
        {prompts.map(prompt =>(
          <ViewOnePrompt
            key={prompt.id}
            genre={prompt.genre}
            body={prompt.body}
            max_chapters={prompt.max_chapters}
            chapter_length={prompt.chapter_length}/>
        ))}
      </div>
    )
};

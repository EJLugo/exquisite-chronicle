import React, {Component} from 'react';
import ViewOnePrompt from './ViewOnePrompt';

class ViewAllPrompts extends Component{


  render(){
    return(
      <div>
        <h2>All Prompts</h2>
        {this.state.prompts.map(prompt =>(
          <ViewOnePrompt
            key={prompt.id}
            genre={prompt.genre}
            body={prompt.body}
            max_chapters={prompt.max_chapters}
            chapter_length={prompt.chapter_length}/>
        ))}
      </div>
    )
  }
}
export default ViewAllPrompts;

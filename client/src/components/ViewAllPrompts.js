import React, {Component} from 'react';
import ViewOnePrompt from './ViewOnePrompt';

class ViewAllPrompts extends Component{
  constructor(props){
    super(props);
    this.state = {
      prompts: [
        {
          genre: 'horror',
          body: 'lsjjdfaffjdklsjf',
          max_chapters: 2,
          chapter_length: 100
        },
        {
          genre: 'romance',
          body: 'lsjjdfaffjdklsjf',
          max_chapters: 4,
          chapter_length: 200
        },
        {
          genre: 'fiction',
          body: 'lsjjdfaffjdklsjf',
          max_chapters: 6,
          chapter_length: 800
        }
      ]
    }
  }

  // async componentDidMount(){
  //   try {
  //     const data = await allPrompts();
  //     this.state.(
  //       {
  //         prompts:data
  //       }
  //     )
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

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

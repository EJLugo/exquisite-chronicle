import React, {Component} from 'react';
import ViewOneCompletedStory from './ViewOneCompletedStory';
// import allCompletedStories from '../ajax-helpers';

class ViewCompletedStories extends Component{
  constructor(props){
    super(props);
    this.state = {
      stories: [
        {title: "Title One",
         genre: "horror",
         body: "Lorem ipsum dolor sit amet,"
        },
        {title: "Title Two",
         genre: "adventure",
         body: "Lorem ipsum dolor sit amet,"
        },
        {title: "Title Three",
         genre: "fiction",
         body: "Lorem ipsum dolor sit amet,"
        },
      ]
    }
  }
  // async componentDidMount(){
  //   try {
  //     const data = await allCompletedStories();
  //     this.state(
  //       {
  //         stories: data
  //       }
  //     )
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  render(){
    return(
      <div>
        <h2>Completed Stories</h2>
        {this.state.stories.map(story => (
          <ViewOneCompletedStory
            key={story.id}
            title={story.title}
            genre={story.genre}
            body={story.body}
          />
        ))}
      </div>
    )
  }
}
export default ViewCompletedStories;

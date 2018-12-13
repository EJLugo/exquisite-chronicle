import React from 'react';
import Dropdown from './Dropdown';
import ViewOneCompletedStory from './ViewOneCompletedStory';
import { allCompletedStories } from '../ajax-helpers.js';

export default class ViewCompletedStories extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			stories: null,
		}
		this.setGenre = this.setGenre.bind(this);
	}

	async setGenre(genre){
		const stories = await allCompletedStories(genre);
		this.setState({
			stories
		})
	}
	showStories(){
		const stories = this.state.stories;
		if(stories){
			return (
				stories.map(story => {
					return <ViewOneCompletedStory story={story} />
				}
			)
		)} else {
			return <h3>Choose a Genre</h3>
		}
	};

	render(){
		return(
				<div>
					<Dropdown setGenre={this.setGenre} />
					{this.showStories()}
				</div>
		)
	}
};

import React from 'react';
import ViewOnePrompt from './ViewOnePrompt';
import Dropdown from './Dropdown.js';
import { allPrompts } from '../ajax-helpers.js';

export default class ViewAllPrompts extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			prompts: [],
		}
		this.setGenre = this.setGenre.bind(this);
	}

	async setGenre(genre){
		const token = this.props.token;
		console.log(token);
		const prompts = await allPrompts(token, genre);
		this.setState({
			prompts
		})
	}

	showPrompts(){
		const prompts = this.state.prompts;
		const token = this.props.token;
		if(this.state.prompts){
			return(
				prompts.map(prompt =>(
					<ViewOnePrompt
						key={prompt.id}
						id={prompt.id}
						token={token}
						genre={prompt.genre}
						body={prompt.body}
						max_chapters={prompt.max_chapters}
						chapter_length={prompt.chapter_length}
						setView={this.props.setView}
					/>
				))
			)
		}	else {
			return (
				<h3>Select a Genre</h3>
			)
		}
	}

		render(){
			return(
	      <div>
	        <h2>All Prompts</h2>
					<Dropdown setGenre={this.setGenre} />
					{this.showPrompts()}

	      </div>
	    )
		}
};

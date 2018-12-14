import React from 'react';
import ChapterForm from './ChapterForm.js'
import { allPromptsChapters } from '../ajax-helpers.js';

export default class ViewOnePrompt extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			lastChapter: []
		}
	}

	async componentDidMount(){
		const chapters = await allPromptsChapters(this.props.token, this.props.id);
		console.log('chapters ', chapters);
		const lastChapter = chapters.data.pop();
		this.setState({
			lastChapter
		})
	}

	render(){
		return (
	    <div>
	      <h4>{this.props.genre}</h4>
	      <p>{this.props.body}</p>
				<p>{this.state.lastChapter.body}</p>
				<ChapterForm prompt_id={this.props.id}
										 token={this.props.token}
										 setView={this.props.setView}
				/>
	    </div>
	  )
	}
};

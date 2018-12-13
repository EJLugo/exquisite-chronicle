import React, {Component} from 'react';
import { createChapter } from '../ajax-helpers.js';

export default class ChapterForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        body: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
  this.setState({
    formData: {
      body: e.target.value
    }
  });
  }

  async handleSubmit(e) {
    e.preventDefault();
		const token = this.props.token;
		const chapterData = {
			body: this.state.formData.body,
			prompt_id: this.props.prompt_id
		}
		console.log(chapterData);
		await createChapter(token, chapterData);
  }

  render(){
    return(
      <form
        className='chapter-form'
        onSubmit={this.handleSubmit}
        >
        <label>
          Enter a new chapter to the story:
          <textarea
            value={this.state.formData.body}
            onChange={this.handleChange} />
        </label>
        <input
          type='submit'
          value='submit'
        />
      </form>
    );
  }

}

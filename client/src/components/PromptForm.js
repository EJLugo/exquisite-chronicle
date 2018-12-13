import React, {Component} from 'react';
import Dropdown from './Dropdown';

export default class PromptForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      formData: {
        genre: '',
        body: '',
        max_chapters: 0,
        chapter_length: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState =>({
      formData: {
        ...prevState.formData,
        [name]:value
      }
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleGenre = (genreValue) => {
    this.setState(prevState =>({
      formData: {
        ...prevState.formData,
        genre:genreValue
      }
    }));
  }

  render(){
    return(

      <form
        className='prompt-form'
        onSubmit={this.handleSubmit}
        >
        <label>Choose a genre:</label>

        <Dropdown onSelectGenre={this.handleGenre}/>

        <label>body:</label>
        <input
          type="text"
          id="body"
          name="body"
          onChange={this.handleChange}
          value={this.state.formData.body}
        />

        <label>Chapters:</label>
        <input
          type="number"
          name="max_chapters" min="1" max="30"
          onChange={this.handleChange}
          value={this.state.formData.max_chapters}
        />

        <label>Chapter length: </label>
        <label>sentence</label>
        <input
          type="radio"
          name="chapter_length"
          value={this.state.formData.chapter_length}
          onChange={this.handleChange}/>

        <label>paragraph</label>
        <input
          type="radio"
          name="chapter_length"
          value={this.state.formData.chapter_length}
          onChange={this.handleChange}/>

        <label>page</label>
        <input
          type="radio"
          name="page"
          value={this.state.formData.chapter_length}
          onChange={this.handleChange}/>

        <label>Chapter length:</label>
        <input
          type="radio"
          name="chapter_length"
          value={this.state.formData.chapter_length}
          onChange={this.handleChange}/>

        <label>30 pages</label>
        <input
          type="checkbox"
          name="chapter_length"
          value={this.state.formData.chapter_length}
          onChange={this.handleChange}/>

        <input
          type='submit'
          value='submit'
        />
      </form>
    )
  }
}

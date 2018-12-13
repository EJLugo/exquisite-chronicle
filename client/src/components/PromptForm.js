import React, {Component} from 'react';
import Dropdown from './Dropdown';
import DropdownChapterLength from './DropdownChapterLength';

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

  handleLength = (length) => {
    this.setState(prevState =>({
      formData: {
        ...prevState.formData,
        chapter_length:length
      }
    }));
  }

  render(){
    return(

      <form
        className='prompt-form'
        onSubmit={this.handleSubmit}
        >

        <Dropdown onSelectGenre={this.handleGenre}/>

        <label>body:</label>
        <textarea
          id="body"
          name="body"
          onChange={this.handleChange}
          value={this.state.formData.body}
        />

        <label>Chapters: </label>
        <input
          type="number"
          name="max_chapters" min="1" max="30"
          onChange={this.handleChange}
          value={this.state.formData.max_chapters}
        />
        
        <DropdownChapterLength onSelectLength={this.handleLength}/>
        <input
          type='submit'
          value='submit'
        />
      </form>
    )
  }
}

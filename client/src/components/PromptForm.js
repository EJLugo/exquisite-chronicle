import React, {Component} from 'react';

export default class PromptForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        prompt: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
  this.setState({
    formData: {
      prompt: e.target.value
    }
  });
  }

  handleSubmit(e) {
    alert('A chapter was submitted: ' + this.state.formData.prompt);
    e.preventDefault();
  }

  render(){
    return(
      <form
        className='prompt-form'
        onSubmit={this.handleSubmit}
        >
        <label>
          Enter a new chapter to the story:
          <textarea
            value={this.state.formData.prompt}
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

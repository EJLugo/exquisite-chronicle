import React, {Component} from "react";

export default class Dropdown extends Component{
  constructor(props){
    super(props);
    this.state = {

      storyGenres: ['Tragedy','Science fiction','Fantasy','Mythology','Adventure','Mystery','Drama','Romance','Action / Adventure','Horror'],
      value: 'Tragedy'

    };
    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e){
    this.setState({
      value: e.target.value,
    });
}

handleSubmit(e) {
	e.preventDefault();
  this.props.setGenre(this.state.value)
}

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label >
            Select a story genre:
            <select className='dropdownList' value={this.state.value} onChange={this.handleChange}>
              {
                this.state.storyGenres.map(genre =>(
                  <option key={genre}
                          value={genre}
                    >{genre}</option>
                ))
              }
            </select>
          </label>
					<input type='submit' value="View Stories" />
        </form>
    </div>
    )
  }
}

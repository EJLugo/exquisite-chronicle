import React, {Component} from "react";

export default class Dropdown extends Component{
  constructor(props){
    super(props);
    this.state = {

      storyGenres: ['Tragedy','Science fiction','Fantasy','Mythology','Adventure','Mystery','Drama','Romance','Action / Adventure','Horror'],
      value: 'Tragedy'

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

async handleChange(e){
  let { value } = e.target;
  await this.setState({
      value
    });
  this.handleGenreChange();
}

handleSubmit(e) {
    alert('You choose: ' + this.state.storyGenres);
    e.preventDefault();
}

handleGenreChange = () => {
    let genre = this.state.value;
    this.props.onSelectGenre(genre);
}

  render(){
    return(
      <div>
        <div >
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
        </div>
    </div>
    )
  }
}

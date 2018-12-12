import React, {Component} from "react";

export default class Dropdown extends Component{
  constructor(props){
    super(props);
    this.state = {
      storyGenres: ['Tragedy','Science fiction','Fantasy','Mythology','Adventure','Mystery,','Drama','Romance','Action / Adventure','Horror']
    };
this.handleChange = this.handleChange.bind(this);
  }

handleChange(e){
    this.setState({
      value: e.target.value,
    });
}

handleSubmit(e) {
    alert('You choose: ' + this.state.storyGenres);
    e.preventDefault();
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

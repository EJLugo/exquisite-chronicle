import React, {Component} from "react";

export default class DropdownChapterLength extends Component{
  constructor(props){
    super(props);
    this.state = {

      chapter_length: ['sentence',' paragraph','page','10 pages','30 pages'],
      value: 'sentence'

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
  }

  async handleChange(e){
    let {value} = e.target;
    await this.setState({
        value
      });
    this.handleLengthChange();
  }

  handleLengthChange = () => {
    let length = this.state.value;
    this.props.onSelectLength(length);
  }

  render(){
    return(
      <div>
        <div >
          <label >
            Select the length:
            <select className='dropdownChapter' value={this.state.value} onChange={this.handleChange}>
              {
                this.state.chapter_length.map(length =>(
                  <option key={length}
                          value={length}
                    >{length}</option>
                ))
              }
            </select>
          </label>
        </div>
    </div>
    )
  }

}

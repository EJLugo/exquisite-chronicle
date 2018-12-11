import React, {Component} from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString()
    };
  }
  render() {
    return (
      <footer>
        <h4>{`\xA9 ${this.state.date}`}</h4>
      </footer>
    );
  }
}

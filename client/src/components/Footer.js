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
      <footer className= 'footer-text'>
        <h8>{`\xA9 ${this.state.date}`}</h8>
      </footer>
    );
  }
}

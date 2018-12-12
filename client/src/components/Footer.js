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
      <footer className="footer">
          <div className="footer-text">
             <p>
               <strong>Exquisite Chronicle</strong> by
               <a href="https://.com"> Group Two</a>. The source code is licensed
               <a href="https://generalassemb.ly/"> <strong>GA</strong></a>.
             </p>
          </div>
          <h4>{`\xA9 ${this.state.date}`}</h4>
      </footer>
    );
  }
}

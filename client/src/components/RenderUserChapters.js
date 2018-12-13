import React, {Component} from 'react';

export default class RenderUserChapters extends Component {
  
  renderChapters(){
    if (this.props.loggedIn) {
      return (
        <div>
          <h2>{ `Welcome Back ${ this.props.currentUser }` }</h2>
          <p>{this.state.chapters}</p>
        </div>
      );
    } else {
      return (
        <h2>Log in to see this section</h2>
      );
    }
  }

  render (){
    return(
      <div>
        <h1>Exquisite Chronicle</h1>
        { this.renderChapters() }
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Fragment } from 'react';
import './App.css';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import Dropdown from './components/Dropdown';
import ViewCompletedStories from './components/ViewCompletedStories';
import ViewAllPrompts from './components/ViewAllPrompts';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PromptForm from './components/PromptForm';
import RenderUserChapters from './components/RenderUserChapters';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      userView: 'welcome',
      loggedIn: false,
      token: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderUserview = this.renderUserview.bind(this);
    this.setView = this.setView.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.formData);
    // await this.createUser(this.state.formData);
  }


 //  async registerUser(e) {
 //   e.preventDefault();
 //   const resp = await createUser(this.state.formData);
 //   this.setState({token: resp.data.token});
 //   this.getUser();
 // }

  renderUserview() {
    const { userView } = this.state;
    switch (userView) {

    case 'register':
      return (
        <RegisterForm/>
      );
    break;

    case 'login':
      return (
        <LoginForm
        handleClick={this.handleClick.bind(this)}/>
      );
    break;

    default:
      return <Welcome />
    }
  }

  setView(view){
    this.setState({
      userView: view
    });
  }

  render() {
    const { loggedIn, currentUser } = this.state;
    return (
      <div className="App">
        <h1>Exquisite Chronicle</h1>
        <NavBar handleViewChange={this.setView}/>
        {this.renderUserview()}
        <Dropdown />
        <RenderUserChapters
          loggedIn={this.state.loggedIn}
          currentUser={this.state.currentUser}/>
        <PromptForm />
        <Footer />
      </div>
    );
  }
}

export default App;

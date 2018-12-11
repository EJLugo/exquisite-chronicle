import React, { Component } from 'react';
import { Fragment } from 'react';
import './App.css';
//import from ajax-helpers.js
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import Dropdown from './components/Dropdown';
import ViewCompletedStories from './components/ViewCompletedStories';
import ViewAllPrompts from './components/ViewAllPrompts';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PromptForm from './components/PromptForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      formData: {
        username: '',
        password: '',
        date: ''
      },
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

  renderUserview() {
    const { userView, formData } = this.state;
    const { username, password, date } = formData;
    switch (userView) {

    case 'register':
      return (
        <RegisterForm
          handleChange={this.handleChange}
          username={username}
          password={password}
          date={date}
          swapUserForm={this.swapUserForm}
        />
      );
    break;

    case 'login':
      return (
        <LoginForm
          handleChange={this.handleChange}
          username={username}
          password={password}
          swapUserForm={this.swapUserForm}
        />
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
        <Footer />
      </div>
    );
  }
}

export default App;

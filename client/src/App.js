import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      formData: {
        username: '',
        password: ''
      },
      userView: 'register',
      loggedIn: false,
      token: null,

    };

  }

  swapUserForm(){
    this.setState(prevState => {
      let view;
      if(prevState.userView === 'register'){
        view = 'login';
      }else{
        view = 'register';
      }
      return {
        userView: view
      }
    });
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
  
  render() {
    return (
      <div className="App">
        <RegisterForm />
        <LoginForm />
        <Welcome />
      </div>
    );
  }
}

export default App;

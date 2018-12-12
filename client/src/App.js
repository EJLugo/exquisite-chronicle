import React, { Component } from 'react';
import { Fragment } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import Dropdown from './components/Dropdown';
import {getUser} from './ajax-helpers.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJjYzEyOSIsImlhdCI6MTU0NDYyNjEzMn0.mnjcdmDjFFO4xmWRJR_fRGKonhTzrEpEQne7XOWdrAY',
      formData: {
        username: '',
        password: ''
      },
      userView: 'register',
      loggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderUserview = this.renderUserview.bind(this);

  }

	async componentDidMount(){
		const currentUser = await getUser(this.state.token);
		console.log(currentUser);
		this.setState({
			currentUser
		})
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

  renderUserview() {
    const { userView, formData } = this.state;
    const { username, password } = formData;
    if (userView === 'register') {
      return (
        <RegisterForm
          handleChange={this.handleChange}
          username={username}
          password={password}
          swapUserForm={this.swapUserForm}
        />
      );
    } else {
      return (
        <LoginForm
          handleChange={this.handleChange}
          username={username}
          password={password}
          swapUserForm={this.swapUserForm}
        />
      );
    }
  }

  render() {
    const { loggedIn, currentUser } = this.state;
    return (
      <div className="App">
        <h1>Exquisite Chronicle</h1>
        <Dropdown />
        <Welcome />
      {/* if currentUser is true, show username */}
        {currentUser && (
          <div>
            The current user is: {currentUser.username}
          </div>
        )}
      {/* if loggedIn is true, */}
        {loggedIn ? (
          <Fragment>
            <Welcome />
          </Fragment>
        ) : this.renderUserview()
        }
      </div>
    );
  }
}

export default App;

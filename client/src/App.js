import React, { Component } from 'react';
import { Fragment } from 'react';
import './App.css';

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import ViewCompletedStories from './components/ViewCompletedStories';
import ViewUserStories from './components/ViewUserStories';
import ViewAllPrompts from './components/ViewAllPrompts';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ViewUserContributions from './components/ViewUserContributions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      userView: 'welcome',
      token: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderUserview = this.renderUserview.bind(this);
    this.setView = this.setView.bind(this);
		this.storeToken = this.storeToken.bind(this);
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
  }

	storeToken(user_data){
		console.log(user_data);
		this.setState({
			token: user_data.token,
			currentUser: {
				username: user_data.user.username,
				id: user_data.user.id,
			}
		})
	};

  renderUserview() {
    const { userView } = this.state;
    switch (userView) {
    case 'register':
    return <RegisterForm
							storeToken={this.storeToken}
						/>
    case 'login':
    return <LoginForm
							storeToken={this.storeToken}
						/>
		case 'stories':
		return <ViewCompletedStories />
		case 'user-stories':
		return <ViewUserStories />
		case 'prompts':
		return <ViewAllPrompts />
		case 'contributions':
		return <ViewUserContributions token={this.state.token} currentUser={this.state.currentUser}/>
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
    return (
      <div className="App">
        <NavBar handleViewChange={this.setView} token={this.state.token}/>
        {this.renderUserview()}
        <Footer />
      </div>
    );
  }
}

export default App;

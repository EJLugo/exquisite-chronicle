import React, {Component} from 'react';
import { login } from '../ajax-helpers.js'
import './LoginForm.css';
import Logo from './Logo';

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      formData: {
        username: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]:value
      }
    }));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
		const user = await login(this.state.formData);
		if(user){
			this.props.storeToken(user.data);
			this.props.setView('contributions')
		} else {
			alert("Invalid Credentials")
		}
  }

  render() {
    return (
      <form
        className='login-form'
        onSubmit={this.handleSubmit}
       >
        <h2>Sign In</h2>
        <Logo/>
        <label htmlFor="username">Username</label>

        <input
          type='text'
          id='username'
          name='username'
          placeholder='username'
          onChange={this.handleChange}
          value={this.state.username}
        />

        <label htmlFor="password">Password</label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder='password'
          onChange={this.handleChange}
          value={this.state.password}
        />

        <input
          type="submit"
          value="Login"
        />
      </form>
    )
  }

}

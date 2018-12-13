import React, {Component} from 'react';
import { createUser } from '../ajax-helpers.js';

export default class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
        birthday: ''
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
		if(this.state.formData.username && this.state.formData.password && this.state.formData.birthday){
			const user = await createUser(this.state.formData);
			this.props.storeToken(user.data);
			this.props.setView('prompts');
		}
  }

  render() {
    return (
      <form
        className="register-form"
        onSubmit={this.handleSubmit}
      >
        <h2>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <label>D.O.B</label>
        <input
          type="date"
          id="date"
          name="birthday"
          onChange={this.handleChange}
          value={this.state.date}
        />

        <input type="submit" value="Register" />
      </form>
    )
  }

}

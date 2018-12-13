import React, {Component} from 'react';

export default class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
        date: ''
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
    console.log(this.state.formData);
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
          name="date"
          onChange={this.handleChange}
          value={this.state.date}
        />

        <input type="submit" value="Register" />
      </form>
    )
  }

}

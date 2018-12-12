import React, {Component} from 'react';

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
    console.log(this.state.formData);
  }

  render() {
    return (
      <form
        className='register-form'
        onSubmit={this.handleSubmit}
       >
        <h2>Sign In</h2>
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
          type="text"
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

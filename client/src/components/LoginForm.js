import React from 'react';
import './LoginForm.css';

export default (props) => (
  <form
    className='register-form'
    // onSubmit={props.handleSubmit}
    >
		<div className='inputs'>
    <label htmlFor="username">Username</label>

    <input
      type='text'
      id='username'
      name='username'
      // onChange={props.handleChange}
      // value={props.username}
    />

    <label
			htmlFor="password">Password</label>

    <input
      type="text"
      id="password"
      name="password"
      // onChange={props.handleChange}
      // value={props.password}
    />
		</div>

    <input
      type="submit"
      value="Login"
    />

  </form>
)

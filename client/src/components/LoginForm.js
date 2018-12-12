import React from 'react';

export default (props) => (
  <form
    className='register-form'
    onSubmit={props.handleSubmit}
   >
    <h2>Sign In</h2>
    <label htmlFor="username">Username</label>

    <input
      type='text'
      id='username'
      name='username'
      placeholder='username'
      onChange={props.handleChange}
      value={props.username}
    />

    <label htmlFor="password">Password</label>

    <input
      type="text"
      id="password"
      name="password"
      placeholder='password'
      onChange={props.handleChange}
      value={props.password}
    />

    <input
      type="submit"
      value="Login"
    />
  </form>
)

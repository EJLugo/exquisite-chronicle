import React from 'react';

export default (props) => (
  <form
    className="register-form"
    onSubmit={props.handleSubmit}
  >
    <h2>Register</h2>
    <label htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      name="username"
      onChange={props.handleChange}
      value={props.username}
    />
    <label htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      onChange={props.handleChange}
      value={props.password}
    />
    <label>D.O.B</label>
    <input
      type="date"
      id="date"
      name="date"
      onChange={props.handleChange}
      value={props.date}
    />

    <input type="submit" value="Register" />
  </form>
)

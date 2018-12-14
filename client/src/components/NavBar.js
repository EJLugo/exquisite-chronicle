import React from 'react';
import './NavBar.css';

export default function NavBar(props){
	const loggedIn = props.token !== '' ? true : false;


if(!loggedIn){
	return (
    <nav className='nav-bar'>
      <button className='button' onClick={() => props.handleViewChange('welcome')}>Home</button>
			<button className='button' onClick={() => props.handleViewChange('stories')}>Stories</button>
      <button className='button' onClick={() => props.handleViewChange('login')}>Login</button>
      <button className='button' onClick={() => props.handleViewChange('register')}>Register</button>
    </nav>
  )}else {
		return (
		<nav className='nav-bar'>
      <button className='button' onClick={() => props.handleViewChange('welcome')}>Home</button>
      <button className='button' onClick={() => props.handleViewChange('stories')}>Stories</button>
      <button className='button' onClick={() => props.handleViewChange('prompts')}>Open Prompts</button>
			<button className='button' onClick={() => props.handleViewChange('create-prompt')}>Create a Prompt</button>
			<button className='button' onClick={() => props.handleViewChange('contributions')}>Writings</button>
    </nav>
	)}
}

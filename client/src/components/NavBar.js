import React from 'react';

export default function NavBar(props){
  return(
    <nav className='navBar'>
      <button onClick={() => props.handleViewChange('welcome')}>HOME</button>
      <button onClick={() => props.handleViewChange('login')}>login</button>
      <button onClick={() => props.handleViewChange('register')}>register</button>
    </nav>
  )
}

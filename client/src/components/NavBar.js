import React from 'react';
import './NavBar.css';

export default function NavBar(props){
  return(
    <nav>
      <button className='button' onClick={() => props.handleViewChange('welcome')}>HOME</button>
      <button className='button' onClick={() => props.handleViewChange('login')}>login</button>
      <button className='button' onClick={() => props.handleViewChange('register')}>register</button>

    </nav>
  )
}

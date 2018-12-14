import React from 'react';
import './Welcome.css';
import Logo from  './Logo';

export default (props) => (
  <div className='welcome-container'>
    <Logo />
    <h1 className='title'>WELCOME TO</h1>
    <h2 className='second-line'>Exquisite Chronicle</h2>
    <p className='welcome-text'>A collaborative writing application based off of the idea of Exquisite Corpse,
      where several people register to participate in the genre of a particular category of narrative and
      share in the surprise of the cumulative story.</p>
  </div>
);

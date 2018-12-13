import React from 'react';
import './Welcome.css';
import Logo from  './Logo';

export default (props) => (
  <div className='welcome-container'>
    <h1>Welcome to Exquisite Chronicle</h1>
    <Logo/>
    <h1 className='title'>Welcome to Exquisite Chronicle</h1>
    <p className='welcome-text'>We are developing a writing app where based off of the idea of Exquisite Corpse,

       a collaborative story chronicle that traces its roots to the Parisian Surrealist
       Movement.</p>
    <p className='welcome-text'>Exquisite Corpse is written by several people, each of whom writes a word on a
       sheet of paper, folds the paper to conceal it, and passes it on to the next person
       for his or her contribution.</p>
    <p className='welcome-text'>We’d like to incorporate that group story writing idea into our app. A user writes
       a prompt for other users to view. Those users can then add chapters to the prompt,
      creating a collaborative story telling experience.</p>
  </div>
)

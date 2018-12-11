import React from 'react';

export default function PromptForm(){
  return(
    <form
      className='prompt-form'
      onSubmit={console.log('test')}
      >
      <label>Enter a new chapter to the story: </label>
      <input
        type='text'
        id='newChapter'
        name='newChapter'
      />
      <input
        type='submit'
        value='submit'
      />
    </form>
  )

}

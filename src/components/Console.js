import React from 'react'
import { listOfCommands } from '../commands/listOfCommands'
import { Instructions } from './Instructions';

export const Console = ({ command, clear }) => {

  const { list, commands : exec } = listOfCommands;

  let autocomplete = list.filter( word => word.includes(command));

  return <div className='animate__animated animate__fadeIn'>
    
    {
      !clear ? 
      <Instructions autocomplete={autocomplete}/> :
      'limpio'
    }

    
  </div>
}

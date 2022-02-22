import React from 'react'
import { list } from '../commands/listOfCommands'
import { Command } from './Command';
import { Instructions } from './Instructions';

export const Console = ({ command, clearScreen, stateClear }) => {




  let autocomplete = list.filter( word => word.includes(command));

  return <div className='animate__animated animate__fadeIn'>
    
    {
      clearScreen === false ? 
      <Instructions autocomplete={autocomplete}/> : <Command text={autocomplete} />
    }

    
  </div>
}

import React from 'react'
import { listOfCommands } from '../commands/listOfCommands'
import { Instructions } from './Instructions';

export const Console = ({ command, clearScreen, stateClear }) => {

  const { list, commands : exec } = listOfCommands;


  let autocomplete = list.filter( word => word.includes(command));

  let fun = exec[command]?.function();

  return <div className='animate__animated animate__fadeIn'>
    
    {
      clearScreen === false ? 
      <Instructions autocomplete={autocomplete}/> :
      fun ? command === 'clear' || command === 'cls' && stateClear(data => ({...data, clearScreen : false})) : 'An error has ocurred'
    }

    
  </div>
}

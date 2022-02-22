import React from 'react'
import { listOfCommands } from '../commands/listOfCommands'

export const Console = ({ command }) => {

  const { list } = listOfCommands;

  let autocomplete = list.filter( word => word.includes(command));

  return <div className='animate__animated animate__fadeIn'>
    
    {
      autocomplete != '' && `Maybe you want to write ${autocomplete}`
    }
    <br />
    <br />
    Instructions: 
    <br />
    <br /> 
    * Type "help" to see the commands. 
    <br /> 
    * Press enter to submit<br/>

  </div>
}

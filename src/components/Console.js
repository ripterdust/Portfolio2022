import React from 'react'
import { listOfCommands } from '../commands/listOfCommands'

export const Console = ({ command }) => {

  const { list } = listOfCommands;

  let autocomplete = list.filter( word => word.includes(command));

  return <div>
    {
      autocomplete != '' ? `Maybe you want to say: ${autocomplete}.` : 'Type "help" to see the commands.'
    }
  </div>
}

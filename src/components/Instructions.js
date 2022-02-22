import React from 'react'

export const Instructions = ({autocomplete}) => {
  return <div>
    { autocomplete != '' ? `Maybe you want to type: ${autocomplete}` : 'No command found'}
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

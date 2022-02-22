import { useState } from "react";
import { Console } from "./Console";
import { MyData } from "./MyData";

export const Hello = () => {

  const [state, setState] = useState({
    command: '',
    clear: false
  });

  const { command, clear} = state;

  const inputKeyUp = (e) => {
    let keyCode = e.keyCode || e.wich;

    if(keyCode == 13) setState(data => ({...data, clear: true}))

  }


  return (
    <div className="hello">
      <div className="command">
        <div className="sign">
          $
        </div>
        <input 
          type="text" 
          value={command} 
          onChange={(e) => 
          setState(state => ({...state, command : e.target.value}))} 
          placeholder="Type your command..." 
          onKeyUp={e => inputKeyUp(e)}
          />
      </div>
      <div className="terminal-function">

        
        { 
          !clear ? command === '' ? <MyData/> : <Console command={command} clear={clear} /> :
          'Acá irá la función'
        }
      </div>
    </div>
  )
}

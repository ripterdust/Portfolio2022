import { useState } from "react";
import { Console } from "./Console";

export const Hello = () => {

  const [command, setCommand] = useState('');


  return (
    <div className="hello">
      <div className="command">
        <div className="sign">
          $
        </div>
        <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} placeholder="Type your command..." />
      </div>
      { command == '' ? 'Vacío' : <Console/> }
    </div>
  )
}

import { useState } from "react";
import { Console } from "./Console";
import { MyData } from "./MyData";

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
      <div className="terminal-function">
        { command == '' ? <MyData/> : <Console command={command}/> }
      </div>
    </div>
  )
}

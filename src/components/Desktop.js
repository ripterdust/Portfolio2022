import React from 'react'
import { handleClick } from '../helpers/desktopHelper'
import { Files } from './Desktop/Files'

export const Desktop = () => {

  return (
    <div className='desktop'>
      <div className="icons">
        <div className="icon" onClick={() => handleClick('terminal', 'terminal')}>
          <i className="fa-solid fa-terminal terminal-icon"></i>
          Portfolio<br />[Terminal]
        </div>

        <div className="icon" onClick={() => handleClick('files', 'files') }>
          <i className="fa-solid fa-folder folder"></i>
          Files
        </div>
      </div>

      <Files/>
    </div>
  )
}

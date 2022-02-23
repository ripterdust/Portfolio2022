import React from 'react'
import { startMenu } from '../helpers/taskHelper'
import { StartMenu } from './Desktop/StartMenu'

export const TaskBar = () => {


  return (
    <div className='taskbar'>
      <div className="icon start" onClick={ startMenu }>
        <i className="fa-brands fa-windows so-icon"></i>
        <StartMenu/>

      </div>
      <div id='task-terminal' className='icon'>
        <i className="fa-solid fa-terminal terminal-icon-logo" ></i>
      </div>

      <div className="hiden" id="task-files">
        <i className="fa-solid fa-folder folder"></i>
      </div>
    </div>
  )
}

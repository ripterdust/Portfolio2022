import React from 'react'
import { startMenu } from '../helpers/taskHelper'
import { StartMenu } from './Desktop/StartMenu'

export const TaskBar = () => {


  return (
    <div className='taskbar'>
      <div className="icon start" onClick={ startMenu }>
        <i class="fa-brands fa-windows so-icon"></i>
        <StartMenu/>

      </div>
      <div id='task-terminal' className='icon'>
        <i class="fa-solid fa-terminal terminal-icon-logo" ></i>
      </div>

      <div className="hiden" id="task-files">
        <i class="fa-solid fa-folder folder"></i>
      </div>
    </div>
  )
}

import React from 'react'

export const Desktop = () => {

  const handleClick = (id, elemClass) => {
    const element = document.querySelector(`#${id}`).classList;
    const task = document.querySelector(`#task-${elemClass}`).classList;
    console.log(task)
    task.remove('hiden')
    task.add('icon')
    element.remove('hiden');
    element.add(elemClass);

  }

  return (
    <div className='desktop'>
      <div className="icons">
        <div className="icon" onClick={() => handleClick('terminal', 'terminal')}>
          <i class="fa-solid fa-terminal terminal-icon"></i>
          Portfolio<br />[Terminal]
        </div>

        <div className="icon">
          <i class="fa-solid fa-folder folder"></i>
          Files
        </div>
      </div>
    </div>
  )
}

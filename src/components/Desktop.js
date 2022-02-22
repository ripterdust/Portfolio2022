import React from 'react'

export const Desktop = () => {

  const handleClick = (id, elemClass) => {
    const element = document.querySelector(`#${id}`).classList;
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
      </div>
    </div>
  )
}

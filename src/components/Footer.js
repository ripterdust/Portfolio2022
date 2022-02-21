import React, { useState } from 'react'

export const Footer = () => {

  const [date, setDate] = useState('1:37 21/02/2022');
  
  return (
    <div className='footer'>
      <div className="social">
        <div className='item' >Find me in:</div>
        <a className='item' href="">link</a>
        <a className='item' href="">link</a>
        <a className='item' href="">link</a>
      </div>
      <div className="time">
        {
          date
        }
      </div>
    </div>
  )
}

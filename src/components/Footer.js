import { useState } from "react"

export const Footer = () => {
  
  let date = new Date()

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
          date.toLocaleDateString()
        }
      </div>
    </div>
  )
}

import React from 'react'
import { Buttons } from '../Buttons'

export const Files = () => {
  return (
    <div id='files' className='hiden animate__animated animate__fadeIn' >
      <Buttons classToHide = { 'files' } />
      <i className="fa-solid fa-file-pdf"></i>
    </div>
  )
}

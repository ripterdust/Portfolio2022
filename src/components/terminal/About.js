import React from 'react'
import { AboutMe } from './partials/about/AboutMe'
import { Sidebar } from './partials/about/Sidebar'

export const About = () => {
  return (
    <div className='animate__animated animate__fadeIn about'>

      <AboutMe/>
      <Sidebar/>
    </div>
  )
}

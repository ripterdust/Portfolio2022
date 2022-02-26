import React from 'react'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      Explorer: <i class="fa-solid fa-folder-tree"></i>
      <ul className='parentList'>
        <li><i class="fa-solid fa-folder-open"></i> React</li>
        <li><i class="fa-solid fa-folder-open green"></i> Node.js</li>
        <li><i class="fa-solid fa-folder-open orange"></i> Mysql</li>
        <li><i class="fa-solid fa-folder-open yellow"></i> Jest</li>
        <li><i class="fa-solid fa-folder-open red"></i> Typescript</li>
        <ul className='childList'>
          <li><i class="fa-brands fa-markdown"></i> Read.md</li>
          <li><i class="fa-brands fa-markdown"></i> Stay with my dog.md</li>
          <li><i class="fa-brands fa-markdown"></i> Engeniering.md</li>
          <li><i class="fa-brands fa-markdown"></i> Travels.md</li>

        </ul>
      </ul>


    </div>
  )
}

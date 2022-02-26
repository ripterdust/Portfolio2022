import React from 'react';
import { projectList } from '../../helpers/projectsList';
import { ProjectCard } from './partials/projects/ProjectCard'

export const Projects = () => {
  return (
    <div className='animate__animated animate__fadeIn projectsComponent'>
      {
        projectList.map((elem, key) => <ProjectCard data={ elem } key={key} />)
      }
    </div>
  )
}

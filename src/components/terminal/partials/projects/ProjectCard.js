import React from 'react'

export const ProjectCard = ({ data }) => {

  const { name, repo, img, link } = data;

  console.log(data)
  return <div className="cardProject">
    <img src={img} alt={name} />
    <div className="name">{name}</div>

    <div className="buttons">
      <a href={repo} className="link" target="_blank" rel="noreferrer" >Repository</a>
      {
        link && <a href={link} className="link" target="_blank" rel="noreferrer" >Deploy</a>
      }
    </div>


  </div>
}

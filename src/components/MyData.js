import { Link } from "react-router-dom"

export const MyData = () => {
  return <div className="myData">
    <div className="name">
      <div className="text">
        Hello! I'm
      </div>
      <div className="myName">
        Bryan Arévalo
      </div>
      <div className="dev">
        Jr. Fullstack developer
      </div>
    </div>
    <div className="projects">
      <Link to="project" className="projectCardHello">
        <div className="card">
          <div className="text"></div>
          <div className="terminal"></div>
        </div>
      </Link>
    </div>
  </div>
}

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
          <div className="text">
            <div className="title">Projects</div>
            <div className="commit">12 commits</div>
          </div>
          <div className="terminal-project">
            /* <br />
            * Here you can find <br />
            * A complete list <br />
            * Of all my projects <br />
            */
          </div>

          <div className="hover">

              <div className="button" >See projects</div>
          </div>
        </div>
      </Link>
    </div>
  </div>
}

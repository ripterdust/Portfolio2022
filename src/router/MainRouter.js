import { BrowserRouter } from "react-router-dom"
import { Nav } from "../components/Nav/Nav"

export const MainRouter = () => {
    return <div className="terminal">
        <BrowserRouter>
            <Nav/>  

        </BrowserRouter>
    </div>
}
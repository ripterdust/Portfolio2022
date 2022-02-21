import { BrowserRouter } from "react-router-dom"
import { Buttons } from "../components/Buttons"
import { Nav } from "../components/Nav/Nav"

export const MainRouter = () => {
    return <div className="terminal">
        <BrowserRouter>
            <Buttons/>
            <Nav/>  

        </BrowserRouter>
    </div>
}
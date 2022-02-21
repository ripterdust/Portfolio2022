import { BrowserRouter } from "react-router-dom"
import { Nav } from "../components/Nav/Nav"

export const MainRouter = () => {
    return <div>
        <BrowserRouter>
            <Nav/>  
            
        </BrowserRouter>
    </div>
}
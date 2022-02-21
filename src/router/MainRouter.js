import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Buttons } from "../components/Buttons"
import { Hello } from "../components/Hello"
import { Nav } from "../components/Nav"

export const MainRouter = () => {
    return <div className="terminal">
        <BrowserRouter>
            <Buttons/>
            <Nav/>  
            <div className="line"></div>
            <Routes>
                <Route path='/' element={ <Hello/> } />
            </Routes>

        </BrowserRouter>
    </div>
}
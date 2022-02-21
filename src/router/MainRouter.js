import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Buttons } from "../components/Buttons"
import { Footer } from "../components/Footer"
import { Hello } from "../components/Hello"
import { Nav } from "../components/Nav"

export const MainRouter = () => {
    return <div className="terminal">
        <BrowserRouter>
            <Buttons/>
            <Nav/>  
            <div className="line"></div>
            <div className="views">
            <Routes>
                <Route path='/' element={ <Hello/> } />
            </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    </div>
}
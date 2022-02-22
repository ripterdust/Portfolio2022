import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "../components/About"
import { Buttons } from "../components/Buttons"
import { Footer } from "../components/Footer"
import { Hello } from "../components/Hello"
import { Nav } from "../components/Nav"
import { Projects } from "../components/Projects"

export const MainRouter = () => {
    return <div className="terminal" id="terminal">
        <BrowserRouter>
            <Buttons/>
            <Nav/>  
            <div className="views">
            <Routes>
                <Route path='/' element={ <Hello/> } />
                <Route path="project" element={ <Projects/> } />
                <Route path="about" element={ <About/> } />
            </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    </div>
}
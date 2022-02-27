import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "../components/terminal/About"
import { Buttons } from "../components/Buttons"
import { Footer } from "../components/terminal/Footer"
import { Hello } from "../components/terminal/Hello"
import { Nav } from "../components/terminal/Nav"
import { Projects } from "../components/terminal/Projects"

export const MainRouter = () => {
    return <div className="terminal animate__animated animate__fadeIn" id="terminal">
        <BrowserRouter>
            <Buttons classToHide={ 'terminal' }/>
            <Nav/>  
            <div className="views">
            <Routes>
                <Route path='Portfolio2022/' element={ <Hello/> } />
                <Route path="project" element={ <Projects/> } />
                <Route path="about" element={ <About/> } />
            </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    </div>
}
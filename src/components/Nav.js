import { BrowserRouter, Link } from 'react-router-dom';
import './Nav'

import { NavLink } from 'react-router-dom';

export const Nav = () => {
    
    
    return <nav>
        <NavLink activeClassName="active" exact to='/'>_hello</NavLink>
        <NavLink activeClassName="active" to='/about'>_about</NavLink>
        <NavLink activeClassName="active" to='/project'>_projects</NavLink>
    </nav>

};
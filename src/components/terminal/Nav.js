import './Nav'

import { NavLink } from 'react-router-dom';

export const Nav = () => {
    
    
    return <nav>
        <NavLink className={({isActive}) => isActive && 'active'} exact to='/'>_hello</NavLink>
        <NavLink className={({isActive}) => isActive && 'active'} to='/about'>_about</NavLink>
        <NavLink className={({isActive}) => isActive && 'active'} to='/project'>_projects</NavLink>
    </nav>

};
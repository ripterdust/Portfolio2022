import './Nav'

import { NavLink } from 'react-router-dom';

export const Nav = () => {
    
    
    return <nav>
        <NavLink className={({isActive}) => isActive ? 'active' : 'nonActive'} exact='true' to='Portfolio2022'>_hello</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'nonActive'} to='/about'>_about</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'nonActive'} to='/project'>_projects</NavLink>
    </nav>

};
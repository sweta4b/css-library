import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='link'>
            <h3 onClick={() => navigate('/component')}>Components</h3>
           <NavLink to="/component/avatar" className='link-list'>Avatar</NavLink>
           <NavLink to="/component/alert" className='link-list'>Alert</NavLink>
           <NavLink to="/component/badge" className='link-list'>Badge</NavLink>
           <NavLink to="/component/button" className='link-list'>Button</NavLink>
           <NavLink to="/component/card" className='link-list'>Card</NavLink>
           <NavLink to="/component/headings" className='link-list'>Headings</NavLink>
           <NavLink to="/component/image" className='link-list'>Image</NavLink>
           <NavLink to="/component/text" className='link-list'>Text</NavLink>
           </div>
        </div>
    )
}

export default Navbar

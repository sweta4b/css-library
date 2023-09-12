import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='link'>
            <h3 onClick={() => navigate('/component')}>Components</h3>
           <NavLink to="/avatar" className='link-list'>Avatar</NavLink>
           <NavLink to="/alert" className='link-list'>Alert</NavLink>
           <NavLink to="/badge" className='link-list'>Badge</NavLink>
           <NavLink to="/button" className='link-list'>Button</NavLink>
           <NavLink to="/card" className='link-list'>Card</NavLink>
           <NavLink to="/headings" className='link-list'>Headings</NavLink>
           <NavLink to="/image" className='link-list'>Image</NavLink>
           <NavLink to="/text" className='link-list'>Text</NavLink>
           </div>
        </div>
    )
}

export default Navbar

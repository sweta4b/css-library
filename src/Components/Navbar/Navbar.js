import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
// import {a} from "react-router-dom"


// avatar
// alert
// badge card button headings text image 

function Navbar() {
    return (
        <div className='container'>
            <div className='link'>
            <h3>Components</h3>
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

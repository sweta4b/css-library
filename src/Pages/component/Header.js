import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Header() {
    const [searchTerm , setSearchTerm] = useState('')

    const handleSearch = () => {
        if(searchTerm === 'avatar' || searchTerm === 'alert' || searchTerm === 'badge' || searchTerm === 'button' || searchTerm === 'card' || searchTerm === 'heading' || searchTerm === 'image' || searchTerm === 'text'){
            navigate(`/component/${searchTerm}`)
            setSearchTerm('')
        }else{
            alert('No result found')
        }
    }

    const navigate = useNavigate()
    return (
        <div>
         <div className='header'>
                 <h2 onClick={() => navigate('/')}>CSS-Library</h2>
                 <div className='search-bar'>
                 <input onChange={(e) => setSearchTerm(e.target.value)} placeholder='search component'/>
                 <button onClick={handleSearch}>Search</button>
                 </div>
                 <a href="https://github.com/sweta4b/css-library" target="_blank" rel="noreferrer" >
                 <i className='fa fa-github fa-2x'></i>
                 </a>
            </div>
            
            </div>
    )
}

export default Header

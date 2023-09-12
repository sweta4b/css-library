import React from 'react'
import './Image.css'

function ResponsiveImage({src}) {
    return (
        <div className='responsive-img-container'>
            <img src={src} alt="Responsive Image" className="responsive-image" />
        </div>
    )
}

export default ResponsiveImage

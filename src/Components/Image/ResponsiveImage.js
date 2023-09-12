import React from 'react'
import './Image.css'

function ResponsiveImage({src}) {
    return (
        <div >
            <img src={src} alt="Responsive Image" className="responsive-image" />
        </div>
    )
}

export default ResponsiveImage

import React from 'react'
import './Image.css'

function RoundImage({src}) {
    return (
        <div>
            <img src={src} alt="Round Image" className="round-image" />
        </div>
    )
}

export default RoundImage

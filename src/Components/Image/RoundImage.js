import React from 'react'
import './Image.css'

function RoundImage({src}) {
    return (
        <div>
            <img src={src} alt=""
            onError={(e)=>{e.target.onerror = null; e.target.src="../fallback.img.png"}}
             className="round-image" />
        </div>
    )
}

export default RoundImage

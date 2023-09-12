import React from 'react'
import './Avatar.css'

function Avatar({src, size}) {
    return (
        <div>
        <img src={src} 
        onError={(e)=>{e.target.onerror = null; e.target.src="../avatar.img.png"}}
        alt="user"
        className={size} />
        </div>
    )
}

export default Avatar

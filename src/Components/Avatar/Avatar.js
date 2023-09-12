import React from 'react'
import './Avatar.css'

function Avatar({src, size, alt}) {
    return (
        <div>
        <img src={src} alt={alt} className={size}/>
        </div>
    )
}

export default Avatar

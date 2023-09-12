import React from 'react'
import './Headline.css'

function Headline({size, children}) {
    return (
        <p className={size}>{children}</p>
    )
}

export default Headline

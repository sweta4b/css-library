import React from 'react'
import './Text.css'

function Text({children, classname}) {
    return (
        <div className="text">
     <p className={classname}>{children}</p>
     </div>

    )
}

export default Text

import React from 'react'
import './TextBox.css'

function TextBox({children, classname}) {
    return (
        <div className="text">
     <p className={classname}>{children}</p>
     </div>

    )
}

export default TextBox

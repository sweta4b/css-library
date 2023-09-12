import React from 'react'
import './Card.css'

function TextOnlyCard({children}) {
    return (
        <div className="card text-only-card">
       {children}
      </div>
    )
}

export default TextOnlyCard

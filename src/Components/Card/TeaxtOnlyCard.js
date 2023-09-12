import React from 'react'
import './Card.css'

function TeaxtOnlyCard({children}) {
    return (
        <div className="card text-only-card">
       {children}
      </div>
    )
}

export default TeaxtOnlyCard

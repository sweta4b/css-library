import React from 'react'
import './Card.css'

function VerticalCard({children, src}) {
    return (
        <div className="card vertical-card">
        <img className="card-image" src={src} alt="Image" />
        <div className="card-content">
          {children}
        </div>
      </div>
    )
}

export default VerticalCard

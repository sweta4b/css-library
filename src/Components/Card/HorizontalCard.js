import React from 'react'
import './Card.css'

function HorizontalCard({children, src}) {
    return (
        <div className="card horizontal-card ">
        <img className="card-image" src={src} alt="Image" />
        <div className="card-content">
          {children}
        </div>
      </div>
    )
}

export default HorizontalCard

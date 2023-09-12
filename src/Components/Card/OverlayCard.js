import React from 'react';
import './Card.css'

function OverlayCard({children, src}) {
    return (
        <div className="card card-with-overlay">
        <div className="overlay">
          {children}
        </div>
        <img  className= 'overlay-image'src={src} alt="Image" />
      </div>
    )
}

export default OverlayCard

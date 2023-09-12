import React from 'react'
import './Card.css'

function CardWithDismiss({children}) {
    return (
        <div className="card card-with-dismiss">
        <div className="dismiss-button">X</div>
        {children}
      </div>
    )
}

export default CardWithDismiss

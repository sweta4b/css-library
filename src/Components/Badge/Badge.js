import React from 'react'
import './Badge.css'

function Badge({children, badgeContent}) {
    return (
        <div className='badge-container'>
         {children}
   <div>
    <div className='badge'>
      <span>{badgeContent}</span>
      </div>
   </div>
</div>
    )
}

export default Badge

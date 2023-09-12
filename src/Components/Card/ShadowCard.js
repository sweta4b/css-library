import React from 'react'

function ShadowCard({children}) {
    return (
        <div className=" card-with-shadow">
            <div className='shadow-card'>
        {children}
        </div>
      </div>
    )
}

export default ShadowCard

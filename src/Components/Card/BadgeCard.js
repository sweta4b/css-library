import React from 'react'

function BadgeCard({children, badge}) {
    return (
        <div className="card card-with-badge">
        <div className="badge-in-card">{badge}</div>
        {children}
      </div>
    )
}

export default BadgeCard

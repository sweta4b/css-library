import React from 'react'

function Code({children}) {
    return (
        <div className='code-section'>
            <pre className="code-block">
                <code>
                    {children}
                </code>
            </pre>
                    
                
            </div>
    )
}

export default Code

import React from 'react'
import './LinkButton.css'

function LinkButton({href, children}) {
    return ( 
        <a className='link-button' href={href} target='_blank' rel='noreferrer' >{children}</a>
    )

}

export default LinkButton

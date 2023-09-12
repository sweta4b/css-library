import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import TextBox from '../Components/Text/TextBox'

function Text() {
    return (
        <div className='home-container'>
            <Navbar/>
            <div className='overview'>
            <h1>
                Text
            </h1>
            <p></p>
              <TextBox classname='primary-text'>This is primary text.</TextBox>
              <TextBox classname='secondary-text'>This is secondary text.</TextBox>
              <TextBox classname='uppercase'>This text is Capitalized.</TextBox>
              <TextBox classname='italic'>This text is in Italic.</TextBox>
              <TextBox classname='underline'>This text is underline.</TextBox>
              <TextBox classname='linethrough'>This is strike-through text.</TextBox>
              
            </div>
            <div></div>
        </div>
    )
}

export default Text

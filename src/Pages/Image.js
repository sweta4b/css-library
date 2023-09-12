import React from 'react'
import ResponsiveImage from '../Components/Image/ResponsiveImage'
import RoundImage from '../Components/Image/RoundImage'
import Navbar from '../Components/Navbar/Navbar'

function Image() {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='overview'>
                <h1>
                    Image
                </h1>
                <p></p>
                <ul>
                    <li>
                        <h2>Round Image:</h2>
                        <RoundImage src="./card.img.jpg" />
                    </li>
                    <li>
                        <h2>Responsive Image</h2>
                        <ResponsiveImage src="./card.img.jpg" />
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Image

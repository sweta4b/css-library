import React from 'react'
import Highlight from 'react-highlight'
import ResponsiveImage from '../Components/Image/ResponsiveImage'
import RoundImage from '../Components/Image/RoundImage'
import Header from './component/Header'
import Navbar from './component/Navbar/Navbar'

function ImagePage() {
    return (
        <div><Header/>
        <div className='home-container'>
            <Navbar />
            <div className='overview'>
                <h1>
                    Image
                </h1>
                <p>These are custom components designed for displaying images. One is specifically for rendering images in round-shap , and the other is for responsive images that adapt to various screen sizes.</p>
                <ul>
                    <li>
                        <h2>Round Image:</h2>
                        <RoundImage src="../card.img.jpg" />
                        <RoundImage src="" />
                    </li>
                    <Highlight>
                        {`<RoundImage src="../card.img.jpg" />`}
                    </Highlight>
                    <li>
                        <h2>Responsive Image</h2>
                        <ResponsiveImage src="../card.img.jpg" />
                    </li>
                    <Highlight>
                        {`<ResponsiveImage src="../card.img.jpg" />`}
                    </Highlight>
                </ul>
            </div>
            <div></div>
        </div>
        </div>
    )
}

export default ImagePage

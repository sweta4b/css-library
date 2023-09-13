import React from 'react'
import Highlight from 'react-highlight'
import ResponsiveImage from '../Components/Image/ResponsiveImage'
import RoundImage from '../Components/Image/RoundImage'
import Header from '../Pages/component/Header'
import Navbar from '../Pages/component/Navbar/Navbar'

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
                        <RoundImage src="../background.png" />
                    </li>
                    <Highlight>
                        {`<RoundImage src="../background.png" />`}
                    </Highlight>
                    <li>
                        <h2>Responsive Image</h2>
                        <ResponsiveImage src="../background.png" />
                    </li>
                    <Highlight>
                        {`<ResponsiveImage src="../background.png" />`}
                    </Highlight>
                </ul>
            </div>
            <div></div>
        </div>
        </div>
    )
}

export default ImagePage

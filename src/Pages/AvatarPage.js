import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Avatar from '../Components/Avatar/Avatar'

function AvatarPage() {
    return (
        <div className='home-container'>
            <Navbar/>
            <div className='overview'>
            <h1>Avatar</h1>
            <p>
            The Avatar Component is a versatile and visually appealing feature designed to enhance user profiles and interactions within your application. It allows users to personalize their digital identity by choosing or customizing avatars. This component comes with three size options: small, medium, and large, ensuring seamless integration into various parts of your platform while providing users with the flexibility to choose their preferred avatar size.
            </p>
            <div className='avatar'>
            <Avatar src="./avatar.img.png" alt="avatar" size="avatar sm"/>
            <Avatar src="./avatar.img.png" alt="avatar" size="avatar md"/>
            <Avatar src="./avatar.img.png" alt="avatar" size="avatar lg"/>
            </div>
            <div className='code-section'>
            <iframe className='code'
                 src="https://carbon.now.sh/embed/EISzI6qN7QMjElum5P80"
                sandbox="allow-scripts allow-same-origin">
            </iframe>   
            </div>
            </div>
            <div></div>
        </div>
    )
}

export default AvatarPage

import React from 'react'
import Navbar from '../Pages/component/Navbar/Navbar'
import Avatar from '../Components/Avatar/Avatar'
import Header from '../Pages/component/Header'
import Highlight from 'react-highlight'

function AvatarPage() {

    return (
        <div>
            <Header />
            <div className='home-container'>
                <Navbar />
                <div className='overview'>
                    <h1>Avatar</h1>
                    <p>
                        The Avatar Component is a versatile and visually appealing feature designed to enhance user profiles and interactions within your application. It allows users to personalize their digital identity by choosing or customizing avatars. This component comes with three size options: small, medium, and large, ensuring seamless integration into various parts of your platform while providing users with the flexibility to choose their preferred avatar size.
                    </p>
                    <div className='avatar-container'>
                        <Avatar src="../user.profile.jpg"  size="avatar sm" />
                        <Avatar src="../user.profile.jpg"  size="avatar md" />
                        <Avatar src="../user.profile.jpg"  size="avatar lg" />
                        <Avatar src="" size="avatar lg"/>
                    </div>
                    <Highlight className='language-html'>
                        {`
  <Avatar src="../user.profile.jpg" size="avatar sm"/>

  <Avatar src="../user.profile.jpg" size="avatar md"/>

  <Avatar src="../user.profile.jpg" size="avatar lg"/>

  <Avatar src="" size="avatar lg"/>  (By Default)

`}
                    </Highlight>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default AvatarPage

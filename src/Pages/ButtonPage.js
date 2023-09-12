import React from 'react'
import Button from '../Components/Button/Button'
import AddFloatingButton from '../Components/Button/FloatingButton/AddFloatingButton'
import FloatingButton from '../Components/Button/FloatingButton/FloatingButton'
import CartButton from '../Components/Button/IconButton/CartButton'
import CommentButton from '../Components/Button/IconButton/CommentButton'
import DeleteIconButton from '../Components/Button/IconButton/DeleteIconButton'
import EditIconButton from '../Components/Button/IconButton/EditIconButton'
import LikeButton from '../Components/Button/IconButton/LikeButton'
import ShareButton from '../Components/Button/IconButton/ShareButton'
import LinkButton from '../Components/Button/LinkButton'
import Navbar from '../Components/Navbar/Navbar'

function ButtonPage() {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='overview'>
                <h1>Button</h1>
                <p>Buttons are a fundamental building block of user interfaces, serving as gateways to user interactions and actions, and they play a crucial role in guiding users through digital experiences.</p>
               <hr/>
                <ul>
                    <li>
                        <div>
                        <div className='button-container'>
                            <div>
                                <h2>Primary Buttons: </h2>
                                {/* <p>These buttons are used for important actions that are central to a user's task, such as "Submit," "Save," or "Buy Now."</p> */}
                            </div>
                            <div className='flex-button'>
                                <Button variant="primary">Primary</Button>
                                <Button variant="outlined">Outlined</Button>
                            </div>
                        </div>
                        <div className='section'>
                            <iframe className='inner-code'
                                src="https://carbon.now.sh/embed/RowHcpDSsBa7AgruDH2Y"
                                sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </div>
                        <hr/>
                        </div>
                    </li>

                    <li>
                    <div>
                        <div className='button-container'>
                            <div>
                                <h2>Link Button:</h2>
                                {/* <p> Link button mimic the appearance of hyperlinks and are used to navigate to other pages or access additional information.</p> */}
                            </div>
                            <LinkButton href="/">Link</LinkButton>
                        </div>
                        <div className='section'>
                            <iframe className='inner-code'
                                src="https://carbon.now.sh/embed/LqzyIkIeUHalwM3bKHRA"

                                sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </div>
                        <hr/>
                        </div>
                    </li>
                    <li>
                        <div>
                        <div className='button-container'>
                            <div>
                                <h2>Icon Buttons:</h2>
                                {/* <p> Icon buttons use symbols or icons to represent actions, making them suitable for actions like "Edit," "Delete," or "Share."</p> */}
                            </div>
                            <div className='flex-button'>
                                <CartButton />
                                <EditIconButton />
                                <DeleteIconButton />
                                <ShareButton />
                                <CommentButton />
                                <LikeButton />
                            </div>
                        </div>
                        <div className='section' style={{marginBottom:'10rem'}}>
                            <iframe className='inner-code'
                                src="https://carbon.now.sh/embed/KzhEEdb4RugVtf6vLfsE"
                                sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </div>
                        <hr/>
                        </div>
                    </li>

                    <li>
                        <div>
                        <div className='button-container'>
                            <div>
                                <h2>Floating Buttons:</h2>
                                {/* <p> Icon buttons use symbols or icons to represent actions, making them suitable for actions like "Edit," "Delete," or "Share."</p> */}
                            </div>
                            <div className='flex-button'>
                                <FloatingButton />
                                <AddFloatingButton />
                            </div>
                        </div>
                        <div className='section'>
                            <iframe className='inner-code'
                                src="https://carbon.now.sh/embed/dYD2RWQhGsLKfgzuJwdl"
                                sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </div>

                        </div>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default ButtonPage

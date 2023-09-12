import React from 'react'
import Highlight from 'react-highlight'
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
import Header from './component/Header'
import Navbar from './component/Navbar/Navbar'

function ButtonPage() {
    return (
        <div><Header />
            <div className='home-container'>
                <Navbar />
                <div className='overview'>
                    <h1>Button</h1>
                    <p>Buttons are a fundamental building block of user interfaces, serving as gateways to user interactions and actions, and they play a crucial role in guiding users through digital experiences.</p>
                    <ul>
                        <li>
                            <div>
                                <div className='button-container'>
                                    <div>
                                        <h2>Primary Buttons: </h2>
                                    </div>
                                    <div className='flex-button'>
                                        <Button variant="primary">Primary</Button>
                                        <Button variant="outlined">Outlined</Button>
                                    </div>
                                </div>
                                <Highlight className='language-html'>
                                    {`<Button variant="primary">Primary</Button>
<Button variant="outlined">Outlined</Button>
`}
                                </Highlight>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='button-container'>
                                    <div>
                                        <h2>Link Button:</h2>
                                    </div>
                                    <LinkButton href="/">Link</LinkButton>
                                </div>
                                <Highlight className='language-html'>
                                    {`<LinkButton href="/">Link</LinkButton>
`}
                                </Highlight>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='button-container'>
                                    <div>
                                        <h2>Icon Buttons:</h2>
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
                                <Highlight className='language-html'>
                                    {`<CartButton />
<EditIconButton />
<DeleteIconButton />
<ShareButton />
<CommentButton />
<LikeButton />
`}
                                </Highlight>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='button-container'>
                                    <div>
                                        <h2>Floating Buttons:</h2>
                                    </div>
                                    <div className='flex-button'>
                                        <FloatingButton />
                                        <AddFloatingButton />
                                    </div>
                                </div>
                                <Highlight className='language-html'>
                                    {`<FloatingButton />
<AddFloatingButton />
`}
                                </Highlight>
                            </div>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ButtonPage

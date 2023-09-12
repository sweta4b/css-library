import React from 'react'
import Highlight from 'react-highlight'
import Avatar from '../Components/Avatar/Avatar'
import Badge from '../Components/Badge/Badge'
import CartButton from '../Components/Button/IconButton/CartButton'
import CommentButton from '../Components/Button/IconButton/CommentButton'
import LikeButton from '../Components/Button/IconButton/LikeButton'
import Header from '../Pages/component/Header'
import Navbar from '../Pages/component/Navbar/Navbar'



function BadgePage() {
    return (
        <div><Header />
            <div className='home-container'>
                <Navbar />
                <div className='overview'>
                    <h1>Badge</h1>
                    <p>A badge is a small visual element often used in user interfaces to display supplementary information, such as counts, status indicators, or notifications, directly on top of another UI element.</p>
                    <div className='experiment'>
                        <div className='badge-button'>
                            <Badge badgeContent={5}>
                                <CartButton />
                            </Badge>
                            <Badge badgeContent={3}>
                                <LikeButton />
                            </Badge>
                            <Badge badgeContent={2}>
                                <CommentButton />
                            </Badge>
                            <Badge badgeContent={1}>
                                <Avatar src='../avatar.img.png' size='avatar sm' />
                            </Badge>
                        </div>
                        <Highlight className='language-html'>
                            {`
  <Badge badgeContent={5}>
    <CartButton/>
  </Badge>

  <Badge badgeContent={3}>
    <LikeButton />
  </Badge>

  <Badge badgeContent={2}>
    <CommentButton />
  </Badge>

  <Badge badgeContent={1}>
    <Avatar src='../avatar.img.png' size='avatar sm' />
  </Badge>
`}
                        </Highlight>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default BadgePage

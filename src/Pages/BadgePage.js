import React from 'react'
import Highlight from 'react-highlight'
import Avatar from '../Components/Avatar/Avatar'
import Badge from '../Components/Badge/Badge'
import CartButton from '../Components/Button/IconButton/CartButton'
import CommentButton from '../Components/Button/IconButton/CommentButton'
import LikeButton from '../Components/Button/IconButton/LikeButton'
import Navbar from '../Components/Navbar/Navbar'


function BadgePage() {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='overview'>
                <h1>Badge</h1>
                <p>A badge is a small visual element often used in user interfaces to display supplementary information, such as counts, status indicators, or notifications, directly on top of another UI element.</p>
                <hr />
                <Highlight className='language-javascript badge-highlight'>
                    {`
                    <Badge badgeContent={5}>
                       <CardButton/>
                    </Badge>
                    `}
                </Highlight>
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
                            <Avatar src='./avatar.img.png' size='avatar sm' />
                        </Badge>
                    </div>
                    <hr />
                        <div className='inner-code'>
                        <iframe 
                            src="https://carbon.now.sh/embed/oMqK60okDk8pqz4y7fbm"
                            //   style="width: 680px; height: 297px; border:0; transform: scale(1); overflow:hidden;"
                            // sandbox="allow-scripts allow-same-origin"
                            width="1024px" >
                        </iframe>
                        </div>
                    {/* </div> */}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default BadgePage

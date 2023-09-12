import React from 'react'
import { useNavigate } from 'react-router'
import Header from './component/Header'


function HomePage() {
   const navigate = useNavigate()
    return (
        <div>
            <Header/>
            <div className='main'>
                <div className='hero-img'>
                <img src="./background.img.png" alt="bg-img"/>
                </div>
                <div className='name-button'>
                    <h1>CSS-Library</h1>
                    <p>Css-library is a versatile and customizable CSS component library designed to simplify web development and elevate your projects.</p>
                  <button className='start-button' onClick={() => navigate('/component')}>Get Start</button>
            </div>
            </div>
        </div>
    )
}

export default HomePage

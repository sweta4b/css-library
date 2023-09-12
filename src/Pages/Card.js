import React from 'react'
import BadgeCard from '../Components/Card/BadgeCard'
import CardWithDismiss from '../Components/Card/CardWithDismiss'
import HorizontalCard from '../Components/Card/HorizontalCard'
import OverlayCard from '../Components/Card/OverlayCard'
import ShadowCard from '../Components/Card/ShadowCard'
import TeaxtOnlyCard from '../Components/Card/TeaxtOnlyCard'
import VerticalCard from '../Components/Card/VerticalCard'
import Navbar from '../Components/Navbar/Navbar'

function Card() {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='overview'>
                <h1>Card</h1>
                <p>The card component is a versatile and widely used UI element in modern web and mobile application design. It serves as an organized container for presenting various types of content, such as text, images</p>
                <ul>
                    <li>
                        <h2>Text-Only Card:</h2>
                        <TeaxtOnlyCard>
                            <h1>Text-Only Card</h1>
                            <p>This is a only text card</p>
                        </TeaxtOnlyCard>
                    </li>
                    <li>
                        <h2>Vertical Card:</h2>
                        <VerticalCard src="./card.img.jpg">
                            <h2>Vertical Card</h2>
                            <p>This is a vertical card.</p>
                        </VerticalCard>
                    </li>
                    <li>
                        <h2>Horizontal Card:</h2>
                        <HorizontalCard src="./card.img.jpg">
                            <h2>Horizontal Card</h2>
                            <p>This is a horizontal card.</p>
                        </HorizontalCard>
                    </li>
                    <li>
                        <h2>Overlay Card:</h2>
                        <OverlayCard src="./card.img.jpg">
                            <h2>Text Overlay</h2>
                            <p>This is a card with a text overlay.</p>
                        </OverlayCard>
                    </li>
                    <li>
                        <h2>Badge Card:</h2>
                        <BadgeCard badge={10}>
                            <h2>Card with Badge</h2>
                            <p>This is a card with a badge.</p>
                        </BadgeCard>
                    </li>
                    <li>
                        <h2>Dismiss Card:</h2>
                        <CardWithDismiss>
                            <h2>Card with Dismiss</h2>
                            <p>This is a card with a dismiss.</p>
                        </CardWithDismiss>
                    </li>
                    <li>
                        <h2>Shadow Card:</h2>
                        <ShadowCard>
                            <h2>Card with Shadow</h2>
                            <p>This is a card with a Shadow.</p>
                        </ShadowCard>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Card

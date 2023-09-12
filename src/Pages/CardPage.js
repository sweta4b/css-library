import React from 'react'
import Highlight from 'react-highlight'
import BadgeCard from '../Components/Card/BadgeCard'
import CardWithDismiss from '../Components/Card/CardWithDismiss'
import HorizontalCard from '../Components/Card/HorizontalCard'
import OverlayCard from '../Components/Card/OverlayCard'
import ShadowCard from '../Components/Card/ShadowCard'
import TextOnlyCard from '../Components/Card/TextOnlyCard'
import VerticalCard from '../Components/Card/VerticalCard'
import Header from './component/Header'
import Navbar from './component/Navbar/Navbar'

function CardPage() {
    return (
        <div><Header />
            <div className='home-container'>
                <Navbar />
                <div className='overview'>
                    <h1>Card</h1>
                    <p>The card component is a versatile and widely used UI element in modern web and mobile application design. It serves as an organized container for presenting various types of content, such as text, images</p>
                    <ul>
                        <li>
                            <h2>Text-Only Card:</h2>
                            <TextOnlyCard>
                                <h1>Text-Only Card</h1>
                                <p>This is a only text card</p>
                            </TextOnlyCard>
                        </li>
                        <Highlight className='language-html'>
                            {`
 <TextOnlyCard>
    <h1>Text-Only Card</h1>
    <p>This is a only text card</p>
 </TeaxtOnlyCard>
                            `}
                        </Highlight>

                        <li>
                            <h2>Vertical Card:</h2>
                            <VerticalCard src="../card.img.jpg">
                                <h2>Vertical Card</h2>
                                <p>This is a vertical card.</p>
                            </VerticalCard>
                        </li>
                        <Highlight className='language-html'>
                            {`
 <VerticalCard src="../card.img.jpg">
    <h2>Vertical Card</h2>
    <p>This is a vertical card.</p>
 </VerticalCard>
                            `}
                        </Highlight>

                        <li>
                            <h2>Horizontal Card:</h2>
                            <HorizontalCard src="../card.img.jpg">
                                <h2>Horizontal Card</h2>
                                <p>This is a horizontal card.</p>
                            </HorizontalCard>
                        </li>
                        <Highlight className='language-html'>
                            {`
 <HorizontalCard src="../card.img.jpg">
    <h2>Horizontal Card</h2>
    <p>This is a horizontal card.</p>
 </HorizontalCard>
                            `}
                        </Highlight>

                        <li>
                            <h2>Overlay Card:</h2>
                            <OverlayCard src="../card.img.jpg">
                                <h2>Text Overlay</h2>
                                <p>This is a card with a text overlay.</p>
                            </OverlayCard>
                        </li>
                        <Highlight className='language-html'>
                            {`
 <OverlayCard src="../card.img.jpg">
    <h2>Text Overlay</h2>
    <p>This is a card with a text overlay.</p>
 </OverlayCard>
                            `}
                        </Highlight>

                        <li>
                            <h2>Badge Card:</h2>
                            <BadgeCard badge={10}>
                                <h2>Card with Badge</h2>
                                <p>This is a card with a badge.</p>
                            </BadgeCard>
                        </li>
                        <Highlight className='language-html'>
                            {`
 <BadgeCard badge={10}>
    <h2>Card with Badge</h2>
    <p>This is a card with a badge.</p>
 </BadgeCard>
                            `}
                        </Highlight>

                        <li>
                            <h2>Dismiss Card:</h2>
                            <CardWithDismiss>
                                <h2>Card with Dismiss</h2>
                                <p>This is a card with a dismiss.</p>
                            </CardWithDismiss>
                        </li>
                        <Highlight className='language-html'>
                            {`
 <CardWithDismiss>
    <h2>Card with Dismiss</h2>
    <p>This is a card with a dismiss.</p>
 </CardWithDismiss>
                            `}
                        </Highlight>
                        <li>
                            <h2>Shadow Card:</h2>
                            <ShadowCard >
                                <h2>Card with Shadow</h2>
                                <p>This is a card with a Shadow.</p>
                            </ShadowCard>
                        </li>
                        <Highlight className='language-html'>
                            {`
 <ShadowCard>
    <h2>Card with Shadow</h2>
    <p>This is a card with a Shadow.</p>
 </ShadowCard>
                            `}
                        </Highlight>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default CardPage

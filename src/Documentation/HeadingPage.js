import React from 'react'
import Highlight from 'react-highlight'
import Headline from '../Components/Headings/Headline'
import Header from '../Pages/component/Header'
import Navbar from '../Pages/component/Navbar/Navbar'

function HeadingPage() {
    return (
        <div><Header />
            <div className='home-container'>
                <Navbar />
                <div className='overview'>
                    <h1>Headings</h1>
                    <p>Heading components are essential for structuring content, conveying hierarchy, and enhancing the user experience in web and mobile applications. They help users quickly grasp the organization of information and access the content they are interested in. Headings display text in various levels of hierarchy, usually from "h1" (most important) to "h6" (least important)</p>
                    <ul>
                        <li>
                            <h2>h1: </h2>
                            <Headline size="h1">This is a heading</Headline>
                        </li>
                        <Highlight className='language-html'>
                            {`<Headline size="h1">This is a heading</Headline>`}
                        </Highlight>
                        <li>
                            <h2>h2: </h2>
                            <Headline size="h2">This is a heading</Headline>
                        </li>
                        <Highlight className='language-html'>
                            {`<Headline size="h2">This is a heading</Headline>`}
                        </Highlight>
                        <li>
                            <h2>h3: </h2>
                            <Headline size="h3">This is a heading</Headline>
                        </li>
                        <Highlight className='language-html'>
                            {`<Headline size="h3">This is a heading</Headline>`}
                        </Highlight>
                        <li>
                            <h2>h4: </h2>
                            <Headline size="h4">This is a heading</Headline>
                        </li>
                        <Highlight className='language-html'>
                            {`<Headline size="h4">This is a heading</Headline>`}
                        </Highlight>
                        <li>
                            <h2>h5: </h2>
                            <Headline size="h5">This is a heading</Headline>
                        </li>
                        <Highlight className='language-html'>
                            {`<Headline size="h5">This is a heading</Headline>`}
                        </Highlight>
                        <li>
                            <h2>h6: </h2>
                            <Headline size="h6">This is a heading</Headline>
                        </li>
                        <Highlight className='language-html'>
                            {`<Headline size="h6">This is a heading</Headline>`}
                        </Highlight>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HeadingPage

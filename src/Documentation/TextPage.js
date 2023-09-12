import React from 'react'
import Navbar from '../Pages/component/Navbar/Navbar'
import Text from '../Components/Text/Text'
import Header from '../Pages/component/Header'
import Highlight from 'react-highlight'

function TextPage() {
    return (
        <div><Header />
            <div className='home-container'>
                <Navbar />
                <div className='overview'>
                    <h1>
                        Text
                    </h1>
                    <p>This is a custom component designed for displaying various types of text with different styles. It appears to support text styles like primary, secondary, capitalized, italic, underline, and strike-through.</p>
                    <ul>
                        <li>
                            <h2>Primary Text:</h2>
                            <Text classname='primary-text'>This is primary text.</Text>
                        </li>
                        <Highlight className='language-html'>{`<Text classname='primary-text'>This is primary text.</Text>`}</Highlight>

                        <li>
                            <h2>Secondary Text:</h2>
                            <Text classname='secondary-text'>This is secondary text.</Text>
                        </li>
                        <Highlight className='language-html'>{`<Text classname='secondary-text'>This is secondary text.</Text>`}</Highlight>

                        <li>
                            <h2>Capitalized Text:</h2>
                            <Text classname='uppercase-text'>This text is Capitalized.</Text>
                        </li>
                        <Highlight className='language-html'>{`<Text classname='uppercase-text'>This text is Capitalized.</Text>`}</Highlight>

                        <li>
                            <h2>Italic Text:</h2>
                            <Text classname='italic-text'>This text is in Italic.</Text>
                        </li>
                        <Highlight className='language-html'>{`<Text classname='italic-text'>This text is in Italic.</Text>`}</Highlight>

                        <li>
                            <h2>Underline Text:</h2>
                            <Text classname='underline-text'>This text is underline.</Text>
                        </li>
                        <Highlight className='language-html'>{`<Text classname='underline-text'>This text is underline.</Text>`}</Highlight>

                        <li>
                            <h2>Strike-through Text:</h2>
                            <Text classname='linethrough-text'>This is strike-through text.</Text>
                        </li>
                        <Highlight className='language-html'>{`<Text classname='linethrough-text'>This is strike-through text.</Text>`}</Highlight>
                    </ul>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default TextPage

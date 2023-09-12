import React from 'react'
import Headline from '../Components/Headings/Headline'
import Navbar from '../Components/Navbar/Navbar'

function Heading() {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='overview'>
                <h1>Headings</h1>
                <p>Heading components are essential for structuring content, conveying hierarchy, and enhancing the user experience in web and mobile applications. They help users quickly grasp the organization of information and access the content they are interested in. Headings display text in various levels of hierarchy, usually from "h1" (most important) to "h6" (least important)</p>
                <hr />
                <ul>
                    <li>
                        <h2>h1: </h2>
                        <Headline size="h1">This is a heading</Headline>
                        <iframe className='inner-code'
                            src="https://carbon.now.sh/embed/HJP9SpFknqV9Z9K8qetk"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                        <hr />
                    </li>
                    <li>
                        <h2>h2: </h2>
                        <Headline size="h2">This is a heading</Headline>
                        <iframe className='inner-code'
                            src="https://carbon.now.sh/embed/3n3ojH7iH73shiuwzKly"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                        <hr />
                    </li>
                    <li>
                        <h2>h3: </h2>
                        <Headline size="h3">This is a heading</Headline>
                        <iframe className='inner-code'
                            src="https://carbon.now.sh/embed/AMgaOv4XqWTtPlre2tyu"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                        <hr />
                    </li>
                    <li>
                        <h2>h4: </h2>
                        <Headline size="h4">This is a heading</Headline>
                        <iframe className='inner-code'
                            src="https://carbon.now.sh/embed/uiDwxqfyao0tD6r1rViR"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                        <hr />
                    </li>
                    <li>
                        <h2>h5: </h2>
                        <Headline size="h5">This is a heading</Headline>
                        <iframe className='inner-code'
                            src="https://carbon.now.sh/embed/hLpHp7BTanOnxhd5YKv6"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                        <hr />
                    </li>
                    <li>
                        <h2>h6: </h2>
                        <Headline size="h6">This is a heading</Headline>
                        <iframe className='inner-code'
                            src="https://carbon.now.sh/embed/i3bo4Hq23aPAFnbJmx05"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Heading

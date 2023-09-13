import React from 'react'
import Highlight from 'react-highlight'
import Header from './component/Header'
import Navbar from './component/Navbar/Navbar'
import './Home.css'

function ComponentPage() {
    return (
        <div><Header/>
        <div className='home-container'>

            <Navbar />
            <div className='overview'>
                <h1>Library Overview</h1>
                <p>CSS-Library is a versatile and customizable CSS component library designed to simplify web development and elevate your projects. With a carefully curated collection of resuable components.Css-libray empowers developers to create beautiful and consistent user interfaces effortlessly</p>
                <p>To install CSS-Lirary, you can follow these steps:</p>
                
                <ol>
                    <li><strong>Open a Terminal or Command Proompt:</strong> Open your terminal or command prompt application. Make sure you have Node.js and npm installed on your system</li>
                    <li><strong>Navigate to Your Directory:</strong> Use the <b>`cd`</b> command to navigate to your React project directory where you want to install.</li>
                    <Highlight>{`cd path/to/your/project`}</Highlight>
                    <li><strong>Install the library:</strong> Use the <b>`npm install s4b-react-component-library`</b> or <b>`npm i s4b-react-component-library`</b> to install.</li>
                    <Highlight>{`npm install s4b-react-component-library 
                    Or
npm i s4b-react-component-library`}</Highlight>
                    <li><strong>Import and Use the Library:</strong> Once the installation is complete, you can import and use the library in your project.</li>
                    <Highlight>{`import React from 'react'
import Avatar from 's4b-react-component-library/dist/Avatar/Avatar'

function App() {
    return (
        <div className='app'>
             <Avatar src="./logo.png" size="avatar sm"/>
        </div>
    )
}

export default App
                     
                    `}</Highlight>
                </ol>

                
                
                <h2 style={{marginTop:'2rem'}}>Key-Features:</h2>
                <div className='feature'>
                    <ol>
                        <li>
                            <h3>Avatar:</h3>
                            
                                    The Avatar component allows you to display user's profile pictures or images in a circular format. It's perfect for user profile, comments, or any section where you want to showcase user images.
                               
                        </li>
                        <li>
                            <h3>Alert:</h3>
                            
                                
                                The Alert component provides a visually appealing way to communicate important information, warnings, or notifications to users.
                                
                            
                        </li>
                        <li>
                            <h3>Badge:</h3>
                            
                               
                                Badges are small, visually distinct elements that you can use to display information like notifications, status, or labels. They are often used with icons or text to convey additional context.
                                
                            
                        </li>
                        <li>
                            <h3>Button:</h3>
                            
                               
                                Buttons are essential for user interaction. Button component provides a range of styles and sizes, making it easy to create primary and secondary action buttons, as well as call-to-action buttons.
                                
                            
                        </li>
                        <li>
                            <h3>Card:</h3>
                            
                                
                                The Card component is a versatile container that you can use to display various types of content, such as images, text. Cards are commonly used for displaying articles, products, or other structured information.
                               
                            
                        </li>
                        
                        <li>
                            <h3>Headings:</h3>
                            
                                
                                Headings are used to structure content and provide hierarchy on a web page. Your library likely includes different heading styles, such as h1, h2, h3, etc., to help organize and format text.
                               
                            
                        </li>
                        <li>
                            <h3>Image:</h3>
                            
                               
                                The Image component simplifies the display and management of images, supporting responsive design. It can be customized to fit various layout requirements.
                                
                            
                        </li>
                        <li>
                            <h3>Text:</h3>
                            
                                
                                The Text component simplifies text styling with predefined styles for paragraphs, headings, and more. It ensures consistent typography throughout your application.
                               
                            
                        </li>
                        
                    </ol>
                </div>
            </div>
            <div></div>
        </div>
        </div>
    )
}

export default ComponentPage

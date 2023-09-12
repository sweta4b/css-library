import React from 'react'
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
                <h2>Key-Features:</h2>
                <div className='feature'>
                    <ol>
                        <li>
                            <h3>Avatar:</h3>
                            <ul>
                                <li>
                                    The Avatar component allows you to display user's profile pictures or images in a circular format. It's perfect for user profile, comments, or any section where you want to showcase user images.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Alert:</h3>
                            <ul>
                                <li>
                                The Alert component provides a visually appealing way to communicate important information, warnings, or notifications to users.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Badge:</h3>
                            <ul>
                                <li>
                                Badges are small, visually distinct elements that you can use to display information like notifications, status, or labels. They are often used with icons or text to convey additional context.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Button:</h3>
                            <ul>
                                <li>
                                Buttons are essential for user interaction. Button component provides a range of styles and sizes, making it easy to create primary and secondary action buttons, as well as call-to-action buttons.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Card:</h3>
                            <ul>
                                <li>
                                The Card component is a versatile container that you can use to display various types of content, such as images, text. Cards are commonly used for displaying articles, products, or other structured information.
                                </li>
                            </ul>
                        </li>
                        
                        <li>
                            <h3>Headings:</h3>
                            <ul>
                                <li>
                                Headings are used to structure content and provide hierarchy on a web page. Your library likely includes different heading styles, such as h1, h2, h3, etc., to help organize and format text.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Image:</h3>
                            <ul>
                                <li>
                                The Image component simplifies the display and management of images, supporting responsive design. It can be customized to fit various layout requirements.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Text:</h3>
                            <ul>
                                <li>
                                The Text component simplifies text styling with predefined styles for paragraphs, headings, and more. It ensures consistent typography throughout your application.
                                </li>
                            </ul>
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

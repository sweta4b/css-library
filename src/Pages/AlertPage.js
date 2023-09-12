import React, { useState, useEffect } from 'react'
import Highlight from 'react-highlight';
import AlertComponent from '../Components/Alert/AlertComponent';
import Header from './component/Header';
import Navbar from './component/Navbar/Navbar';


function AlertPage() {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(true);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <div>
        <Header/>
        <div className='home-container'>
            <Navbar />
            <div className='overview'>
                <h1>Alert</h1>
                <p>An alert component is a user interface element used to display important messages or notifications.</p>
                <ul>
                    <li>
                        <h2>Success Alert</h2>
                        <p>A success alert is a type of alert component that informs the user about a successfully completed action or operation.</p>
                        <AlertComponent message='Success Alert Message' type="success-alert" />
                        {
                            showAlert && (
                                <div className="success-alert">
                                    <p className="alert-message">Success Alert Message</p>
                                    <span className="close-btn">&times;</span>
                                </div>
                            )
                        }
                        <Highlight className='language-html'>
{`<AlertComponent message='Success Alert Message' type="success-alert" />
`}
                        </Highlight>
                    </li>
                    <li>
                        <h2>Warning Alert</h2>
                        <p>A warning alert is used to alert users about potential issues, risks, or important information that requires their attention but is not necessarily an error.</p>
                        <AlertComponent message='Warning Alert Message' type="warning-alert" />
                        {
                            showAlert && (<div className="warning-alert">
                                <p className="alert-message">Warning Alert Message</p>
                                <span className="close-btn">&times;</span>
                            </div>
                            )
                        }
                        <Highlight className='language-html'>
{`<AlertComponent message='Warning Alert Message' type="warning-alert" />
`}
                        </Highlight>
                    </li>
                    <li>
                        <h2>Error Alert</h2>
                        <p>An error alert is crucial for informing users about critical issues or failures, such as invalid input in a form or system errors.</p>
                        <AlertComponent message='Error Alert Message' type="error-alert" />
                        {
                            showAlert && (<div className="error-alert">
                                <p className="alert-message">Error Alert Message</p>
                                <span className="close-btn">&times;</span>
                            </div>
                            )
                        }
                        <Highlight className='language-html'>
{`<AlertComponent message='Error Alert Message' type="error-alert" />
`}
                        </Highlight>
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
        </div>
    );
}

export default AlertPage

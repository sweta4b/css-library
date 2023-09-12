import React, { useState, useEffect } from 'react'
import AlertComponent from '../Components/Alert/AlertComponent';
import Navbar from '../Components/Navbar/Navbar';


function Alert() {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(true);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className='home-conatiner'>
            <Navbar />
            <div className='overview'>
                <h1>Alert</h1>
                <p></p>
                <ul>
                    <li>
                        <h2>Success Alert</h2>
                        <AlertComponent message={'Success Alert Message'} type="success-alert" />
                        {
                            showAlert && (
                                <div className="success-alert">
                                    <p className="alert-message">Success Alert Message</p>
                                    <span className="close-btn">&times;</span>
                                </div>
                            )
                        }
                    </li>
                    <li>
                        <h2>Warning Alert</h2>
                        <AlertComponent message={'Warning Alert Message'} type="warning-alert" />
                        {
                            showAlert && (<div className="warning-alert">
                                <p className="alert-message">Warning Alert Message</p>
                                <span className="close-btn">&times;</span>
                            </div>
                            )
                        }
                    </li>
                    <li>
                        <h2>Error Alert</h2>
                        <AlertComponent message={'Error Alert Message'} type="error-alert" />
                        {
                            showAlert && (<div className="error-alert">
                                <p className="alert-message">Error Alert Message</p>
                                <span className="close-btn">&times;</span>
                            </div>
                            )
                        }
                    </li>
                </ul>
            </div>
            <div></div>
        </div>
    );
}

export default Alert

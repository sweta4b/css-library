// SuccessAlert.js
import React, { useState, useEffect } from 'react';
import './SuccessAlert.css';

const AlertComponent = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(!visible);
    }, 3000);

    return () => clearTimeout(timeout);
  },[]);

  const handleClose = () => {
    setVisible(!visible);
  };

  return visible ? (
    <div className={type}>
      <p className="alert-message">{message}</p>
       <span className="close-btn" onClick={handleClose}>&times;</span>
    </div>
  ) : null;
};

export default AlertComponent;

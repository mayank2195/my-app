import React from 'react';
import './ThankYouPage.css'; 

export default function ThankYouPage() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Full screen height
        margin: "50px",
       
      }}
    >
      
      <div className="text">
      <h2 >Thank you for registering!</h2>
      
      </div>
      <div className="hurray-icon">🎉</div> 
      <p className="distance">We’ll notify you soon.</p>
    </div>
  );
}
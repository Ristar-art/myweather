// About.js

import React from 'react';

const About = () => {
  return (
    <div style={{maxWidth:"800px",margin: "50px auto",padding:" 20px", backgroundColor: "#f8f8f8",borderRradius: "8px",boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", display:'flex', justifyContent:"center", flexDirection:"column"}}>
      <h1 >About Weather App</h1>
      <p style={{ lineHeight: "1.6",
  color: "#666"}}>Welcome to the Weather App, your go-to source for up-to-date weather information!</p>
      <p style={{ lineHeight: "1.6",
  color: "#666"}}>
        Our mission is to provide you with accurate and reliable weather forecasts, so you can plan
        your day with confidence. Whether you're a daily commuter, an outdoor enthusiast, or just
        curious about the weather, we've got you covered.
      </p>
      <p style={{ lineHeight: "1.6",
  color: "#666"}}>
        The Weather App uses the latest meteorological data to deliver precise forecasts for your
        location. Our user-friendly interface makes it easy to check the current conditions.
      </p>
      <p style={{ lineHeight: "1.6",
  color: "#666"}}>Stay informed and prepared with the Weather App. Download it now and experience the difference!</p>
    </div>
  );
};

export default About;

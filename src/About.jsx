import React from 'react';
import './main.css';
import marvel from './marvel.jpg'

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="marvel-title">ABOUT THE UNIVERSE</h1>
          <p className="about-text">
            Welcome to the ultimate destination for every Marvel fan! We are dedicated to bringing 
            the power, courage, and legacy of Earth's Mightiest Heroes right to your screen. 
            Whether you are a fan of Iron Man's tech or Spiderman's agility, we celebrate 
            the stories that inspire us all.
          </p>
          <div className="about-stats">
            <div className="stat-box">
            <h3>50+</h3>
            <p>Heroes</p>
            </div>
            <div className="stat-box">
            <h3>100%</h3>
            <p>Action</p>
            </div>
            <div className="stat-box">
            <h3>∞</h3>
            <p>Legacy</p>
            </div>
          </div>
        <button className="about-btn">Explore More</button>
        </div>
        <div className="about-image">
          {/* Aap yaha koi Captain America ya Iron Man ki image link kar sakte hain */}
          <img src={marvel}alt="Marvel Universe" />
        </div>
      </div>
    </div>
  );
};

export default About;
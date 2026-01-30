
import React from 'react';
import './main.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-overlay">
        <div className="contact-container">
          <div className="contact-info">
            <h1 className="marvel-red-text">JOIN THE ALLIANCE</h1>
            <p>Avengers HQ is waiting for your message. Send us a signal!</p>
            <div className="hq-details">
              <p>📍 <strong>Location:</strong> Avengers Tower, New York</p>
              <p>📞 <strong>Phone:</strong> +1-MARVEL-HELP</p>
              <p>📧 <strong>Email:</strong> shield@starkindustries.com</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Your Hero Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Your Secret Message..." rows="5" required></textarea>
            </div>
            <button type="submit" className="hero-btn">SEND SIGNAL</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
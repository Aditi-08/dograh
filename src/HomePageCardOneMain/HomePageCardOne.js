import React from 'react';
import './HomePageCardOne.css';
import HomePageImage  from '../assets/HomepageCardOneImage.png';

const HomePageCardOne = () => {
  return (
    <div className="homepage-card-one">
      <nav className="navbar">
        <div className="logo">dograh</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Product</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>About Us</li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-button">Sign Up</button>
          </div>
      </nav>

      <header className="header-section">
        <div className="header-content">
          <h1>Protect your Customers and Your Brand from Fraud</h1>
          <div className ="seprator-line"></div>
          <p>
          Detect and flag social engineering scams, phishing and impersonation attacks with our Dograh platform to help protect you on the internet.

</p>
          <div className="cta-buttons">
            <button className="request-demo-btn">Request Demo</button>
            <button className="dograh-works-btn">
              How Dograh Works
            </button>
          </div>
        </div>
        <div className="header-image">
          <img src={HomePageImage} alt="Profile" className="profile-image" />
        </div>
      </header>

      <footer className="footer-section">
        <p>More than 5,00,000 attacks in 2024 across</p>
        <div className="brand-logos">
          <span>Google</span>
          <span>Meta</span>
          <span>Twitter</span>
          <span>Gmail</span>
          <span>LinkedIn</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePageCardOne;

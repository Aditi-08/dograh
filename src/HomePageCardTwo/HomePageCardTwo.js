import React from 'react';
import './HomePageCardTwo.css'; // Optional for custom styling

const HomePageCardTwo = () => {
  return (
    <div className="homepage-card-two">
      <h2>Challenges</h2>
      <p className="description">
        With WormGPT and deep fake tools, malicious actors are generating fraud,
        scam, and phishing campaigns at an unprecedented volume.
      </p>
      <div className="stats-container">
        <div className="stats-item">
          <div className="stats-value">7.5x</div>
          <div className="stats-title">Phishing</div>
          <p>750% growth in phishing attacks in last 5 years</p>
        </div>
        <div className="stats-item">
          <div className="stats-value">$12B</div>
          <div className="stats-title">Money Lost</div>
          <p>$12.5B lost to reported phishing attacks annually</p>
        </div>
        <div className="stats-item">
          <div className="stats-value">5.9x</div>
          <div className="stats-title">Deep Fake</div>
          <p>590% increase in deep fakes in last 1 year</p>
        </div>
        <div className="stats-item">
          <div className="stats-value">37k</div>
          <div className="stats-title">Daily Deceptive URLs</div>
          <p>37k new deceptive links getting created daily</p>
        </div>
      </div>
      <div className="ratings-container">
        <div className="rating-item">
          <div className="rating-value">4.9 / 5</div>
          <p>databricks</p>
        </div>
        <div className="rating-item">
          <div className="rating-value">4.8 / 5</div>
          <p>Chainalysis</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageCardTwo;

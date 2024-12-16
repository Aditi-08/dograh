import React from 'react';
import './HomePageCardThree.css';

const HomepageCardThree = () => {
  const cards = [
    {
      title: 'Email Protection',
      description: 'Automatically scan emails for suspicious content, links, and attachments.',
      imgAlt: 'Email Protection Image',
    },
    {
      title: 'Social Media Protection',
      description: 'Proactively detect potential threats across all social media channels.',
      imgAlt: 'Social Media Protection Image',
    },
    {
      title: 'AI-Powered Threat Detection',
      description: 'Continuously scan the internet, providing detailed insights into attack methods and origins.',
      imgAlt: 'AI-Powered Threat Detection Image',
    },
  ];

  return (
    <div className="homepage-card-container">
      <h1 className="homepage-title">What Can Dograh Do?</h1>
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">
              <img
                src={`https://via.placeholder.com/100?text=Icon+${index + 1}`}
                alt={card.imgAlt}
                className="card-image"
              />
            </div>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
};

export default HomepageCardThree;

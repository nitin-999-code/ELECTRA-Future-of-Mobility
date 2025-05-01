import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Electra</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Electra is revolutionizing the automotive industry with cutting-edge 
              electric vehicles that combine performance, sustainability, and futuristic 
              design. Our mission is to accelerate the world's transition to sustainable 
              energy with vehicles that are better for the environment without compromising 
              on power or luxury.
            </p>
            <p>
              Founded in 2023, we've quickly become a leader in EV technology, pushing 
              the boundaries of what electric vehicles can achieve. Our team of engineers 
              and designers come from the world's top automotive and tech companies, 
              bringing unparalleled expertise to every vehicle we create.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-title">Models</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-title">Charging Stations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <div className="stat-title">Happy Customers</div>
            </div>
          </div>
        </div>
        
        <div className="mission-section">
          <h3>Our Mission</h3>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="mission-icon">♻️</div>
              <h4>Sustainability</h4>
              <p>Creating vehicles that help preserve our planet for future generations</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">⚡</div>
              <h4>Innovation</h4>
              <p>Pushing the boundaries of EV technology and design</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🚀</div>
              <h4>Performance</h4>
              <p>Delivering thrilling driving experiences without emissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
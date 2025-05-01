import React, { useEffect, useRef } from 'react';
import '../styles/Features.css';
import feature1 from '../assets/autonomous-driving.jpg';
import feature2 from '../assets/biometric-access.jpg';
import feature3 from '../assets/ar-hud.jpg';
import feature4 from '../assets/v2g-tech.jpg';
import feature5 from '../assets/regen-braking.jpg';
import feature6 from '../assets/ai-assistant.jpg';

const Features = () => {
  const features = [
    {
      title: "Autonomous Driving",
      description: "Level 4 autonomous driving capabilities for stress-free journeys",
      icon: "🤖",
      image: feature1,
      color: "#00d2ff"
    },
    {
      title: "Biometric Access",
      description: "Facial recognition and fingerprint authentication for keyless entry",
      icon: "👁️",
      image: feature2,
      color: "#3a7bd5"
    },
    {
      title: "Augmented Reality HUD",
      description: "Critical information projected onto your windshield for safer driving",
      icon: "👓",
      image: feature3,
      color: "#00c6ff"
    },
    {
      title: "Vehicle-to-Grid Tech",
      description: "Sell excess energy back to the grid when your car is parked",
      icon: "🔌",
      image: feature4,
      color: "#11998e"
    },
    {
      title: "Regenerative Braking",
      description: "Recover up to 30% more energy during deceleration",
      icon: "🔄",
      image: feature5,
      color: "#38ef7d"
    },
    {
      title: "AI Personal Assistant",
      description: "An intelligent assistant that learns your preferences and habits",
      icon: "🧠",
      image: feature6,
      color: "#f46b45"
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.feature-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="features-container" ref={sectionRef}>
      <div className="features-header">
        <h2>Cutting-Edge Features</h2>
        <p className="subtitle">Experience the future of mobility with our advanced technology</p>
        <div className="header-decoration"></div>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card"
            style={{ '--accent-color': feature.color }}
          >
            <div className="card-content">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <div className="card-image">
              <img src={feature.image} alt={feature.title} />
              <div className="image-overlay"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="tech-showcase">
        <h2>Technology Showcase</h2>
        <div className="header-divider"></div>
        
        <div className="tech-demo">
          <div className="tech-item">
            <div className="tech-visual">
              <img src="https://media.istockphoto.com/id/1348631007/photo/ev-charging-station-for-electric-car-in-concept-of-green-energy-and-eco-power.jpg?s=612x612&w=0&k=20&c=yTL95mCTPWTNqEO4NqiWWSeC_JMINNUJeChE9a6YKVc=" alt="AI Navigation System" className="tech-image" />
              <div className="image-overlay"></div>
              <div className="tech-badge">
                <span className="tech-icon">🧠</span>
                <span>AI System</span>
              </div>
            </div>
            <div className="tech-info">
              <h3>AI-Powered Navigation</h3>
              <p>
                Our advanced AI navigation system learns your driving habits and preferences,
                suggesting optimal routes that match your driving style and schedule. It even
                predicts traffic patterns before they form.
              </p>
              <div className="tech-features">
                <span>Machine Learning</span>
                <span>Predictive Routing</span>
                <span>Real-time Adaptation</span>
              </div>
            </div>
          </div>

          <div className="tech-divider"></div>

          <div className="tech-item reverse">
            <div className="tech-visual">
              <img src='https://www.mkbandco.com/wp-content/uploads/2023/10/iStock-SweetBunFactory.jpg' alt="Next-Gen Battery Technology" className="tech-image" />
              <div className="image-overlay"></div>
              <div className="tech-badge">
                <span className="tech-icon">🔋</span>
                <span>Battery Tech</span>
              </div>
            </div>
            <div className="tech-info">
              <h3>Next-Gen Battery Tech</h3>
              <p>
                Our proprietary battery technology offers faster charging, longer lifespan,
                and better performance in extreme temperatures. With solid-state architecture,
                our batteries are safer and more energy-dense than conventional lithium-ion.
              </p>
              <div className="tech-features">
                <span>800km Range</span>
                <span>15-min Fast Charge</span>
                <span>-40°C to 60°C Operation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
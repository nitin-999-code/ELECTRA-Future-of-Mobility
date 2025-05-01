import React, { useState } from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

import batteryImage from '../assets/ev-battery.jpg';
import CarShowcase from './CarShowcase';


const Home = () => {
  const navigate = useNavigate();
  const [currentCar] = useState({
    name: "Remac Nevera",
    type: "Electric car",
    temperature: 22,
    mileage: 873,
    battery: 89,
    price: "$2,500,000",
    acceleration: "1.81s 0-100km/h",
    range: "340 miles",
    image: "https://moderncarcollector.com/wp-content/uploads/2024/12/rimac-2905.jpg"
  });


  return (
    <div className="home">
      <div className="hero-section">
        
        
        <div className="content-wrapper">
          <div className="car-info">
            <h1>Choose The Best Car</h1>
            
            <div className="car-model">
              <h2>{currentCar.name}</h2>
              <p>{currentCar.type}</p>
            </div>
            
            <div className="car-stats">
              <div className="stat-item">
                <div className="stat-value">{currentCar.temperature}°</div>
                <div className="stat-label">TEMPERATURE</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{currentCar.mileage}</div>
                <div className="stat-label">MILEAGE</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{currentCar.battery}%</div>
                <div className="stat-label">BATTERY</div>
              </div>
            </div>
            
            <div className="car-details">
              <div className="detail-item">
                <span>Price:</span>
                <span>{currentCar.price}</span>
              </div>
              <div className="detail-item">
                <span>Acceleration:</span>
                <span>{currentCar.acceleration}</span>
              </div>
              <div className="detail-item">
                <span>Range:</span>
                <span>{currentCar.range}</span>
              </div>
            </div>
            
            <button 
              className="explore-button"
              onClick={() => navigate('/explore')}
            >
              Explore More
            </button>
          </div>
          
          <div className="car-visual1">
            <img src={currentCar.image} alt={currentCar.name} className="car-image" />
          </div>
        </div>
      </div>
      
      <CarShowcase />

      <div className="battery-maintenance">
        <div className="maintenance-content">
          <div className="maintenance-text">
            <h2>How to Maintain Your EV's Battery</h2>
            
            <div className="maintenance-point">
              <h3>Avoid Frequent Fast Charges</h3>
              <p>Frequent fast-charging may have a negative impact on a battery's health over time, as sending high currents causes a lot of strain.</p>
            </div>
            
            <div className="maintenance-point">
              <h3>Control Level of Charge</h3>
              <p>Having the battery percentage dip close to zero, or charging it to 100 per cent, are both bad for an EV. These extremes can reduce the battery's capacity to store electricity and even drain faster over time.</p>
            </div>
            
            <div className="maintenance-point">
              <h3>Avoid Exposure to Hot Temperatures</h3>
              <p>Do not leave your EV parked under the hot sun for long durations. Doing so can expose your electric vehicle to extreme hot temperatures and can potentially damage the battery.</p>
            </div>
            
            <div className="maintenance-point">
              <h3>Check Battery Coolant</h3>
              <p>To ensure that the battery is always working within the preset safe operating temperature, it is necessary to check the battery coolant level at regular intervals.</p>
            </div>
            
            <div className="maintenance-point">
              <h3>Parking for Longer Periods</h3>
              <p>When parked for an extended period of time (more than a month), maintain a charging range of 40 to 60% to safeguard the battery's health.</p>
            </div>
          </div>
          
          <div className="maintenance-image">
            <img src={batteryImage} alt="EV Battery Maintenance" className="battery-img" />
          </div>
        </div>
      </div>

      <div className="ev-benefits">
        <div className="benefits-container">
          <h2>Why Choose Electra?</h2>
          <p className="benefits-subtitle">Discover the advantages of going electric with our cutting-edge technology</p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Instant Performance</h3>
              <p>Experience immediate torque and acceleration that outperforms traditional combustion engines.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Eco-Friendly</h3>
              <p>Zero tailpipe emissions mean cleaner air and a reduced carbon footprint for our planet.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Cost Efficient</h3>
              <p>Lower maintenance costs and reduced fuel expenses compared to gasoline vehicles.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🔌</div>
              <h3>Convenient Charging</h3>
              <p>Charge at home overnight or at one of our rapidly expanding network of fast-charging stations.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🤖</div>
              <h3>Advanced Tech</h3>
              <p>Cutting-edge autonomous driving features and over-the-air software updates.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🔋</div>
              <h3>Long Range</h3>
              <p>Our latest battery technology delivers industry-leading range on a single charge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

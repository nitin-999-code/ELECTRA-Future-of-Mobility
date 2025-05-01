import React, { useState, useEffect } from 'react';
import '../styles/Popular.css';
import porscheImage from '../assets/rimac-nevera.jpg';
import novaImage from '../assets/electra-nova.jpg';
import teslaImage from '../assets/tesla-model-s.jpg';
import lucidImage from '../assets/lucid-air.jpg';

const Popular = () => {
  const cars = [
    {
      id: 1,
      name: "Rimac Nevera",
      type: "Electric Sports Car",
      price: "$2,500,000",
      range: "340 miles",
      acceleration: "1.81s 0-100km/h",
      battery: "89kWh",
      image: porscheImage,
      description: "The Rimac Nevera is a Croatian-made, all-electric hypercar known for its exceptional performance and record-breaking speed."
    },
    {
      id: 2,
      name: "Electra Nova",
      type: "Electric SUV",
      price: "$85,000",
      range: "350 miles",
      acceleration: "4.2s 0-100km/h",
      battery: "88kWh",
      image: novaImage,
      description: "Our flagship SUV offers spacious luxury without compromising on electric efficiency."
    },
    {
      id: 3,
      name: "Tesla Model S Plaid",
      type: "Electric Sedan",
      price: "$135,000",
      range: "396 miles",
      acceleration: "1.99s 0-100km/h",
      battery: "100kWh",
      image: teslaImage,
      description: "Unmatched acceleration meets cutting-edge technology in this performance sedan."
    },
    {
      id: 4,
      name: "Lucid Air",
      type: "Electric Luxury",
      price: "$139,000",
      range: "520 miles",
      acceleration: "3.0s 0-100km/h",
      battery: "118kWh",
      image: lucidImage,
      description: "Redefining luxury electric vehicles with exceptional range and comfort."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex + 3) % cars.length);
            setProgress(0);
            setIsTransitioning(false);
            setExpandedItem(null);
          }, 300);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [cars.length]);

  const handleItemClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setProgress(0);
      setIsTransitioning(false);
      setExpandedItem(expandedItem === index ? null : index);
    }, 300);
  };

  const currentCar = cars[currentIndex];

  return (
    <div className="popular-container">
      <div className="popular-header">
        <h2>Our Popular Models</h2>
      </div>

      <div className="car-showcase-container">
        <div className="vertical-progress-container">
          <div className="vertical-progress-track">
            <div 
              className="vertical-progress-bar" 
              style={{ height: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="car-showcase">
          <div className="car-visual">
            <img 
              src={currentCar.image} 
              alt={currentCar.name} 
              className={`car-image ${isTransitioning ? 'fade-out' : 'fade-in'}`}
            />
          </div>
        </div>

        <div className="car-list-sidebar">
          {cars.map((car, index) => (
            <div 
              key={car.id}
              className={`car-list-item ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <div className="car-list-name">{car.name}</div>
              <div className="car-list-type">{car.type}</div>
              {expandedItem === index && (
                <div className="car-list-description">
                  {car.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="car-specs">
        <div className="spec-item">
          <span>Range</span>
          <span>{currentCar.range}</span>
        </div>
        <div className="spec-item">
          <span>Acceleration</span>
          <span>{currentCar.acceleration}</span>
        </div>
        <div className="spec-item">
          <span>Battery</span>
          <span>{currentCar.battery}</span>
        </div>
        <div className="spec-item">
          <span>Price</span>
          <span>{currentCar.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Popular;
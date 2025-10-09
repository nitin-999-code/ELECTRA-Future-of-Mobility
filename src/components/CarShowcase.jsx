import React, { useState, useEffect } from 'react';
import '../styles/CarShowcase.css';
import mahindrabe6 from '../assets/mahindra-be6.jpg';
import mgWindsor from '../assets/mg-windsor.jpg';
import tataCurvy from '../assets/tata-curvy.jpg';
import toyotaUrban from '../assets/toyota-urban.jpg';
import mgCyberster from '../assets/mg-cyberster.jpg';
import mgM9 from '../assets/mg-m9.jpg';
import tataHarrier from '../assets/tata-harrier.jpg';
import rimacNevera from '../assets/rimac-nevera.jpg';
import tataNexon from '../assets/tata-nexon.jpg';
import hyundaiKona from '../assets/hyundai-kona.jpg';
import audiQ8 from '../assets/audi-q8.jpg';
import bmwI4 from '../assets/bmw-i4.jpg';
import audiQ6 from '../assets/audi-q6.jpg';
import marutiVitara from '../assets/maruti-vitara.jpg';
import bmwIx from '../assets/bmw-ix.jpg';
import mahindrabe07 from '../assets/mahindra-be07.jpg';

const CarShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [upcomingIndex, setUpcomingIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  

  const cars = [
    {
      name: "Rimac Nevera",
      price: "₹ 21 crore",
      range: "490 km",
      power: "1,914 hp",
      battery: "120 kWh",
      image: rimacNevera 
    },
    {
      name: "Audi Q8 e-tron",
      price: "₹ 1.14 Crore",
      range: "600 km",
      power: "408 bhp",
      battery: "114 kWh",
      image: audiQ8
    },
    {
      name: "Mahindra BE 6",
      price: "₹ 19.65 - 27.65 Lakh*",
      range: "557 - 683 km",
      power: "228 - 282 bhp",
      battery: "59 - 79 kWh",
      image: mahindrabe6 
    },
    {
      name: "MG Windsor EV",
      price: "₹ 14 - 16 Lakh*",
      range: "332 km",
      power: "134 bhp",
      battery: "38 kWh",
      image: mgWindsor
    },
    {
      name: "Tata Curvy EV",
      price: "₹ 17.49 - 22.24 Lakh*",
      range: "430 - 502 km",
      power: "148 - 165 bhp",
      battery: "45 - 55 kWh",
      image: tataCurvy
    },
    {
      name: "Hyundai Kona Electric",
      price: "₹ 23.75 - 23.94 Lakh*",
      range: "452 km",
      power: "136 bhp",
      battery: "39.2 kWh",
      image: hyundaiKona
    },
    {
      name: "Tata Nexon EV Max",
      price: "₹ 16.49 - 19.54 Lakh*",
      range: "437 km",
      power: "143 bhp",
      battery: "40.5 kWh",
      image: tataNexon
    },
    {
      name: "BMW i4",
      price: "₹ 72.50 Lakh",
      range: "590 km",
      power: "340 bhp",
      battery: "83.9 kWh",
      image: bmwI4
    },
    {
      name: "Mahindra BE 07",
      price: "₹ 29 Lakh",
      range: "500 km",
      power: "326 bhp",
      battery: "76.6 kWh",
      image: mahindrabe07
    }
  ];

  const upcomingCars = [
    {
      name: "Toyota Urban Cruiser",
      price: "₹ 18 Lakh",
      range: "27.97 kmpl",
      power: "91.18 bhp",
      launchDate: "May 16, 2025: Expected Launch",
      image: toyotaUrban
    },
    {
      name: "MG Cyberster",
      price: "₹ 80 Lakh",
      range: "443 km",
      power: "503 bhp",
      battery: "77 kWh",
      launchDate: "May 20, 2025: Expected Launch",
      image: mgCyberster
    },
    {
      name: "MG M9",
      price: "₹ 70 Lakh",
      range: "400 km",
      battery: "90 kWh",
      launchDate: "May 30, 2025: Expected Launch",
      image: mgM9
    },
    {
      name: "Tata Harrier EV",
      price: "₹ 30 Lakh",
      range: "500km",
      power: "91.18 bhp",
      battery: "75 kWh",
      launchDate: "Jun 10, 2025: Expected Launch",
      image: tataHarrier
    },
    {
      name: "Audi Q6 e-tron",
      price: "₹ 1 Cr",
      range: "260 km",
      battery: "94.9 kWh",
      launchDate: "May 15, 2025: Expected Launch",
      image: audiQ6
    },
    {
      name: "Maruti e Vitara",
      price: "₹ 17 - 22.50 Lakh",
      range: "500 km",
      power: "142 - 172 bhp",
      battery: "49 - 61 kWh",
      launchDate: "Aug 10, 2025: Expected Launch",
      image: marutiVitara
    },
    {
      name: "BMW iX 2025",
      price: "₹ 1.45 Cr",
      range: "500 km",
      power: "400 bhp",
      battery: "100 kWh",
      launchDate: "Aug 14, 2025: Expected Launch",
      image: bmwIx
    }
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev === cars.length - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [cars.length]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === cars.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(prev => (prev === 0 ? cars.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  const cardsToShow = 4; // Number of cards visible at once
  const totalCards = upcomingCars.length;
  
  const nextUpcomingSlide = () => {
    setUpcomingIndex(prev => {
      const maxSlides = Math.max(0, totalCards - cardsToShow);
      return prev >= maxSlides ? 0 : prev + 1;
    });
  };

  const prevUpcomingSlide = () => {
    setUpcomingIndex(prev => {
      const maxSlides = Math.max(0, totalCards - cardsToShow);
      return prev <= 0 ? maxSlides : prev - 1;
    });
  };

  const handleAlertClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="car-showcase-section">
      <h2>Electric Cars</h2>
      

      <div className="car-slider">
        <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
        <div className="slider-content">
          <div className={`car-card ${isAnimating ? 'animating' : ''}`}>
            <div className="car-image-container">
              <img 
                src={cars[currentIndex].image} 
                alt={cars[currentIndex].name} 
                className="car-image" 
              />
            </div>
            <div className="car-details">
              <h3>{cars[currentIndex].name}</h3>
              <p className="price">{cars[currentIndex].price}</p>
              <div className="specs">
                <span>{cars[currentIndex].range}</span>
                <span>•</span>
                <span>{cars[currentIndex].power}</span>
                <span>•</span>
                <span>{cars[currentIndex].battery}</span>
              </div>
            </div>
          </div>
        </div>
        <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
      </div>

      
      <div className="upcoming-cars">
        <h3>Upcoming Electric Cars</h3>
        <div className="upcoming-slider-container">
          <button className="upcoming-slider-arrow left" onClick={prevUpcomingSlide}>
            &lt;
          </button>
          <div className="upcoming-slider">
            <div 
              className="upcoming-slider-track" 
              style={{ transform: `translateX(-${upcomingIndex * (100 / cardsToShow)}%)` }}
            >
              {upcomingCars.map((car, index) => (
                <div 
                  key={index} 
                  className="upcoming-slide"
                  style={{ width: `${100 / cardsToShow}%`, flexShrink: 0 }}
                >
                  <div className="upcoming-card">
                    <div className="upcoming-image-container">
                      <img src={car.image} alt={car.name} className="upcoming-car-image" />
                    </div>
                    <div className="upcoming-info">
                      <h4>{car.name}</h4>
                      <p className="price">{car.price}</p>
                      <div className="specs">
                        <span>{car.range}</span>
                        {car.power && <><span> • </span><span>{car.power}</span></>}
                        {car.battery && <><span> • </span><span>{car.battery}</span></>}
                      </div>
                      <p className="launch-date">{car.launchDate}</p>
                      <p className="alert-button" onClick={handleAlertClick}>
                        Alert Me When Launched
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="upcoming-slider-arrow right" onClick={nextUpcomingSlide}>
            &gt;
          </button>
        </div>
      </div>

      {showNotification && (
        <div className="notification-popup">
          We Will Notify You When This Vehicle Launches
        </div>
      )}
    </div>
  );
};

export default CarShowcase;
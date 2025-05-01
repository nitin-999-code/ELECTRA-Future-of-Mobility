import React from 'react';


import '../styles/ExploreMore.css';
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
import mahindrabe6 from '../assets/mahindra-be6.jpg';
import mgWindsor from '../assets/mg-windsor.jpg';
import tataCurvy from '../assets/tata-curvy.jpg';

const ExploreMore = () => {
  
  const [searchQuery, setSearchQuery] = React.useState('');
 
  const allCars = [
    {
      name: "Toyota Urban Cruiser",
      price: "₹18 Lakh",
      specs: "27.97 kmpl • 91.18 bhp",
      launchDate: "May 16, 2025: Expected Launch",
      image: toyotaUrban
    },
    {
      name: "MG Cyberster",
      price: "₹80 Lakh",
      specs: "443 km • 503 bhp • 77 kWh",
      launchDate: "May 20, 2025: Expected Launch",
      image: mgCyberster
    },
    {
      name: "MG M9",
      price: "₹70 Lakh",
      specs: "400 km • 90 kWh",
      launchDate: "May 30, 2025: Expected Launch",
      image: mgM9
    },
    {
      name: "Tata Harrier EV",
      price: "₹30 Lakh",
      specs: "500km • 91.18 bhp • 75 kWh",
      launchDate: "Jun 10, 2025: Expected Launch",
      image: tataHarrier
    },
    {
      name: "Rimac Nevera",
      price: "₹21 crore",
      specs: "490 km • 1,914 hp • 120 kWh",
      launchDate: "Available Now",
      image: rimacNevera
    },
    {
      name: "Tata Nexon EV",
      price: "₹16.49 Lakh",
      specs: "437 km • 143 bhp • 40.5 kWh",
      launchDate: "Available Now",
      image: tataNexon
    },
    {
      name: "Hyundai Kona",
      price: "₹23.75 Lakh",
      specs: "452 km • 136 bhp • 39.2 kWh",
      launchDate: "Available Now",
      image: hyundaiKona
    },
    {
      name: "Audi Q8 e-tron",
      price: "₹1.14 Crore",
      specs: "600 km • 408 bhp • 114 kWh",
      launchDate: "Available Now",
      image: audiQ8
    },
    {
      name: "Mahindra BE 6",
      price: "₹19.65 - 27.65 Lakh*",
      specs: "557 - 683 km • 228 - 282 bhp • 59 - 79 kWh",
      launchDate: "Available Now",
      image: mahindrabe6
    },
    {
      name: "MG Windsor EV",
      price: "₹14 - 16 Lakh*",
      specs: "332 km • 134 bhp • 38 kWh",
      launchDate: "Available Now",
      image: mgWindsor
    },
    {
      name: "Tata Curvy EV",
      price: "₹17.49 - 22.24 Lakh*",
      specs: "430 - 502 km • 148 - 165 bhp • 45 - 55 kWh",
      launchDate: "Available Now",
      image: tataCurvy
    },
    {
      name: "BMW i4",
      price: "₹72.50 Lakh",
      specs: "590 km • 340 bhp • 83.9 kWh",
      launchDate: "Available Now",
      image: bmwI4
    },
    {
      name: "Mahindra BE 07",
      price: "₹29 Lakh",
      specs: "500 km • 326 bhp • 76.6 kWh",
      launchDate: "Available Now",
      image: mahindrabe07
    },
    {
      name: "Audi Q6 e-tron",
      price: "₹1 Cr",
      specs: "260 km • 94.9 kWh",
      launchDate: "May 15, 2025: Expected Launch",
      image: audiQ6
    },
    {
      name: "BMW iX",
      price: "₹1.16 Crore",
      specs: "566 km • 326 bhp • 76.6 kWh",
      launchDate: "Available Now",
      image: bmwIx
    },
    {
      name: "Maruti Vitara EV",
      price: "₹15 Lakh",
      specs: "500 km • 134 bhp • 48 kWh",
      launchDate: "Aug 10, 2025: Expected Launch",
      image: marutiVitara
    }
  ];

  return (
    <>
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Find Electric Vehicle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="explore-more-container">
        <div className="explore-header">
          <h1>All ElectricVehicles</h1>
        </div>

        <div className="upcoming-cars-grid">
          {allCars.map((car, index) => (
            <div key={index} className="upcoming-car-card">
              <div className="car-image-container1">
                <img src={car.image} alt={car.name} className="car-image1" />
              </div>
              <div className="car-details">
                <h2 className="car-name">{car.name}</h2>
                <p className="car-price">{car.price}</p>
                <p className="car-specs">{car.specs}</p>
                <p className="launch-date">{car.launchDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMore;

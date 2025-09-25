import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import batteryImage from '../assets/ev-battery.jpg';
import CarShowcase from './CarShowcase';

const Home = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const currentCar = {
    name: "Remac Nevera",
    type: "Electric car",
    temperature: 22,
    mileage: 873,
    battery: 89,
    price: "$2,500,000",
    acceleration: "1.81s 0-100km/h",
    range: "340 miles",
    image: "https://moderncarcollector.com/wp-content/uploads/2024/12/rimac-2905.jpg"
  };

  const maintenancePoints = [
    {
      title: "Avoid Frequent Fast Charges",
      content: "Frequent fast-charging may have a negative impact on a battery's health over time, as sending high currents causes a lot of strain."
    },
    {
      title: "Control Level of Charge",
      content: "Having the battery percentage dip close to zero, or charging it to 100 per cent, are both bad for an EV. These extremes can reduce the battery's capacity to store electricity and even drain faster over time."
    },
    {
      title: "Avoid Exposure to Hot Temperatures",
      content: "Do not leave your EV parked under the hot sun for long durations. Doing so can expose your electric vehicle to extreme hot temperatures and can potentially damage the battery."
    },
    {
      title: "Check Battery Coolant",
      content: "To ensure that the battery is always working within the preset safe operating temperature, it is necessary to check the battery coolant level at regular intervals."
    },
    {
      title: "Parking for Longer Periods",
      content: "When parked for an extended period of time (more than a month), maintain a charging range of 40 to 60% to safeguard the battery's health."
    }
  ];

  const benefits = [
    { icon: "⚡", title: "Instant Performance", description: "Experience immediate torque and acceleration that outperforms traditional combustion engines." },
    { icon: "🌍", title: "Eco-Friendly", description: "Zero tailpipe emissions mean cleaner air and a reduced carbon footprint for our planet." },
    { icon: "💰", title: "Cost Efficient", description: "Lower maintenance costs and reduced fuel expenses compared to gasoline vehicles." },
    { icon: "🔌", title: "Convenient Charging", description: "Charge at home overnight or at one of our rapidly expanding network of fast-charging stations." },
    { icon: "🤖", title: "Advanced Tech", description: "Cutting-edge autonomous driving features and over-the-air software updates." },
    { icon: "🔋", title: "Long Range", description: "Our latest battery technology delivers industry-leading range on a single charge." }
  ];

  return (
    <div className="home-container" ref={ref}>
      
      <section className="hero-section">
        <div className="content-wrapper">
        
          <motion.div 
            className="car-info"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Choose The Best Car
            </motion.h1>
            
            <motion.div 
              className="car-model"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2>{currentCar.name}</h2>
              <p>{currentCar.type}</p>
            </motion.div>
            
            <motion.div 
              className="car-stats"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
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
            </motion.div>
            
            <motion.div 
              className="car-details"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
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
            </motion.div>
            
            <motion.button 
              className="explore-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              onClick={() => navigate('/explore')}
            >
              Explore More
            </motion.button>
          </motion.div>
          
         
          <motion.div 
            className="car-visual"
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <img src={currentCar.image} alt={currentCar.name} className="car-image" />
          </motion.div>
        </div>
      </section>

     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <CarShowcase />
      </motion.div>

     
      <section className="battery-maintenance">
        <motion.div 
          className="maintenance-content"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.div 
            className="maintenance-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              How to Maintain Your EV's Battery
            </motion.h2>
            
            {maintenancePoints.map((point, index) => (
              <motion.div 
                key={index}
                className="maintenance-point"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
              >
                <h3>{point.title}</h3>
                <p>{point.content}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="maintenance-image"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <img src={batteryImage} alt="EV Battery Maintenance" className="battery-img" />
          </motion.div>
        </motion.div>
      </section>

     
      <motion.section 
        className="ev-benefits"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="benefits-container">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            Why Choose Electra?
          </motion.h2>
          <motion.p 
            className="benefits-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            Discover the advantages of going electric with our cutting-edge technology
          </motion.p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  delay: 2.1 + index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0, 210, 255, 0.2)"
                }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;

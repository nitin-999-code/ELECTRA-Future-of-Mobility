import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import { motion, useAnimation, useInView } from 'framer-motion';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    { value: "10+", label: "EV Models" },
    { value: "500+", label: "Charging Stations" },
    { value: "50K+", label: "Happy Customers" },
    { value: "100%", label: "Carbon Neutral" }
  ];

  const milestones = [
    { year: "2025", title: "Company Founded", description: "Electra was born with a vision to revolutionize mobility" },
    { year: "2025 1st May", title: "First Model Launched", description: "Introduced our flagship EV with record pre-orders" },
    
  ];

  return (
    <div className="about-container" ref={ref}>
      
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Driving</span> the Future
          </h1>
          <p className="hero-subtitle">
            We're not just building electric vehicles - we're creating an ecosystem for sustainable mobility.
          </p>
        </div>
        <div className="hero-image"></div>
      </motion.section>

    
      <motion.section 
        className="mission-section"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { 
            opacity: 1, 
            transition: { delay: 0.3, duration: 0.8 } 
          }
        }}
      >
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-grid">
          <motion.div 
            className="mission-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mission-icon">♻️</div>
            <h3>Sustainability</h3>
            <p>Creating vehicles that help preserve our planet for future generations</p>
          </motion.div>
          
          <motion.div 
            className="mission-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mission-icon">⚡</div>
            <h3>Innovation</h3>
            <p>Pushing the boundaries of EV technology and design</p>
          </motion.div>
          
          <motion.div 
            className="mission-card"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mission-icon">🚀</div>
            <h3>Performance</h3>
            <p>Delivering thrilling driving experiences without emissions</p>
          </motion.div>
        </div>
      </motion.section>

   
      <motion.section 
        className="stats-section"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { delay: 0.4, duration: 0.8 } 
          }
        }}
      >
        <h2 className="section-title">By The Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  } 
                }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

     
      <motion.section 
        className="timeline-section"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { 
            opacity: 1, 
            transition: { delay: 0.6, duration: 0.8 } 
          }
        }}
      >
        <h2 className="section-title">Our Journey</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: 0.7 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  } 
                }
              }}
            >
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </motion.section>

  
      <motion.section 
        className="team-section"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { delay: 0.8, duration: 0.8 } 
          }
        }}
      >
        
        
      </motion.section>
    </div>
  );
};

export default About;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import TestDriveForm from './TestDriveForm';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [showTestDriveForm, setShowTestDriveForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleTestDriveSubmit = (formData) => {
    console.log('Test drive scheduled:', formData);
    setShowTestDriveForm(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab === 'home' ? '' : tab}`);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="brand-name">ELECTRA</span>
          <span className="brand-tagline">Future of Mobility</span>
        </div>
        <div className="navbar-links">
          <button 
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </button>
          <button 
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </button>
          <button 
            className={`nav-link ${activeTab === 'popular' ? 'active' : ''}`}
            onClick={() => handleNavigation('popular')}
          >
            Popular
          </button>
          <button 
            className={`nav-link ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => handleNavigation('features')}
          >
            Features
          </button>
        </div>
        <button 
          className="cta-button"
          onClick={() => setShowTestDriveForm(true)}
        >
          Book Test Drive
        </button>
      </nav>

      {showTestDriveForm && (
        <TestDriveForm 
          onClose={() => setShowTestDriveForm(false)} 
          onSubmit={handleTestDriveSubmit}
        />
      )}

      {showSuccess && (
        <div className="success-popup">
          Test Drive Scheduled Successfully!
        </div>
      )}
    </>
  );
};

export default Navbar;
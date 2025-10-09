import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import TestDriveForm from './TestDriveForm';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [showTestDriveForm, setShowTestDriveForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleLogoClick = () => {
    setActiveTab('home');
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand" onClick={handleLogoClick}>
          <span className="brand-name">ELECTRA</span>
          <span className="brand-tagline">Future of Mobility</span>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
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
          <button 
            className="cta-button mobile-cta"
            onClick={() => {
              setShowTestDriveForm(true);
              setIsMobileMenuOpen(false);
            }}
          >
            Book Test Drive
          </button>
        </div>
        
        <button 
          className="cta-button desktop-cta"
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
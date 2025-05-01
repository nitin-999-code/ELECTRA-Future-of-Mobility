
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Electra</h3>
          <p>The future of mobility starts here. Join us in driving the electric revolution.</p>
          <div className="social-links">
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#models">Models</a></li>
            <li><a href="#test-drive">Test Drive</a></li>
            <li><a href="#charging">Charging</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>123 Future Street</li>
            <li>Tech Valley, CA 94025</li>
            <li>info@electra.com</li>
            <li>1-800-ELECTRA</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe for updates and offers</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Electra Motors. All rights reserved.</p>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
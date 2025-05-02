import React, { useState } from 'react';
import '../styles/TestDriveForm.css';

const TestDriveForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    location: '',
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    city: '',
    postalCode: '',
    make: 'Hyundai',
    model: '',
    time: '',
    date: '',
    comments:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="test-drive-modal">
      <div className="test-drive-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Schedule Test Drive</h2>
        <p>Before buying your favorite car, are you interested to take it for a test drive? Fill the below form with your contact information and the car model you are looking to test drive. We will get back to you shortly to confirm your appointment.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Customer Information</h3>
            <div className="form-group">
              <label>Location *</label>
              <select name="location" value={formData.location} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>E-Mail *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Telephone *</label>
                <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
              </div>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Vehicle Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Select Make *</label>
                <select name="make" value={formData.make} onChange={handleChange} required>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Tesla">Tesla</option>
                  <option value="Porsche">Porsche</option>
                </select>
              </div>
              <div className="form-group">
                <label>Select Model *</label>
                <select name="model" value={formData.model} onChange={handleChange} required>
                  <option value="">Select Model</option>
                  <option value="Porche Eission E">Porche Eission E</option>
                  <option value="Tucson">Tesla Cybertruk</option>
                  <option value="Kona Electric">Rimac Navera</option>
                </select>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Select Time</label>
                <select name="time" value={formData.time} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                  <option value="Afternoon (12PM-4PM)">Afternoon (12PM-4PM)</option>
                  <option value="Evening (4PM-7PM)">Evening (4PM-7PM)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Date *</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Your Comments</label>
              <textarea name="comments" value={formData.comments} onChange={handleChange} />
            </div>
          </div>
          
          <div className="form-footer">
            <p>* indicates required fields</p>
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestDriveForm;
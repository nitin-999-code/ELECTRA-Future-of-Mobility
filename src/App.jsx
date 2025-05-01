import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Popular from './components/Popular';
import Features from './components/Features';
import Footer from './components/Footer';
import ExploreMore from './components/ExploreMore';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Router>
      <div className="app">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreMore />} />
          <Route path="/about" element={<About />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
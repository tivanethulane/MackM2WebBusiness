// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Rating from './pages/Rating';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './pages/LoginModal';
import SignupModal from './pages/SignupModal';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showFooter, setShowFooter] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
      const documentHeight = document.documentElement.offsetHeight;
      setShowFooter(scrollPosition >= documentHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    if (token) {
      axios.get('http://localhost:5000/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setProfile(res.data.user))
      .catch(() => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setProfile(null);
      });
    }
  }, [isLoggedIn]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setProfile(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100">
        <Navbar
          onLoginClick={() => setShowLoginModal(true)}
          onSignupClick={() => setShowSignupModal(true)}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          profile={profile}
        />
        <div style={{ marginTop: '70px' }}></div>
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/rating" element={<Rating />} />
          </Routes>
        </div>
        {showFooter && <Footer />}
        <LoginModal
          show={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
        <SignupModal
          show={showSignupModal}
          onClose={() => setShowSignupModal(false)}
          onSignupSuccess={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      </div>
    </Router>
  );
}

export default App;

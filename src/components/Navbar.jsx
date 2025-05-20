// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = ({ onLoginClick, onLogout, isLoggedIn, profile, onSignupClick }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => setIsNavOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" ref={navbarRef}>
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={() => setIsNavOpen(false)}>
          <div className="icon-circle me-2">
            <i className="fas fa-laptop-code"></i>
          </div>
          MackM2 Web Business
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsNavOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item thulane">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsNavOpen(false)}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsNavOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setIsNavOpen(false)}>
                Services
              </NavLink>
            </li>

            {/* {isLoggedIn ? (
              <>
                <li className="nav-item d-flex align-items-center text-white px-2">
                  Hello, <strong className="ms-1">{profile?.username}</strong>
                </li>
                <li className="nav-item">
                  <button onClick={() => { onLogout(); setIsNavOpen(false); }} className="btn btn-outline-light ms-2">
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button onClick={() => { onLoginClick(); setIsNavOpen(false); }} className="btn btn-success ms-2">
                    Sign In
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick={() => { onSignupClick(); setIsNavOpen(false); }} className="btn btn-success ms-2">
                    Sign Up
                  </button>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

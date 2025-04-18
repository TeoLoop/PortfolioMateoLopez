import React, { useState } from 'react';
import './Navbar.css';

import logo from '../assets/FP.jpg';
import verified from '../assets/verificada-48.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className='nav'>
      <div className='container-logo'>
        <a href=""><img src={logo} alt="Mi Logo" className='logo' /></a>
        <h1 className='logo-title'>Mateo Lopez - Professional Developer</h1>
        <img src={verified} alt="logo de verificado" className='verified' />
      </div>

      <div className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

// Navbar.jsx
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';
import logo from '../assets/FP.jpg';
import verified from '../assets/verificada-48.png';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${theme}`}>
      <div className='container-logo'>
        <a href="#"><img src={logo} alt="Mi Logo" className='logo' /></a>
        <div className="logo-wrapper">
          <h1 className='logo-title'>Mateo Lopez <span className="subtitle">Professional Developer</span></h1>
          <img src={verified} alt="Verificado" className='verified' />
        </div>
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        <li className="theme-toggle-container">
          <button
            className={`theme-toggle ${theme === 'light' ? 'light' : ''}`}
            onClick={toggleTheme}
            title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>

      <div className={`menu-icon ${theme}`} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

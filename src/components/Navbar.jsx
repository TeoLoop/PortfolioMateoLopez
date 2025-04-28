import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navbar.css';  
import logo from '../assets/FP.jpg';
import verified from '../assets/verificada-48.png';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    // Si no estás en el home, navegá primero
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar a que Home cargue, luego scrollear
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Pequeño delay
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className={`nav ${theme}`}>
      <div className='container-logo'>
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Mi Logo" className='logo' />
        </Link>
        <div className="logo-wrapper">
          <h1 className='logo-title'>Mateo Lopez <span className="subtitle">Professional Developer</span></h1>
          <img src={verified} alt="Verificado" className='verified' />
        </div>
      </div>

      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><button className="nav-btn" onClick={() => scrollToSection('proyectos')}>Proyectos</button></li>
        <li><button className="nav-btn" onClick={() => scrollToSection('contacto')}>Contacto</button></li>
        <li><Link to="/experiencia" onClick={closeMenu}>Experiencia</Link></li>

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

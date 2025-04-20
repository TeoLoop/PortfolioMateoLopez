import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // Importar el hook de tema
import './Navbar.css';

import logo from '../assets/FP.jpg';
import verified from '../assets/verificada-48.png';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Acceder al estado del tema y la función para cambiarlo

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${theme}`}> {/* Aplicar la clase del tema */}
      <div className='container-logo'>
        <a href=""><img src={logo} alt="Mi Logo" className='logo' /></a>
        <h1 className='logo-title'>Mateo Lopez - Professional Developer</h1>
        <img src={verified} alt="logo de verificado" className='verified' />
      </div>

      <div className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        {/* Botón para cambiar de tema */}
        <div className="theme-toggle-container">
          <button className={`theme-toggle ${theme === 'light' ? 'light' : ''}`} onClick={toggleTheme}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

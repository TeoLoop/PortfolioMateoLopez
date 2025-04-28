import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';  // Importamos el hook

export const Footer = () => {
  const { theme } = useTheme(); // Obtener el tema actual

  // Función para subir al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={`footer ${theme === 'light' ? 'light' : ''}`}>
      <p>© {new Date().getFullYear()} Teo - Todos los derechos reservados</p>
      <div className="social-icons">
        <a href="https://github.com/TeoLoop" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/lopezmateo/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/teoloop/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:matelopez2830@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/+59895744084" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      {/* Botón de flecha para volver arriba */}
      <button className="scroll-top-btn" onClick={scrollToTop} title="Volver arriba">
        <FaArrowUp />
      </button>
    </footer>
  );
};

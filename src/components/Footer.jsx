import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
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
      </div>
      <button className="scroll-top-btn" onClick={scrollToTop} title="Volver arriba">
        <FaArrowUp />
      </button>
    </footer>
  );
};

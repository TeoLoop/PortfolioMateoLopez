import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 100) {
      setIsVisible(true); // Mostrar el botón después de 300px de desplazamiento
    } else {
      setIsVisible(false); // Ocultar el botón si el scroll es menor a 300px
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    // Verificar la posición de scroll al cargar la página
    checkScrollPosition();

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    isVisible && (
      <button
        className={`scroll-top-btn ${theme === 'dark' ? 'dark' : 'light'} ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Volver arriba"
      >
        <FaArrowUp />
      </button>

    )
  );
};

export default ScrollToTop;

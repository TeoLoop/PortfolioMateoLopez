import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Proyectos } from '../components/Proyectos';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import ScrollToTop from '../components/ScrollToTop'; // Importa el componente ScrollToTop
import Techs from '../components/Techs';
import ParticlesBackground from '../components/ParticlesBackground';
import MouseLight from '../components/MouseLight';

export const Home = () => {
  const { theme } = useTheme(); // Obtener el tema actual

  return (
    <>
      <ParticlesBackground />
      <MouseLight />
      <Navbar />
      <Hero />
      <Proyectos />
      <Techs />
      <Contact />
      <Footer />
      <ScrollToTop theme={theme} /> {/* Pasa el tema al componente ScrollToTop */}
      
      {/* Botón de WhatsApp flotante */}
      <a href="https://wa.me/+59895744084" target="_blank" className="whatsapp-btn" aria-label="Contacta por WhatsApp">
        <img src="https://img.icons8.com/?size=100&id=MW3L3LMSpawR&format=png&color=000000" alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </>
  );
};

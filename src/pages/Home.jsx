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
      
    </>
  );
};

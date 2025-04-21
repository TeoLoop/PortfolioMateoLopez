import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Proyectos } from '../components/Proyectos';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import ScrollToTop from '../components/ScrollToTop'; // Importa el componente ScrollToTop
import Techs from '../components/Techs';

export const Home = () => {
  const { theme } = useTheme(); // Obtener el tema actual

  return (
    <>
      <Navbar />
      <Hero />
      <Proyectos />
      <Techs/>
      <Contact />
      <Footer />
      <ScrollToTop theme={theme} /> {/* Pasa el tema al componente ScrollToTop */}
    </>
  );
};

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
  return (
    <section className='hero'>
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="hero-title">
          <Typewriter
            words={[
              'HOLA, MI NOMBRE ES MATEO LOPEZ',
              'HI, MY NAME IS MATEO LOPEZ',
              'OLÁ, MEU NOME É MATEO LOPEZ',
            ]}
            
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Soy Desarrollador FullStack.
        </motion.h2>

        <motion.p
          className="hero-p"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          En formación con experiencia en implementación de software y una base sólida en desarrollo backend y frontend. Actualmente finalizando la certificación Professional Developer en Digital House, donde trabajé con tecnologías como Java, .NET, React.js, HTML, CSS, JavaScript, MySQL y metodologías ágiles. También tengo conocimientos en administración de servidores y uso de sistemas operativos basados en Linux. Apasionado por el desarrollo de soluciones funcionales, busco seguir creciendo profesionalmente aplicando buenas prácticas y aprendiendo constantemente.
        </motion.p>

        <motion.a
          href="#proyectos"
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
         Ver mis proyectos
        </motion.a>
      </motion.div>
    </section>
  );
};

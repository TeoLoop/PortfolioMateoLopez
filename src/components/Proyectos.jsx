import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Proyectos.css';
import { useTheme } from '../context/ThemeContext';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import nomadax1 from '../assets/nomadax1.png';
import nomadax2 from '../assets/nomadax2.png';
import nomadax3 from '../assets/nomadax3.png';
import nomadax4 from '../assets/nomadax4.png';
import nomadax5 from '../assets/nomadax5.png';
import nomadax6 from '../assets/nomadax6.png';
import nomadax7 from '../assets/nomadax7.png';

export const Proyectos = () => {
  const { theme } = useTheme();
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const proyectoPrincipal = {
    title: 'NomadaX - Plataforma de Reservas en Construcción',
    description: 'NomadaX es una plataforma emergente de reservas de alojamientos temporales, inspirada en la experiencia de Airbnb. Este proyecto académico está en pleno desarrollo y utiliza tecnologías modernas como React para el frontend, Spring Boot para el backend y MySQL para la base de datos. Con Docker Compose, puedes probar fácilmente la aplicación de manera local y experimentar su funcionamiento completo. El panel de administración permite gestionar hoteles de manera sencilla y eficiente. ¡Acompañanos en este proceso de construcción y sé parte de la evolución de NomadaX!',
    techs: 'React, Java, Spring Boot, MySQL, Docker Compose, Git',
    imageUrls: [
      nomadax1,
      nomadax2,
      nomadax3,
      nomadax4,
      nomadax5,
      nomadax6,
      nomadax7
    ],
    link: 'https://github.com/TeoLoop/NomadaX',
  };

  useEffect(() => {
    fetch('https://api-proyectos-k0df.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProyectos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error cargando proyectos:', err);
        setError(true);
        setLoading(false);
      });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll cuando el modal está abierto
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  // Variantes para animaciones de Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className={`proyectos ${theme}`} id="proyectos">
      <motion.h2 
        className="proyectos-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mis Proyectos
      </motion.h2>

      <motion.div 
        className={`proyecto-principal ${theme}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3>{proyectoPrincipal.title}</h3>
        <p>{proyectoPrincipal.description}</p>
        <div className="tecnologias">
          {proyectoPrincipal.techs.split(',').map((tec, i) => (
            <motion.span 
              key={`principal-${i}`} 
              className="tech-tag"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <strong>{tec.trim()}</strong>
            </motion.span>
          ))}
        </div>
        {proyectoPrincipal.imageUrls.length > 0 && (
          <div className="carousel-container">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3000}
              stopOnHover
              className="carousel"
              showArrows={!isMobile}
              showIndicators={true}
              swipeable={true}
              emulateTouch={true}
            >
              {proyectoPrincipal.imageUrls.map((img, i) => (
                <div key={i} className="carousel-item">
                  <img src={img} alt={`${proyectoPrincipal.title} - ${i + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        )}
        <div className="proyecto-links">
          <motion.a 
            href={proyectoPrincipal.link} 
            target="_blank" 
            rel="noreferrer" 
            className="ver-mas github-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> Código en GitHub
          </motion.a>
        </div>
      </motion.div>

      {loading && (
        <motion.div 
          className="spinner-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Cargando proyectos...</p>
          <div className="spinner"></div>
        </motion.div>
      )}

      {error && (
        <motion.p 
          className="mensaje-error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No se pudieron cargar los proyectos.
        </motion.p>
      )}

      {!loading && !error && (
        <motion.div 
          className="proyectos-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {proyectos.map((p) => (
            <motion.div 
              className={`proyecto-card ${theme}`} 
              key={p.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tecnologias">
                {p.techs.split(',').map((tec, i) => (
                  <motion.span 
                    key={`${p.id}-${i}`} 
                    className="tech-tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <strong>{tec.trim()}</strong>
                  </motion.span>
                ))}
              </div>

              {p.imageUrls && p.imageUrls.length > 0 && (
                <div className="carousel-container">
                  <Carousel 
                    showThumbs={false} 
                    showStatus={false} 
                    infiniteLoop 
                    className="carousel"
                    showArrows={false}
                    showIndicators={true}
                    swipeable={true}
                    emulateTouch={true}
                  >
                    {p.imageUrls.map((img, i) => (
                      <div key={i} className="carousel-item">
                        <img 
                          src={`https://api-proyectos-k0df.onrender.com${img}`} 
                          alt={`${p.title} - ${i + 1}`} 
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
              <motion.button 
                className="btn-open-modal" 
                onClick={() => openModal(p)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode /> Ver más detalles
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {modalVisible && selectedProject && (
          <motion.div 
            className={`modal-overlay ${theme}`} 
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button 
                className="btn-close-modal" 
                onClick={closeModal}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={24} />
              </motion.button>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="tecnologias">
                {selectedProject.techs.split(',').map((tec, i) => (
                  <motion.span 
                    key={`${selectedProject.id}-${i}`} 
                    className="tech-tag"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <strong>{tec.trim()}</strong>
                  </motion.span>
                ))}
              </div>

              {selectedProject.imageUrls && selectedProject.imageUrls.length > 0 && (
                <div className="carousel-container">
                  <Carousel 
                    showThumbs={false} 
                    showStatus={false} 
                    infiniteLoop 
                    className="carousel"
                    showArrows={!isMobile}
                    showIndicators={true}
                    swipeable={true}
                    emulateTouch={true}
                  >
                    {selectedProject.imageUrls.map((img, i) => (
                      <div key={i} className="carousel-item">
                        <img
                          src={`https://api-proyectos-k0df.onrender.com${img}`}
                          alt={`${selectedProject.title} - ${i + 1}`}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
              <div className="proyecto-links">
                {selectedProject.link && (
                  <motion.a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="ver-mas github-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Código en GitHub
                  </motion.a>
                )}
                {selectedProject.demoLink && (
                  <motion.a 
                    href={selectedProject.demoLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="ver-mas demo-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Ver Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

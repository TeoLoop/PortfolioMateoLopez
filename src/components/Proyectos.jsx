import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Proyectos.css';
import { useTheme } from '../context/ThemeContext';
import { FaTimes, FaGithub } from 'react-icons/fa';
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
    techs: 'React, Java, Spring Boot, MySQL, Docker Compose',
    imageUrls: [
      nomadax1,
      nomadax2,
      nomadax3,
      nomadax4,
      nomadax5,
      nomadax6,
      nomadax7
    ],
    link: 'https://github.com/TeoLoop/NomadaX'
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
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  return (
    <section className={`proyectos ${theme}`} id="proyectos">
      <h2 className="proyectos-title">Mis Proyectos</h2>

      <div className={`proyecto-principal ${theme}`}>
        <h3>{proyectoPrincipal.title}</h3>
        <p>{proyectoPrincipal.description}</p>
        <div className="tecnologias">
          {proyectoPrincipal.techs.split(',').map((tec, i) => (
            <span key={`principal-${i}`} className="tech-tag">
              <strong>{tec.trim()}</strong>
            </span>
          ))}
        </div>
        {proyectoPrincipal.imageUrls.length > 0 && (
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3000}
            stopOnHover
            className="carousel"
          >
            {proyectoPrincipal.imageUrls.map((img, i) => (
              <div key={i}>
                <img src={img} alt={`${proyectoPrincipal.title} - ${i + 1}`} />
              </div>
            ))}
          </Carousel>
        )}
        <a href={proyectoPrincipal.link} target="_blank" rel="noreferrer" className="ver-mas">
          <FaGithub /> Ver en GitHub
        </a>
      </div>

      {loading && (
        <div className="spinner-container">
          <p>Cargando proyectos...</p>
          <div className="spinner"></div>
        </div>
      )}

      {error && <p className="mensaje-error">No se pudieron cargar los proyectos.</p>}

      {!loading && !error && (
        <div className="proyectos-grid">
          {proyectos.map((p) => (
            <div className={`proyecto-card ${theme}`} key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tecnologias">
                {p.techs.split(',').map((tec) => (
                  <span key={`${p.id}-${tec}`} className="tech-tag">
                    <strong>{tec.trim()}</strong>
                  </span>
                ))}
              </div>

              {p.imageUrls && p.imageUrls.length > 0 && (
                <Carousel showThumbs={false} showStatus={false} infiniteLoop className="carousel">
                  {p.imageUrls.map((img, i) => (
                    <div key={i}>
                      <img src={`https://api-proyectos-k0df.onrender.com${img}`} alt={`${p.title} - ${i + 1}`} />
                    </div>
                  ))}
                </Carousel>
              )}
              <button className="btn-open-modal" onClick={() => openModal(p)}>
                Ver más
              </button>
            </div>
          ))}
        </div>
      )}

      {modalVisible && selectedProject && (
        <div className={`modal-overlay ${theme}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-modal" onClick={closeModal}>
              <FaTimes size={24} />
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="tecnologias">
              {selectedProject.techs.split(',').map((tec) => (
                <span key={`${selectedProject.id}-${tec}`} className="tech-tag">
                  <strong>{tec.trim()}</strong>
                </span>
              ))}
            </div>

            {selectedProject.imageUrls && selectedProject.imageUrls.length > 0 && (
              <Carousel showThumbs={false} showStatus={false} infiniteLoop className="carousel">
                {selectedProject.imageUrls.map((img, i) => (
                  <div key={i}>
                    <img
                      src={`https://api-proyectos-k0df.onrender.com${img}`}
                      alt={`${selectedProject.title} - ${i + 1}`}
                    />
                  </div>
                ))}
              </Carousel>
            )}
            <a href={selectedProject.link} target="_blank" rel="noreferrer" className="ver-mas">
              <FaGithub /> Ver en GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

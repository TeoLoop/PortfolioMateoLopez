import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Proyectos.css';
import { useTheme } from '../context/ThemeContext'; // Asegúrate de importar el useTheme
import { FaTimes } from 'react-icons/fa';

export const Proyectos = () => {
  const { theme } = useTheme(); // Ahora puedes usar el tema
  const [proyectos, setProyectos] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('https://api-proyectos-k0df.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((err) => console.error('Error cargando proyectos:', err));

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
    <section className={`proyectos ${theme}`} id='proyectos'>
      <h2 className='proyectos-title'>Mis Proyectos</h2>

      {isMobile ? (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop className="carousel">
          {proyectos.map((p) => (
            <div className={`proyecto-card ${theme}`} key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tecnologias">
                {p.techs.split(',').map((tec) => (
                  <span key={`${p.id}-${tec}`} className='tech-tag'>{tec.trim()}</span>
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
              {/* <a href={p.link} target='_blank' rel='noreferrer' className='ver-mas'>Ver en GitHub</a> */}
              <button className="btn-open-modal" onClick={() => openModal(p)}>Ver Detalles</button>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="proyectos-grid">
          {proyectos.map((p) => (
            <div className={`proyecto-card ${theme}`} key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tecnologias">
                {p.techs.split(',').map((tec) => (
                  <span key={`${p.id}-${tec}`} className='tech-tag'>{tec.trim()}</span>
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
              {/* <a href={p.link} target='_blank' rel='noreferrer' className='ver-mas'>Ver en GitHub</a> */}
              <button className="btn-open-modal" onClick={() => openModal(p)}>Ver mas</button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
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
                <span key={`${selectedProject.id}-${tec}`} className='tech-tag'>{tec.trim()}</span>
              ))}
            </div>

            {selectedProject.imageUrls && selectedProject.imageUrls.length > 0 && (
              <Carousel showThumbs={false} showStatus={false} infiniteLoop className="carousel">
                {selectedProject.imageUrls.map((img, i) => (
                  <div key={i}>
                    <img src={`https://api-proyectos-k0df.onrender.com${img}`} alt={`${selectedProject.title} - ${i + 1}`} />
                  </div>
                ))}
              </Carousel>
            )}
            <a href={selectedProject.link} target='_blank' rel='noreferrer' className='ver-mas'>Ver en GitHub</a>
          </div>
        </div>
      )}
    </section>
  );
};

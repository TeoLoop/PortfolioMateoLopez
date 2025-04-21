import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Proyectos.css';
import { useTheme } from '../context/ThemeContext';

export const Proyectos = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const [proyectos, setProyectos] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch('https://api-proyectos-k0df.onrender.com/api/projects')
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((err) => console.error('Error cargando proyectos:', err));

    // Verificar el tamaño de la pantalla para determinar si es móvil
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Tamaño móvil por defecto
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar la función de tamaño al montar el componente

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              <a href={p.link} target='_blank' rel='noreferrer' className='ver-mas'>Ver en GitHub</a>
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
              <a href={p.link} target='_blank' rel='noreferrer' className='ver-mas'>Ver en GitHub</a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

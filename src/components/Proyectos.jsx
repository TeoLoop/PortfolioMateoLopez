import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Proyectos.css';

export const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    fetch('https://api-proyectos-production.up.railway.app/api/projects')
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((err) => console.error('Error cargando proyectos:', err));
  }, []);

  return (
    <section className='proyectos' id='proyectos'>
      <h2 className='proyectos-title'>Mis Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((p) => (
          <div className="proyecto-card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tecnologias">
              {p.techs.split(',').map((tec) => (
                <span key={`${p.id}-${tec}`} className='tech-tag'>{tec.trim()}</span>
              ))}
            </div>
            <a href={p.link} target='_blank' rel='noreferrer' className='ver-mas'>Ver en GitHub</a>
            
            {p.imageUrls && p.imageUrls.length > 0 && (
              <Carousel showThumbs={false} showStatus={false} infiniteLoop className="carousel">
                {p.imageUrls.map((img, i) => (
                  <div key={i}>
                    <img src={`https://api-proyectos-k0df.onrender.com${img}`} alt={`${p.title} - ${i + 1}`} />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

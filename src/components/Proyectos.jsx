import React from 'react'
import './Proyectos.css'

export const Proyectos = () => {

  const PROYECTOS = [
    {
      titulo: 'Sistema de Gestión',
      descripcion: 'App CRUD hecha con Java, SQL Server y Spring Boot.',
      tecnologias: ['Java', 'SQL', 'Spring Boot'],
      link: 'https://github.com/tuusuario/proyecto1',
    },
    {
      titulo: 'Proyecto Prueba 2',
      descripcion: 'APLICACIONES EPICAS',
      tecnologias: ['Java', 'SQL', 'Spring Boot'],
      link: 'https://github.com/tuusuario/proyecto1',
    },
    {
      titulo: 'E-commerce',
      descripcion: 'App CRUD hecha con Java, SQL Server y Spring Boot.',
      tecnologias: ['React', 'SQL', 'Spring Boot'],
      link: 'https://github.com/tuusuario/proyecto1',
    }
  ]


  return (
    <section className='proyectos' id='proyectos'>
      <h2 className='proyectos-title'>Mis Proyectos</h2>
      <div className="proyectos-grid">
        {PROYECTOS.map((p, index) =>(
          <div className="proyecto-card" key={index}>
            <h3>{p.titulo}</h3>
            <p>{p.descripcion}</p>
            <div className="tecnologias">
              {p.tecnologias.map((tec, i) =>(
                <span key={`${p.titulo}-${tec}`} className='tech-tag'>{tec}</span>
              ))}
            </div>
            <a href="{p.link}" target='_blank' rel='noreferrer' className='ver-mas'>Ver en GitHub</a>
          </div>
        ))}
      </div>
    </section>
  )
}

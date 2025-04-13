import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className="content">
        <h2 className="hero-title">HOLA, MI NOMBRE ES MATEO LOPEZ</h2>
        <h2 className='hero-subtitle'>Soy Desarrollador FullStack.</h2>
        <p className="hero-p">
          en formación con experiencia en implementación de software y conocimientos sólidos en desarrollo backend y frontend. Estoy finalizando la certificación Professional Developer en Digital House, donde me formé en tecnologías como Java, .NET, React.js, HTML, CSS, JavaScript, MySQL y metodologías ágiles. Me interesa crecer en el área del desarrollo, aplicando buenas prácticas y aprendiendo constantemente.
        </p>
        <a href="#proyectos" className='hero-button'>Ver mis proyectos</a>
      </div>
    </section>
  )
}

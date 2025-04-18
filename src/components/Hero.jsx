import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className="content">
        <h2 className="hero-title">HOLA, MI NOMBRE ES MATEO LOPEZ</h2>
        <h2 className='hero-subtitle'>Soy Desarrollador FullStack.</h2>
        <p className="hero-p">
          En formación con experiencia en implementación de software y una base sólida en desarrollo backend y frontend. Actualmente finalizando la certificación Professional Developer en Digital House, donde trabajé con tecnologías como Java, .NET, React.js, HTML, CSS, JavaScript, MySQL y metodologías ágiles. También tengo conocimientos en administración de servidores y uso de sistemas operativos basados en Linux. Apasionado por el desarrollo de soluciones funcionales, busco seguir creciendo profesionalmente aplicando buenas prácticas y aprendiendo constantemente.
        </p>
        <a href="#proyectos" className='hero-button'>Ver mis proyectos</a>
      </div>
    </section>
  )
}

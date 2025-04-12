import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero'>
        <h2 className="hero-title">Hola! soy Mateo Lopez</h2>
        <p className="hero-subtitle">
            Desarrollador Full Stack especializado en React, Java y SQL.
        </p>
        <a href="#proyectos" className='hero-button'>Ver mis proyectos</a>
    </section>
  )
}

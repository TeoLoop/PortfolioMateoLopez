import React from 'react'
import './Navbar.css'

import logo from '../assets/logo2.jpg'
import verified from '../assets/verificada-48.png'

export const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='container-logo'>
        <img src={logo} alt="Mi Logo" className='logo' />
        <h1 className='logo-title'>Mateo Lopez - Professional Developer</h1>
        <img src={verified} alt="logo de verificado" className='verified'/>
      </div>

      <ul className='nav-list'>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  )
}

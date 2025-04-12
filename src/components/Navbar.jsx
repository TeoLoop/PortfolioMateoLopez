import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='nav'>
        <h1 className='logo'>Mateo Lopez - Professional Developer</h1>
        <ul className='nav-list'>
            <li href='#proyectos'>Proyectos</li>
            <li href='#contacto'>Contacto</li>
        </ul>
    </nav>
  )
}

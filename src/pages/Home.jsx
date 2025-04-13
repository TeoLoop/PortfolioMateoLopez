import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Proyectos } from '../components/Proyectos'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Proyectos/>
        <Contact/>
        <Footer/>
    </>
  )
}

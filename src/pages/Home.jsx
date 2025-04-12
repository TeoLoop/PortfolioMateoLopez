import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Proyectos } from '../components/Proyectos'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Proyectos/>
    </>
  )
}

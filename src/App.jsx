import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Mission from './components/Mission'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Mission />
      <Partners />
      <CTA />
      <Footer />
    </>
  )
}

export default App

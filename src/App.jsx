import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificate from './components/Certificate'



function App() {

  return (
    <>
       
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        {/* <Certificate/> */}
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App

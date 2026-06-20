import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Content'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App

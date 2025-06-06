import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Contact from './components/Contact'
import LetsTalk from './components/LetsDiscuss'
import Services from './components/Services'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Portfolio />
      <LetsTalk />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App

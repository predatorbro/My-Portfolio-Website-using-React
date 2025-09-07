import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import Blog from './components/Blog'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/blog/:slug" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App

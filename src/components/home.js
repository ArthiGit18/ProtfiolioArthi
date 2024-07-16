import React from 'react'
import Hero from '../pages/hero'
import About from '../pages/about'
import Skills from '../pages/skills'
import Projects from '../pages/projects'
import Education from '../pages/education'
import Contact from '../pages/contact'
import Footer from '../pages/footer'

const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Education />
      </div>
      <div id="links">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default Home
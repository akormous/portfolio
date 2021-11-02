import * as React from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProfessionalExperience from "../components/ProfessionalExperience"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

// markup
const IndexPage = () => {
  return (
   <>
      <Navbar />
      <Hero />
      <About />
      <ProfessionalExperience />
      <Projects />
      <Contact />
      <Footer />
  </>     
    
    
  )
}

export default IndexPage

import * as React from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProfessionalExperience from "../components/ProfessionalExperience"
import About from "../components/About"
import Tldr from "../components/TLDR"

// markup
const IndexPage = () => {
  return (
   <>
      <Navbar />
      <Hero />
      <Tldr />
      <About />
      <ProfessionalExperience />
  </>     
    
    
  )
}

export default IndexPage

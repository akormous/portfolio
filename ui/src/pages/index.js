import React, { useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import LoadingPage from "./loading"
import JobExperience from "../components/JobExperience"

// markup
const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []); 

  return loading ? (
    <LoadingPage />
  ) : 
  (
   <>
      <Navbar />
      <Hero />
      <About />
      <JobExperience />
      <Projects />
      <Contact />
      <Footer />
  </>     
    
    
  )
}

export default IndexPage

import React, { useState, useEffect } from "react"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import LoadingPage from "./loading"
import JobExperience from "../components/JobExperience"
import { getRandomQuote } from "../utility/common"

// markup
const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  
  // set quote on loading screen
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  
  useEffect(() => {
    const randomQuote = getRandomQuote();
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    setTimeout(() => setLoading(false), 2500)

  }, []); 

  return loading ? (
    <LoadingPage quote={quote} author={author} />
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

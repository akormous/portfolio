import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"
import theme from '../theme'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProfessionalExperience from "../components/ProfessionalExperience"
import SocialMediaUpdates from "../components/SocialMediaUpdates"
import Tldr from "../components/TLDR"
import TechnicalSkills from "../components/TechnicalSkills"

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Tldr />
      <ProfessionalExperience />
      <TechnicalSkills />
      <SocialMediaUpdates />      
    </ThemeProvider>
    
  )
}

export default IndexPage

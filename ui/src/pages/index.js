import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"
import theme from '../theme'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProfessionalExperience from "../components/ProfessionalExperience"
import SocialMediaUpdates from "../components/SocialMediaUpdates"
import TLDR from "../components/TLDR"
// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <TLDR />
      <ProfessionalExperience />
      <SocialMediaUpdates />      
    </ThemeProvider>
    
  )
}

export default IndexPage

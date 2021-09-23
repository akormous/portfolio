import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"
import theme from '../theme'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Experience from "../components/Experience"
import SocialMediaUpdates from "../components/SocialMediaUpdates"

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <SocialMediaUpdates />      
    </ThemeProvider>
    
  )
}

export default IndexPage

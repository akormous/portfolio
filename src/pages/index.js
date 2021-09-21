import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"
import theme from '../theme'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InstagramFeed from '../components/InstagramFeed'

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      
    </ThemeProvider>
    
  )
}

export default IndexPage

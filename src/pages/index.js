import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { CssBaseline } from "@material-ui/core"
import theme from '../theme'
import Navbar from '../components/Navbar'

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
    
  )
}

export default IndexPage

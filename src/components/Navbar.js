import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from '../theme'
import { AppBar, Button, Toolbar } from "@material-ui/core"

export default function Navbar() {
    return(
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Button>Contact</Button>
          <Button>Projects</Button>
          <Button>Socials</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    )
}
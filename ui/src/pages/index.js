import * as React from "react"
import { Link } from 'gatsby-theme-material-ui';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

// markup
const IndexPage = () => {
  return (
    <AppBar
     position="fixed"
    >
      <Toolbar>
        <Typography variant="h6">
          AC
        </Typography>
        <Button>Contact</Button>
        <Button>Contact</Button>
        
      </Toolbar>

    </AppBar>
  )
}

export default IndexPage

import * as React from "react"
import { AppBar, Button, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {

  }
})

export default function Navbar() {
  const styles = useStyles();
    return(
      <AppBar className={styles.root} position='sticky'>
        <Toolbar>
          <Button>Contact</Button>
          <Button>Projects</Button>
          <Button>Socials</Button>
        </Toolbar>
      </AppBar>
    
    )
}
import React, { useState } from "react"
import { AppBar, Toolbar, IconButton, Link, Typography, List, ListItem, Divider, Button, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { SwipeableDrawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    height: '74px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    backdropFilter: 'blur(4px)',
    'transition': 'all 0.20s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.60)'
    }
  },
  
  easteregg: {
    color: '#f2fafa',
    background: 'linear-gradient(90deg, #d53369 0%, #daae51 100%);',
    margin: theme.spacing(1)
  },
  link: {
    color: '#ffffff',
    marginRight: theme.spacing(6),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    '&:hover': {
      color: '#5e615f'
    }
  },
  logo: {
    fontWeight: 500,
    marginRight: 'auto',
    padding: theme.spacing(2)
  },
  drawer: {
    padding: theme.spacing(2),
    minWidth: '250px',
    backgroundColor: 'rgba(0,0,0,0.65)',
    backdropFilter: 'blur(10px)'
  }
}));

const navLinks = [
  {
    name: "About", href: "#about"
  },
  {
    name: "Experience", href: "#experience"
  },
  {
    name: "Projects", href: "#projects"
  },
  {
    name: "Contact", href: "#contact"
  },
]

export default function Navbar() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
    return(
      <AppBar className={styles.root} position='fixed'>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography className={styles.logo} variant="body2">AKSHAT CHAUHAN</Typography>
            <Hidden smDown>
              {navLinks.map((item) => (
                <Link 
                key={item.name}
                className={styles.link}
                variant="button"
                underline="none"
                href={item.href}
                >{item.name}</Link>
              ))}
              
            </Hidden>
            <Hidden mdUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          classes={{paper: styles.drawer}}
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}

        >
          <List>
          
              <Typography variant="caption">
                {"Hello visitor,"}<br /> 
                {"Click here for good luck! 😉"}
              </Typography>
              <br />
              <Button className={styles.easteregg} onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>Free Luck 🍀</Button>
              <Divider />
            {navLinks.map((item) => (
              <ListItem key={item.name}>
                <Link 
                className={styles.link}
                variant="button"
                underline="none"
                href={item.href}
                onClick={() => setOpen(false)}
                >{item.name}</Link>
              </ListItem>
            ))}
            
          </List>
        </SwipeableDrawer>
      </AppBar>
    
    )
}
import React, { useState } from "react"
import { Button, AppBar, Toolbar, IconButton, Typography, List, ListItem, Divider, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { SwipeableDrawer } from "@material-ui/core";
import SocialLinks from "./SocialLinks";
import {Link as ScrollLink} from 'react-scroll';
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
    marginLeft: theme.spacing(6),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    cursor: 'default',
    '&:hover': {
      color: theme.palette.primary.yellow,
    },
  },
  button: {
      color: theme.palette.lightbackground.default,
      fontWeight: '800',
      borderRadius: 16,
      marginLeft: theme.spacing(6),
      'box-shadow': '0px 0px 25px #FFEF00',
      '&:hover': {
          background: 'linear-gradient(90deg, #CFCC0A 0%, #FE9D07 100%)',
          color: theme.palette.primary.dark,
      },
  },
  buttonlink: {
    color: '#ffffff',
    padding: theme.spacing(1.5),
    fontSize: '0.75rem',
    width: '100%',
    display: 'flex',
    cursor: 'default',
    textTransform: 'uppercase',
    justifyContent: 'left',
    '&:hover': {
      backgroundColor: theme.palette.background.paper
    }
  },
  logo: {
    fontWeight: 500,
    marginRight: 'auto',
    color: '#ffffff',
    cursor: 'default',
    padding: theme.spacing(2),
    '&:hover': {
      color: theme.palette.primary.yellow,
    },
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
    name: "About", href: "about"
  },
  {
    name: "Experience", href: "experience"
  },
  {
    name: "Projects", href: "projects"
  },
  {
    name: "Contact", href: "contact"
  },
]

export default function Navbar() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
    return(
      <AppBar className={styles.root} position='fixed'>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <ScrollLink  
             className={styles.logo}
             key="logo"
             to="hero"
             spy={true}
             smooth={true}
             duration={200}
            >
              <Typography variant="caption">
                AKSHAT CHAUHAN
              </Typography>
            </ScrollLink>
            <Hidden smDown>
              {navLinks.map((item) => (
                  <ScrollLink
                   key={item.name}
                   className={styles.link}
                   to={item.href}
                   spy={true}
                   smooth={true}
                   duration={300}
                  >
                  {item.name}
                  </ScrollLink>
              ))}
              <Button 
                className={styles.button}
                href="mailto:iamakshatchauhan@gmail.com"
                variant="outlined">
                  Hire Me
              </Button>
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
          <Typography align="center" variant="caption">
                {"Hello visitor, Let's connect! 😄"}
          </Typography>
          <List>
              <SocialLinks fontSize="small" />
              <Divider />
            {navLinks.map((item) => (
              <ListItem key={item.name} disableGutters>
                
                <ScrollLink
                 key={item.name}
                 className={styles.buttonlink}
                 to={item.href}
                 spy={true}
                 smooth={true}
                 duration={300}
                 onClick={() => setOpen(false)}
                >
                  {item.name}
                </ScrollLink>
                
              </ListItem>
            ))}
            <Button 
              className={styles.buttonlink}
              href="mailto:iamakshatchauhan@gmail.com">
                Hire Me
            </Button>
          </List>
        </SwipeableDrawer>
      </AppBar>
    
    )
}
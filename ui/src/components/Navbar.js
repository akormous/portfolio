import React, { useState } from "react"
import { AppBar, Toolbar, IconButton, Link, Typography, List, ListItem, Divider, Button, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import SocialLinks from "./SocialLinks";
import { Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { SwipeableDrawer } from "@material-ui/core";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    height: '74px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    'transition': 'all 0.20s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.40)'
    }
  },
  
  easteregg: {
    color: '#f2fafa',
    background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    margin: theme.spacing(1)
  },
  link: {
    color: '#ffffff',
    marginRight: theme.spacing(6),
    '&:hover': {
      color: '#5e615f'
    }
  },
  logo: {
    marginRight: 'auto',
    padding: theme.spacing(2)
  },
  drawer: {
    padding: theme.spacing(2)
  }
}));

const navLinks = [
  {
    name: "About", href: ""
  },
  {
    name: "Contact", href: ""
  },
  {
    name: "Resume", href: ""
  }
]

export default function Navbar() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
    return(
      <AppBar className={styles.root} position='fixed'>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography className={styles.logo} variant="caption">Under Construction</Typography>
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
            <EmojiPeopleIcon /><br />
              <Typography variant="caption">
                {"Hello visitor, welcome to my website."}<br /> 
                {"Click here to reveal your easter egg."}
              </Typography>
              <br />
              <Button className={styles.easteregg} onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>Easter Egg</Button>
              <Divider />
            {navLinks.map((item) => (
              <ListItem key={item.name}>
                <Link 
                className={styles.link}
                variant="button"
                underline="none"
                href={item.href}
                >{item.name}</Link>
              </ListItem>
            ))}
            
          </List>
        </SwipeableDrawer>
      </AppBar>
    
    )
}
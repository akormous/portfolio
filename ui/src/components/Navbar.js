import * as React from "react"
import { AppBar, Button, Toolbar, IconButton, Link, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '74px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    'transition': 'all 0.20s',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.90)'
    }
  },
}));

export default function Navbar() {
  const styles = useStyles();
    return(
      <AppBar className={styles.root} position='fixed'>
        <Toolbar>
          <Typography variant="body1">Under Construction</Typography>

          <IconButton color="#ffffff" onClick={() => window.open('https://linkedin.com/in/akormous')} >
            <LinkedInIcon fontSize="medium" />
          </IconButton>

          <IconButton color="#ffffff" onClick={() => window.open('https://github.com/akormous')} >
            <GitHubIcon fontSize="medium" />
          </IconButton>

          <IconButton color="#ffffff" onClick={() => window.open('https://twitter.com/akormous')} >
            <TwitterIcon fontSize="medium" />
          </IconButton>

          <IconButton color="#ffffff" onClick={() => window.open('https://instagram.com/akormous')} >
            <InstagramIcon fontSize="medium" />
          </IconButton>
          
          <IconButton color="#ffffff" onClick={() => window.open('https://www.youtube.com/channel/UCvXahJHpat0GJRtGQypOq-A')} >
            <YouTubeIcon fontSize="medium" />
          </IconButton>
        </Toolbar>
      </AppBar>
    
    )
}
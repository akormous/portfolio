import React from "react";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


const useStyles = makeStyles((theme) => ({
    button: {
        color: '#ffffff'
    }
}));

export default function SocialLinks() {
    const styles = useStyles();
    return (
        <>
        <IconButton className={styles.button} onClick={() => window.open('https://linkedin.com/in/akormous')} >
            <LinkedInIcon fontSize="medium" />
        </IconButton>

        <IconButton className={styles.button} onClick={() => window.open('https://github.com/akormous')} >
            <GitHubIcon fontSize="medium" />
        </IconButton>

        <IconButton className={styles.button} onClick={() => window.open('https://twitter.com/akormous')} >
            <TwitterIcon fontSize="medium" />
        </IconButton>

        <IconButton className={styles.button} onClick={() => window.open('https://instagram.com/akormous')} >
            <InstagramIcon fontSize="medium" />
        </IconButton>
        
        <IconButton className={styles.button} onClick={() => window.open('https://www.youtube.com/channel/UCvXahJHpat0GJRtGQypOq-A')} >
            <YouTubeIcon fontSize="medium" />
        </IconButton>
        </>
    );
}
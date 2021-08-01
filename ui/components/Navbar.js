import React, { useContext } from 'react';
import { ThemeContext } from '../theme/CustomThemeProvider';
import { AppBar, Typography, Grid, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { useStyles } from '../styles/Navbar.js';
/* Importing icons */
import Brightness7SharpIcon from '@material-ui/icons/Brightness7Sharp';
import NightStaySharpIcon from '@material-ui/icons/NightsStay';

const Navbar = () => {
    const classes = useStyles();
    /* Handling Theme Changes here */
    var { currentTheme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        currentTheme === 'darkTheme' ? setTheme('lightTheme') : setTheme('darkTheme');
    }
    /* Setting the toggle theme icon according to current theme */
    var toggleThemeIcon = ( currentTheme === 'darkTheme' ? <Brightness7SharpIcon className={classes.themeIcon} /> : <NightStaySharpIcon className={classes.themeIcon} /> );
    /* Creating a list of routes available */
    const NavList = () => {
        <List className={classes.links}>
            <ListItem button className={classes.linkButton} >
                <ListItemText primary="Shop" />
            </ListItem>
            <ListItem button className={classes.linkButton} >
                <ListItemText primary="Projectsbrooooo" />
            </ListItem>
            <ListItem button className={classes.linkButton}>
                <ListItemText primary="Portfolio" />
            </ListItem>
            <ListItem button className={classes.linkButton}>
                <ListItemText primary="Contact" />
            </ListItem>
        </List>
    }
    return(
        <AppBar className={classes.root}>
            <Grid container>
                <Grid item xs={10} md={4}>
                    <Typography variant='h6'>
                        Welcome to my portfolio website
                    </Typography>
                </Grid>
                <Grid item className={classes.normalLinks} md={7}>
                    {NavList()}
                </Grid>
                <Grid item xs={1}>
                    <IconButton onClick={toggleTheme}>
                        {toggleThemeIcon}
                    </IconButton>    
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Navbar;
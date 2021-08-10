import React, { useContext } from 'react';
import { ThemeContext } from '../theme/CustomThemeProvider';
import { AppBar, Typography, Grid, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { useStyles } from '../styles/Navbar.js';
/* Importing icons */
import Brightness7SharpIcon from '@material-ui/icons/Brightness7Sharp';
import NightStaySharpIcon from '@material-ui/icons/NightsStay';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';

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
        return(
        <List className={classes.links}>
            <ListItem button className={classes.linkButton} >
                <Typography variant='body1'>Contact</Typography>
            </ListItem>
            <ListItem button className={classes.linkButton} >
                <Typography variant='body1'>About</Typography>
            </ListItem>
            <ListItem button className={classes.linkButton}>
                <Typography variant='body1'>Experience</Typography>
            </ListItem>
            <ListItem button className={classes.linkButton}>
                <Typography variant='body1'>Interests</Typography>
            </ListItem>
        </List>
        );
    }
    return(
        <AppBar elevation={0} className={classes.root}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={10} md={4}>
                    <Typography variant='h6'>
                        AC
                    </Typography>
                </Grid>
                <Grid item md={7} className={classes.normalLinks}>
                    {NavList()}
                </Grid>
                <Grid item xs={1} className={classes.themeButton}>
                    <IconButton onClick={toggleTheme}>
                        {toggleThemeIcon}
                    </IconButton>
                </Grid>
                <Grid item xs={1} className={classes.menuButton}>
                    <IconButton>
                        <MenuSharpIcon className={classes.themeIcon}/>
                    </IconButton>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Navbar;
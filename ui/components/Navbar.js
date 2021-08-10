import React, { useContext, useState } from 'react';
import { ThemeContext } from '../theme/CustomThemeProvider';
import { AppBar, Typography, Grid, List, ListItem, Drawer, IconButton } from '@material-ui/core';
import { useStyles } from '../styles/Navbar.js';
/* Importing icons */
import Brightness7SharpIcon from '@material-ui/icons/Brightness7Sharp';
import NightStaySharpIcon from '@material-ui/icons/NightsStay';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';


const Navbar = () => {
    const classes = useStyles();
    /* Creating a list of routes available */
    const routes = ["Contact", "About", "Experience", "Interests"];
    /* Render a Horizontal Navigation list */
    const HorizontalNavList = () => {
        return(
        <List className={classes.links}>
            {
                routes.map((route) => {
                    return (
                        <ListItem button className={classes.linkButton} >
                            <Typography variant='body1'>{route}</Typography>
                        </ListItem>
                    )
                })
            }
        </List>
        );
    }
    /* Render a Vertical Navigation list for Drawer */
    const VerticalNavList = () => {
        return(
            <List className={classes.links}>
                {
                    routes.map((route) => {
                        return (
                            <ListItem button className={classes.menuButton}>
                                <Typography variant='body1'>{route}</Typography>
                            </ListItem>
                        )
                    })

                }
            </List>
        );
    }
    /* Handling Theme Changes here */
    var { currentTheme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        currentTheme === 'darkTheme' ? setTheme('lightTheme') : setTheme('darkTheme');
    }

    /* Setting the toggle theme icon according to current theme */
    var toggleThemeIcon = ( currentTheme === 'darkTheme' ? <Brightness7SharpIcon className={classes.themeIcon} /> : <NightStaySharpIcon className={classes.themeIcon} /> );

    /* Toggle Drawer when menu button is clicked */
    const [drawer, setDrawer] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(open);
    }
    
    return(
        <AppBar elevation={0} className={classes.root}>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={8} md={4}>
                    <Typography variant='h4'>
                        AC
                    </Typography>
                </Grid>
                <Grid item md={7} className={classes.normalLinks}>
                    {HorizontalNavList()}
                </Grid>
                <Grid item xs={1} className={classes.themeButton}>
                    <IconButton onClick={toggleTheme}>
                        {toggleThemeIcon}
                    </IconButton>
                </Grid>
                <Grid item xs={1} className={classes.drawerButton}>
                    <IconButton onClick={toggleDrawer(true)}>
                        <MenuSharpIcon className={classes.themeIcon}/>
                    </IconButton>
                    <Drawer
                        disableScrollLock={ true }
                        anchor='right'
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        open={drawer}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                    {VerticalNavList()}
                    </Drawer>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Navbar;
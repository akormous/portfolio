import React, { useContext } from 'react';
import { ThemeContext } from '../theme/CustomThemeProvider';
import Navbar from '../components/Navbar';
import {Grid, Paper, Switch, Typography} from '@material-ui/core';
import { useStyles } from '../styles/Layout.js';

const Layout = () => {
    const classes = useStyles();
    return(
        <>
        <Navbar />
        <Paper className={classes.root}>
            
        </Paper>
        </>
    );
}

export default Layout;
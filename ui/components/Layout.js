import React, { useContext } from 'react';
import Navbar from './Navbar';
import Video from './Video';
import {Box, Grid, Paper, Switch, Typography} from '@material-ui/core';
import { useStyles } from '../styles/Layout.js';

const Layout = () => {
    const classes = useStyles();
    return(
        <>
        <Navbar />
        <Video />
        <Paper className={classes.root}>
            
            <Box className={classes.intro}>
                    <Typography align="center" variant="body1">Programmer for fun</Typography>
                    <Typography align='center' variant="h1">AKSHAT<br />CHAUHAN</Typography>                    
            </Box>


        </Paper>
        </>
    );
}

export default Layout;
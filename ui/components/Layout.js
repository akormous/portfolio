import React, { useContext } from 'react';
import { ThemeContext } from '../theme/CustomThemeProvider';
import {Paper, Switch, Typography} from '@material-ui/core';
import { useStyles } from '../styles/Layout.js';

const Layout = () => {
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Typography variant='h6' >Hello my name is Akshat Chauhan</Typography>
        </Paper>
    );
}

export default Layout;
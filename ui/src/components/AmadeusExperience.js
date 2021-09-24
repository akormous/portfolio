import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import AmadeusLogo from '../images/AmadeusLogo.png';
const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.light,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(4),
        '&:hover': {
            background: theme.palette.primary.dark
        }
    },
    logo: {
        width: '200px',
    },
}));

export default function JobTemplate(props) {
    const styles = useStyles();
    return(
        <Paper className={styles.root}>
            <a href="https://amadeus.com/en">
            <img src={AmadeusLogo} className={styles.logo} alt="amadeus logo" />
            </a>
            <Typography variant="h6">Software Engineer</Typography>
            <Typography variant="caption">(Aug 2021 - Present)</Typography>
            <Typography variant="body1">Working as a C++ developer in Payments department</Typography>
            <br />
            
            <Typography variant="h6">Intern </Typography>
            <Typography variant="caption">(Jan 2021 - May 2021)</Typography>
            <Typography variant="body1">Built a React-Redux application</Typography>
        </Paper>
    )
}
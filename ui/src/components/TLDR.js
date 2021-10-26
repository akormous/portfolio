import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Heading from './Heading';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        borderRadius: 0,
        paddingBottom: theme.spacing(6),
        
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    }
}))

export default function TLDR() {
    const styles = useStyles();
    return(
        <Paper className={styles.root}>
            <Container className={styles.container} maxWidth="lg">
            <Heading content="TL;DR" />
            
            <Typography align="justify" variant="body2">
            {"I am a Software Engineer, "}
            {"experienced in building React apps with Material Design. "}
            {"I also have experience in building C++ and Python backend systems."}
            </Typography>
            </Container>
        </Paper>
    )
}
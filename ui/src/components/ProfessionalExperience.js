import { Grid, Typography, Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/styles"
import JobExperience from './JobExperience';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    }
}));

export default function ProfessionalExperience() {
    const styles = useStyles();
    return (
        <Grid container className={styles.root}>
            <Grid item xs={12}>
                <Container className={styles.heading} maxWidth="lg">
                    <Typography variant="h3">Experience</Typography>
                </Container>
            </Grid>
            <Grid item xs={12}>
                <JobExperience />
            </Grid>
        </Grid>
    );
}
import { Grid, Paper, Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/styles"
import JobExperience from './JobExperience';
import TechnicalSkills from './TechnicalSkills';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column'
    },
}));

export default function ProfessionalExperience() {
    const styles = useStyles();
    return (
        <Grid container alignItems="stretch" className={styles.root}>
            <Grid className={styles.content} item xs={12} md={6}>
                <JobExperience />
            </Grid>
            <Grid className={styles.content} item xs={12} md={6}>
                <TechnicalSkills />
            </Grid>
        </Grid>
    );
}
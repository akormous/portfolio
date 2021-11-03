import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/styles"
import JobExperience from './JobExperience';

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
        <Grid container alignItems="stretch" className={styles.root} id="experience">
            <Grid className={styles.content} item xs={12}>
                <JobExperience />
            </Grid>
            
        </Grid>
    );
}
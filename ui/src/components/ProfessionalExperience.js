import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/styles"
import AmadeusExperience from './AmadeusExperience';
import TLDR from './TLDR';
import TechnicalSkills from './TechnicalSkills';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

export default function ProfessionalExperience() {
    const styles = useStyles();
    return (
        <Grid container className={styles.root}>
            <Grid item xs={12} md={12}>
                <TLDR />
            </Grid>
            {/*<Grid container >
                <Grid item xs={12} md={6}>
                    <AmadeusExperience />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TechnicalSkills />
                </Grid>
                <Grid item xs={12} md={6}>
                    
                </Grid>
            </Grid>*/}
            
        </Grid>
    );
}
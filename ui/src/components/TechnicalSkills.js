import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.dark,
        borderRadius: 0,
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        marginBottom: theme.spacing(2),
        display: 'flex'
    },
}))

export default function TechnicalSkills() {
    const styles = useStyles();
    return(
        <Container className={styles.root} maxWidth="lg">
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        Skills
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    C++
                </Grid>
                <Grid item xs={4}>
                    Python
                </Grid>
                <Grid item xs={4}>
                    JavaScript
                </Grid>
            </Grid>
        </Container>
    );
}
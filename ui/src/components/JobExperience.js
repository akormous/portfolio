import { Container, makeStyles, Typography, Grid, List, ListItem, Divider } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        paddingBottom: theme.spacing(4),
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    content: {
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
    },
    item: {
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',

    },
    companyname: {
        fontWeight: 600
    },
    divider: {
        margin: theme.spacing(2),
    },
    listitem: {
        padding: 0
    }
}));

export default function JobExperience(props) {
    const styles = useStyles();
    return(
            <Container className={styles.root}>
                <Container className={styles.heading} maxWidth="lg">
                    <Typography variant="h3">Experience</Typography>
                </Container>
                <Grid className={styles.content} container>
                    <Grid item xs={12} md={3}>
                        <Typography variant="body1" className={styles.companyname}>
                            Amadeus IT Group
                        </Typography>
                    </Grid>
                    <Grid className={styles.item} item xs={12} md={3}>
                        <Typography variant="body1">
                        Software Engineer
                        </Typography>
                        <Typography variant="caption">
                        Aug 2021 - present
                        </Typography>
                    </Grid>
                    <Grid className={styles.item} item xs={12} md={6}>
                        <Typography align='justify' variant="body1">
                        Working as a C++ Developer in PAYMENTS teams
                        </Typography>
                    </Grid>
                    <Grid item className={styles.divider} xs={12}>
                        
                    </Grid>
                    
                    <Grid className={styles.item} item xs={12} md={3}>
                    </Grid>
                    <Grid className={styles.item} item xs={12} md={3}>
                        <Typography variant="body1">
                        Software Engineer Intern
                        </Typography>
                        <Typography variant="caption">
                        Jan 2021 - Jun 2021
                        </Typography>
                    </Grid>
                    <Grid className={styles.item} item xs={12} md={6}>
                        <Typography align='justify' variant="body1">
                        Built a web application that simplified testing workflow of Amadeus Payment scenarios.
                        Developed using React, Redux and Express.js
                        </Typography>
                    </Grid>
                    <Grid item className={styles.divider} xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="body1" className={styles.companyname}>
                            CL Educate Ltd.
                        </Typography>
                    </Grid>
                    <Grid className={styles.item} item xs={12} md={3}>
                        <Typography variant="body1">
                        Data Science Intern
                        </Typography>
                        <Typography variant="caption">
                        May 2020 - Jun 2020
                        </Typography>
                    </Grid>
                    <Grid className={styles.item} item xs={12} md={6}>
                        <Typography align='justify' variant="body1">
                        Learnt to work with data and manipulate it using Pandas Library,
                        visualizing results using MatplotLib.                            
                        Applied Machine Learning Algorithms (Regression, Classification and Clustering) on past stock market data.
                        </Typography>
                    </Grid>
                </Grid>
                
            </Container>
        
    )
}
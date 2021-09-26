import { Container, makeStyles, Typography, Grid, List, ListItem, Divider } from '@material-ui/core';
import React from 'react';
import AmadeusLogo from '../images/AmadeusLogo.png';

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
    content: {
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
        padding: theme.spacing(2)
    },
    logo: {
        height: '25px',
    },
    item: {
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        padding: theme.spacing(1)
    },
    divider: {
        margin: theme.spacing(2),
    }
}));

export default function JobTemplate(props) {
    const styles = useStyles();
    return(
        <Container className={styles.root} maxWidth="lg" >
            <Grid className={styles.content} container>
                <Grid className={styles.item} item xs={12} md={3}>
                    <img alt="amadeus logo" className={styles.logo} src={AmadeusLogo} />
                </Grid>
                <Grid className={styles.item} item xs={12} md={3}>
                    <Typography variant="h6">
                    Software Engineer
                    </Typography>
                    <Typography variant="caption">
                    Aug 2021 - present
                    </Typography>
                </Grid>
                <Grid className={styles.item} item xs={12} md={6}>
                    <Typography variant="body1">
                        <List>
                            <ListItem disablePadding disableGutters>
                            Working as a C++ Developer in PAYMENTS teams
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
                <Grid item className={styles.divider} xs={12}>
                    
                </Grid>
                
                <Grid className={styles.item} item xs={12} md={3}>
                </Grid>
                <Grid className={styles.item} item xs={12} md={3}>
                    <Typography variant="h6">
                    Software Engineer Intern
                    </Typography>
                    <Typography variant="caption">
                    Jan 2021 - Jun 2021
                    </Typography>
                </Grid>
                <Grid className={styles.item} item xs={12} md={6}>
                    <Typography variant="body1">
                        <List>
                            <ListItem disablePadding disableGutters>
                            Built a web application that simplified testing workflow of Amadeus Payment scenarios.
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                            Developed using React, Redux and Express.js
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                            Learnt about the payment flow in Amadeus systems
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
                <Grid item className={styles.divider} xs={12}>
                    <Divider />
                </Grid>
                <Grid className={styles.item} item xs={12} md={3}>
                    <Typography variant="h6">CL Educate Ltd.</Typography>
                </Grid>
                <Grid className={styles.item} item xs={12} md={3}>
                    <Typography variant="h6">
                    Data Science Intern
                    </Typography>
                    <Typography variant="caption">
                    May 2020 - Jun 2020
                    </Typography>
                </Grid>
                <Grid className={styles.item} item xs={12} md={6}>
                    <Typography variant="body1">
                        <List>
                            <ListItem disablePadding disableGutters>
                            Learnt to work with data and manipulate it using Pandas Library
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                            Visualizing results using MatplotLib.                            
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                            Applied Machine Learning Algorithms (Regression, Classification and Clustering) on past stock market data to gain various insights such as:
                            1. Trade Calls (using Bollinger Bands and Simple Moving Averages)
                            2. Beta Value of a Stock
                            3. Correlation between various stocks
                            4. Predicting future stock prices
                            5. Efficient Frontier in Modern Portfolio Theory
                            6. Stock Clustering                        
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
            </Grid>
            
        </Container>
    )
}
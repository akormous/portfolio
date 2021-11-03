import { Container, makeStyles, Typography, Paper, Divider, List, ListItem } from '@material-ui/core';
import React from 'react';
import {Timeline, TimelineDot, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent} from '@material-ui/lab';
import FlightSharpIcon from '@material-ui/icons/FlightSharp';
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp';
import Heading from './Heading';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.lightbackground.default,
        color: theme.palette.lightbackground.text,
        borderRadius: 0,
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        paddingBottom: theme.spacing(12),
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
    designation: {
        color: theme.palette.primary.light
    },
    divider: {
        margin: theme.spacing(2),
    },
    listitem: {
        padding: 0
    },
    oppositeContent: {
        flex: 0
    },
}));

export default function JobExperience(props) {
    const styles = useStyles();
    return(
        <Paper className={styles.root}>

        
            <Container maxWidth='md'>
                <Heading content="Experience" />
                <Timeline align="left" position="right">
                    <TimelineItem>
                        <TimelineOppositeContent className={styles.oppositeContent} />
                        <TimelineSeparator>
                        <TimelineDot color="primary">
                            <FlightSharpIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant="body1" className={styles.companyname}>
                        Amadeus IT Group
                        </Typography>     
                        <Typography variant="body1" className={styles.designation}>
                        Software Engineer
                        </Typography>
                        <Typography variant="caption">
                        Aug 2021 - Present
                        </Typography>
                        <List disablePadding>
                            <ListItem disablePadding disableGutters>
                                <Typography align='justify' variant="body2">
                                Working as a C++ Developer in PAYMENTS team.
                                </Typography>
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                                <Typography align='justify' variant="body2">
                                Contributing to PCI-DSS compliance of Amadeus applications.
                                </Typography>
                            </ListItem>
                        </List>
                        
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className={styles.oppositeContent} />
                        <TimelineSeparator>
                        <TimelineDot color="primary">
                            <FlightSharpIcon />
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant="body1" className={styles.companyname}>
                        Amadeus IT Group
                        </Typography>     
                        <Typography variant="body1" className={styles.designation}>
                        Software Engineer Intern
                        </Typography>
                        <Typography variant="caption">
                        Jan 2021 - Jun 2021
                        </Typography>
                        <List disablePadding>
                            <ListItem disablePadding disableGutters>
                                <Typography align='justify' variant="body2">
                                Built a platform that automates Amadeus Payment Test Scenarios.
                                </Typography>
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                                <Typography align='justify' variant="body2">
                                Reduced analysis time and error investigation time by 50%
                                </Typography>
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                                <Typography align='justify' variant="body2">
                                Developed using React, Redux, and Express.js
                                </Typography>
                            </ListItem>
                        </List>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent className={styles.oppositeContent} />
                        <TimelineSeparator>
                        <TimelineDot color="primary">
                            <BarChartSharpIcon />
                        </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography variant="body1" className={styles.companyname}>
                            CL Educate Ltd.
                        </Typography>
                        <Typography variant="body1" className={styles.designation}>
                        Data Science Intern
                        </Typography>
                        <Typography variant="caption">
                        May 2020 - Jun 2020
                        </Typography>
                        <List disablePadding>
                            <ListItem disablePadding disableGutters>
                                <Typography align='justify' variant="body2">
                                Applied machine learning algorithms on stock market data to gain insights such as Beta value of a stock, future stock prices, Efficient Frontier, and correlation between stocks.
                                </Typography>
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                                <Typography align='justify' variant="body2">
                                Identified trade calls using Bollinger Bands and Simple Moving Averages
                                </Typography>
                            </ListItem>
                            <ListItem disablePadding disableGutters>
                                <Typography align='justify' variant="body2">
                                Developed using Python, Numpy, Pandas, Matplotlib, Sci-kit learn
                                </Typography>
                            </ListItem>
                        </List>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </Paper>
        
    )
}
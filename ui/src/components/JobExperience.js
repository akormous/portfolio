import { Container, makeStyles, Typography, Grid, Divider } from '@material-ui/core';
import React from 'react';
import {Timeline, TimelineDot, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent} from '@material-ui/lab';
import FlightSharpIcon from '@material-ui/icons/FlightSharp';
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp';
const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.dark,
        borderRadius: 0,
        alignItems: 'start',
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
        paddingBottom: theme.spacing(2)
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
        color: theme.palette.secondary.extralight
    },
    divider: {
        margin: theme.spacing(2),
    },
    listitem: {
        padding: 0
    },
    oppositeContent: {
        flex: 0
    }
}));

export default function JobExperience(props) {
    const styles = useStyles();
    return(
            <Container className={styles.root}>
                <Container className={styles.heading} maxWidth="lg">
                    <Typography variant="h3">Experience</Typography>
                </Container>
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
                        Aug 2021 - present
                        </Typography>
                        <Typography align='justify' variant="body2">
                        Working as a C++ Developer in PAYMENTS teams
                        </Typography>
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
                        <Typography align='justify' variant="body2">
                        Built a web application that simplified testing workflow of Amadeus Payment scenarios.
                        Developed using React, Redux and Express.js
                        </Typography>
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
                        <Typography align='justify' variant="body2">
                        Learnt to work with data and manipulate it using Pandas Library,
                        visualizing results using MatplotLib.                            
                        Applied Machine Learning Algorithms (Regression, Classification and Clustering) on past stock market data.
                        </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        
    )
}
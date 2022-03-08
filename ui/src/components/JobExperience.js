import { Container, makeStyles, Typography, Paper, List, ListItem } from '@material-ui/core';
import React from 'react';
import {Timeline, TimelineDot, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent} from '@material-ui/lab';
import Heading from './Heading';
import { getIconFromKey } from '../utility/common';

/* import job exp data from jobexperience.json */
import jobexperience from './data/jobexperience.json';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.lightbackground.default,
        color: theme.palette.lightbackground.text,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        height: "100%",
        width: "100%",
        paddingBlock: theme.spacing(14)
    },
    experienceContainer: {
        marginBlock: theme.spacing(4),
        padding: 0
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
        <Paper className={styles.root} id="experience">
            <Heading content="Experience" />
            <Container className={styles.experienceContainer} maxWidth='sm'>
                <Timeline align="left" position="right">
                    {jobexperience.map((job) => (
                        <TimelineItem>
                            <TimelineOppositeContent className={styles.oppositeContent} />
                            <TimelineSeparator>
                            <TimelineDot color="primary">
                                {getIconFromKey(job.iconKey)}
                            </TimelineDot>
                                {job.isLastObject ? <></> : <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                            <Typography variant="body1" className={styles.companyname}>
                            {job.company}
                            </Typography>     
                            <Typography variant="body1" className={styles.designation}>
                            {job.designation}
                            </Typography>
                            <Typography variant="caption">
                            {job.tenure}
                            </Typography>
                            <List disablePadding>
                                {job.description.map((line) => (
                                    <ListItem disableGutters>
                                        <Typography align='justify' variant="body2">
                                        {line}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                            
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Paper>
        
    )
}
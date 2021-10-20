import React from 'react';
import { Container, ListItem, List, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.secondary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        paddingBottom: theme.spacing(4),
        height: "100%"
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
}))

export default function TechnicalSkills() {
    const styles = useStyles();
    return(
        <Container className={styles.root}>
            <Container className={styles.heading} maxWidth="lg">
                    <Typography variant="h3">Skills</Typography>
            </Container>
            <List>
                <ListItem>
                <Typography variant="h4">C++</Typography>
                </ListItem>
                <ListItem>
                <Typography variant="h4">JavaScript</Typography>
                </ListItem>
                <ListItem>
                <Typography variant="h4">Python</Typography>
                </ListItem>
                <ListItem>
                <Typography variant="h4">React</Typography>
                </ListItem>
            </List>
        </Container>
    );
}
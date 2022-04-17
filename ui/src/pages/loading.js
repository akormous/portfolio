import { CircularProgress, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        background: theme.palette.primary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        //paddingTop: theme.spacing(8),
        //paddingBottom: theme.spacing(8),
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
    },
    progress: {
        marginBlock: theme.spacing(2),
        color: theme.palette.primary.light
    }
}))

export default function LoadingPage(props) {
    const styles = useStyles();

    return (
        <Paper className={styles.root}>
            <Container className={styles.container} maxWidth="lg">
                <Typography align='center' variant="body1">{props.quote}</Typography>
                <Typography align='center' variant="body1" style={{ fontStyle: 'italic' }}>{props.author}</Typography>
                <CircularProgress className={styles.progress} />
            </Container>
        </Paper>
    )
}
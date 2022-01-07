import { CircularProgress, Paper, Typography } from "@material-ui/core";
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
    progress: {
        color: theme.palette.lightbackground.default
    }
}))

export default function LoadingPage() {
    const styles = useStyles();
    return (
        <Paper className={styles.root}>
            <CircularProgress className={styles.progress} />
            <Typography variant="body1">Preparing Website</Typography>
        </Paper>
    )
}
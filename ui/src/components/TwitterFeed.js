import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #1DA1F2 30%, #72c5f7 90%)',
        borderRadius: 0,
        padding: theme.spacing(4),
        '&:hover': {
            background: 'linear-gradient(45deg, #1DA1F2 60%, #72c5f7 90%)'
        }
    }
}));

export default function TwitterFeed() {
    const styles = useStyles();
    return(
        <Paper className={styles.root}>
            <Typography variant="body1">Latest updates from Twitter</Typography>
            <Typography variant="subtitle1">@Akormous</Typography>
        </Paper>
    );
}
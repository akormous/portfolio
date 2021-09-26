import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 5%, #dc2743 20%, #cc2366 75%, #bc1888 100%);',
        borderRadius: 0,
        padding: theme.spacing(4),
        '&:hover': {
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 15%, #dc2743 40%, #cc2366 75%, #bc1888 100%);',            
        }
    }
}));

export default function InstagramFeed() {
    const styles = useStyles();
    return(
        <Paper className={styles.root}>
            <Typography variant="body1">Latest updates from Instagram</Typography>
            <Typography variant="subtitle1">@Akormous</Typography>
        </Paper>
    );
}
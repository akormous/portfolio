import { makeStyles, Typography, Grid } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'red',
        height: '10vh'
    }
}));

export default function InstagramFeed() {
    const styles = useStyles();
    return(
        <>
        <Grid container className={styles.root}>
            <Grid item xs={12}>
                <Typography variant='body1'>Check out latest updates from instagram</Typography>
            </Grid>
        </Grid>
        </>
    )
}
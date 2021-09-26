import React from 'react';
import { Grid } from '@material-ui/core';
import InstagramFeed from './InstagramFeed';
import TwitterFeed from './TwitterFeed';

/*
const useStyles = makeStyles((theme) => ({
    root: {

    },
    
}));
*/

export default function SocialMediaUpdates() {
    return(
        <Grid container>
            <Grid item xs={12} md={6}>
                <InstagramFeed />
            </Grid>
            <Grid item xs={12} md={6}>
                <TwitterFeed />                
            </Grid>

        </Grid>
    );
}
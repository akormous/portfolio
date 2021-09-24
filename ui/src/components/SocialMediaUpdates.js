import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import InstagramFeed from './InstagramFeed';
import TwitterFeed from './TwitterFeed';
import YouTubeVideo from './YouTubeVideo';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    
}));

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
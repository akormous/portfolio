import { makeStyles, Typography, Grid } from "@material-ui/core";
import React from "react";
import { Paper } from "@material-ui/core";
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingTop: '56.25%',
        
    },
    player: {
        position: 'absolute',
        top: 0,
        left: 0,
    }
}));

export default function YouTubeVideo() {
    const styles = useStyles();
    return(
        <div className={styles.root}>
            <ReactPlayer 
             className={styles.player}
             controls={true}
             url="https://www.youtube.com/watch?v=AtbaC_xP_nk"
             width='100%'
             height='100%'
            >
            </ReactPlayer>
        </div>
    );
}
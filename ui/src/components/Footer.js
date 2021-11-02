import { Link, makeStyles } from "@material-ui/core";
import { Paper, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Heading from "./Heading";
import TechnicalSkills from "./TechnicalSkills";
import FavoriteIcon from '@material-ui/icons/Favorite';
import SocialLinks from "./SocialLinks";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        height: "100%",
        width: "100%"
    },
    tagline: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    love: {
        color: '#f34848',
    }
}));

export default function Footer() {
    const styles = useStyles();
    return (
        <Paper className={styles.root}>
            
            <Container align="center" maxWidth='lg'>
                <Typography variant="body1">Built with GatsbyJS</Typography>
            <SocialLinks />
            </Container>
        </Paper>
    );
}
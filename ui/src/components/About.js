import { Link, makeStyles } from "@material-ui/core";
import { Paper, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Heading from "./Heading";
import TechnicalSkills from "./TechnicalSkills";
import DP from "../images/Avatar.jpg";
import SocialLinks from "./SocialLinks";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.secondary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        paddingBottom: theme.spacing(4),
        height: "100%",
        width: "100%"
    },
    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    avatar: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        marginBottom: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2),  0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: 'all 0.2s',
        '&:hover': {
            'opacity': "0.9"
        }
    },
}));

export default function About() {
    const styles = useStyles();
    return(
        <Paper className={styles.root}>
            <Heading content="About" />
            <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid align='center' item xs={12} md={6}>
                    <Container>
                        <a target="_blank" href="https://www.twitter.com/akormous">
                        <img className={styles.avatar} src={DP} />
                        </a>
                    </Container>
                    <Typography align="center" variant="h5">
                        Who's this guy?
                    </Typography>
                    <Typography align="center" variant="body2">
                    I'm a Software Developer at <Link color="inherit" to="https://amadeus.com/en">{"Amadeus IT Group"}</Link> in Bengaluru, IN.<br />
                    I have a passion to solve problems.
                    </Typography>
                    <SocialLinks />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TechnicalSkills />
                </Grid>
            </Grid>
            </Container>
        </Paper>
    );
}
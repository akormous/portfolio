import { makeStyles } from "@material-ui/core";
import { Paper, Container, Typography } from "@material-ui/core";
import React from "react";
import SocialLinks from "./SocialLinks";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        height: "100%",
        width: "100%",
        paddingBlock: theme.spacing(14)
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
    const year = new Date().getFullYear();
    return (
        <Paper className={styles.root}>
            <Container align="center" maxWidth='lg'>
                <Typography variant="body1">Akshat Chauhan © {year}</Typography>
            <SocialLinks />
            </Container>
        </Paper>
    );
}
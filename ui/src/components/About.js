import { makeStyles } from "@material-ui/core";
import { Paper, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Heading from "./Heading";
import TechnicalSkills from "./TechnicalSkills";
import DP from "../images/Avatar.jpg";
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
    aboutContainer: {
        marginBlock: theme.spacing(4),
        padding: 0
    },
    gridItem: {
        paddingInline: theme.spacing(4),
        marginBlock: theme.spacing(4)
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
    },
}));

export default function About() {
    const styles = useStyles();
    return(
        <Paper className={styles.root} id="about">
            <Heading content="About" />
            <Container className={styles.aboutContainer} maxWidth='lg'>
            <Grid align="center" container>
                <Grid item xs={12} md={6} className={styles.gridItem}>
                    <Container disableGutters>
                        <img className={styles.avatar} src={DP} alt="Imagine me in the himalayas" />
                    </Container>
                    
                    <Typography align="center" variant="body1">
                    This is me in the Himalayas
                    </Typography>
                    <SocialLinks fontSize="medium"/>
                </Grid>
                <Grid item xs={12} md={6} className={styles.gridItem}>
                    <TechnicalSkills />
                </Grid>
            </Grid>
            </Container>
        </Paper>
    );
}
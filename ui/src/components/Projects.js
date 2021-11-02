import { Card, CardActionArea, CardActions, CardContent, CardMedia, Link, makeStyles, Tooltip } from "@material-ui/core";
import { Paper, Container, Grid, Typography, Button, IconButton } from "@material-ui/core";
import React from "react";
import Heading from "./Heading";
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageSharpIcon from '@material-ui/icons/LanguageSharp';
/* Preview images */
import FaceMaskDetection from "../images/facemaskdetection.png";
import Sharify from "../images/sharify.png";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        paddingBottom: theme.spacing(12),
        height: "100%",
        width: "100%",
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
    project: {
        transition: 'all 0.2s',
        '&:hover': {
            'opacity': "0.3"
        }
    },
    projectCard: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}));

export default function Projects() {
    const styles = useStyles();
    return(
        <Paper className={styles.root}>
            <Heading content="Projects" />
            <Container maxWidth='lg'>
            <Grid container spacing={4}>
                
                <Grid item xs={12} md={4}>
                    <Card className={styles.projectCard}>
                        <CardActionArea
                        onClick={() => window.open('https://github.com/akormous/portfolio')}
                        >
                            <CardMedia
                            component="img"
                            height="140"
                            image="/preview.png"
                            alt="projectname"
                            />
                            <CardContent>
                                <Typography variant="h5">Portfolio Website</Typography>
                                <Typography variant="caption">
                                Built with GatsbyJS and Express
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Tooltip title="Visit">
                            <IconButton className={styles.button} onClick={() => window.open('https://akormous.netlify.app')} >
                                <LanguageSharpIcon fontSize="medium" />
                            </IconButton>
                            </Tooltip>
                            <Tooltip title="Github">
                            <IconButton className={styles.button} onClick={() => window.open('https://github.com/akormous/portfolio')} >
                                <GitHubIcon fontSize="medium" />
                            </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={styles.projectCard}>
                        <CardActionArea
                        onClick={() => window.open('https://github.com/akormous/Real-Time-Mask-Detection-and-Analysis-System')}
                        >
                            <CardMedia
                            component="img"
                            height="140"
                            image={FaceMaskDetection}
                            alt="projectname"
                            />
                            <CardContent>
                                <Typography variant="h5">Face Mask Detection and Analysis</Typography>
                                <Typography variant="caption">
                                A web application providing automatic surveillance that checks for face masks worn by people. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Tooltip title="Github">
                            <IconButton className={styles.button} onClick={() => window.open('https://github.com/akormous/Real-Time-Mask-Detection-and-Analysis-System')} >
                                <GitHubIcon fontSize="medium" />
                            </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card className={styles.projectCard}>
                        <CardActionArea
                        onClick={() => window.open('https://github.com/akormous/sharify')}
                        >
                            <CardMedia
                            component="img"
                            height="140"
                            image={Sharify}
                            alt="projectname"
                            />
                            <CardContent>
                                <Typography variant="h5">Spotify Songs Sharing App</Typography>
                                <Typography variant="caption">
                                A web application providing automatic surveillance that checks for face masks worn by people. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Tooltip title="Github">
                            <IconButton className={styles.button} onClick={() => window.open('https://github.com/akormous/sharify')} >
                                <GitHubIcon fontSize="medium" />
                            </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </Paper>
    );
}
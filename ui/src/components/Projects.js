import { Card, CardActionArea, CardContent, CardMedia, Chip, makeStyles } from "@material-ui/core";
import { Paper, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Heading from "./Heading";
/* Preview images */
import FaceMaskDetection from "../images/facemaskdetection.png";
import Sharify from "../images/sharify.png";
import theme from "../theme";

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
    projectCard: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    techStack: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    technologyStackChip: {
        marginRight: '4px',
    }
}));

export default function Projects() {
    const styles = useStyles();
    return(
        <Paper className={styles.root} id="projects">
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
                                A single page application showcasing my professional experience, projects, skills and interests. 
                                </Typography>
                            </CardContent>
                            
                        </CardActionArea>
                        <CardContent>
                            <Chip className={styles.technologyStackChip} label="GatsbyJS" style={{background: theme.palette.gatsby}} />
                            <Chip className={styles.technologyStackChip} label="Material Design" style={{background: theme.palette.css}} />
                        </CardContent>
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
                                A web application providing automatic surveillance that checks for face masks worn by people. Helps in enforcing COVID-19 guidelines at a crowded place.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardContent>
                            <Chip className={styles.technologyStackChip} label="Python-Django" style={{background: theme.palette.python}} />
                            <Chip className={styles.technologyStackChip} label="Tensorflow" style={{background: theme.palette.tensorflow}} />
                            <Chip className={styles.technologyStackChip} label="ReactJS" style={{background: theme.palette.react}} />
                        </CardContent>
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
                                A song sharing service that enables sharing of playlists from Spotify to main feed in the form of posts.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardContent>
                            <Chip className={styles.technologyStackChip} label="Python-Django" style={{background: theme.palette.python}} />
                            <Chip className={styles.technologyStackChip} label="MySQL" style={{background: theme.palette.react}} />
                            <Chip className={styles.technologyStackChip} label="HTML5" style={{background: theme.palette.html}} />
                            <Chip className={styles.technologyStackChip} label="CSS" style={{background: theme.palette.css}} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </Paper>
    );
}
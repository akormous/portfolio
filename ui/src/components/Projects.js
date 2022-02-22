import { Card, CardContent, CardMedia, Chip, makeStyles } from "@material-ui/core";
import { Paper, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Heading from "./Heading";
//import { getRandomColor } from "../utility/common";
/* import data from projects.json */
import projects from './data/projects.json';
import { getRandomColor } from "../utility/common";

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
        backgroundColor: theme.palette.primary.main,
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    },
    techStack: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    technologyStackChip: {
        marginRight: '4px',
        background: getRandomColor(),
        fontSize: '0.75rem'
    }
}));

export default function Projects() {
    const styles = useStyles();
    return(
        <Paper className={styles.root} id="projects">
            <Heading content="Projects" />
            <Container maxWidth='lg'>
            <Grid container spacing={4}>
                
                {projects.map((project) => (
                    <Grid item xs={12} md={4}>
                    <Card
                    variant="outlined"
                    className={styles.projectCard}
                    onClick={() => window.open(project.githubLink)}
                    >    
                        <CardMedia
                        component="img"
                        height="140"
                        image={project.imagePath}
                        alt={project.title}
                        />
                        <CardContent>
                            <Typography variant="h6">{project.title}</Typography>
                            <Typography variant="caption">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            {project.technologies.map((tech) => (
                                <Chip size="small" className={styles.technologyStackChip} label={tech} style={{background: getRandomColor()}} />
                            ))}
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
            </Grid>
            </Container>
        </Paper>
    );
}
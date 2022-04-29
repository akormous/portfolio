import { Card, CardContent, CardMedia, Chip, makeStyles } from "@material-ui/core";
import { Paper, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Heading from "./Heading";
//import { getRandomColor } from "../utility/common";
/* import data from projects.json */
import projects from './data/projects.json';

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
    projectsContainer: {
        marginBlock: theme.spacing(4),
    },
    projectCard: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBlock: theme.spacing(0.5),
        justifyContent: 'space-between',
        backgroundColor: theme.palette.background.default,
        transition: 'all 0.2s',
        cursor: 'default',
        borderColor: theme.palette.primary.light,
        borderRadius: '6px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
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
        background: theme.palette.primary.main,
        fontSize: '0.75rem'
    }
}));

export default function Projects() {
    const styles = useStyles();
    return(
        <Paper className={styles.root} id="projects">
            <Heading content="Projects" />
            <Container className={styles.projectsContainer} maxWidth='lg'>
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
                        height="194"
                        image={project.imagePath}
                        alt={project.title}
                        style={{objectFit: 'cover'}}
                        />
                        <CardContent>
                            <Typography variant="h6">{project.title}</Typography>
                            <Typography variant="caption">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            {project.technologies.map((tech) => (
                                <Chip variant="outlined" size="small" className={styles.technologyStackChip} label={tech} />
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
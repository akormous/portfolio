import React, { useState } from 'react';
import { Container, Accordion, Box, AccordionSummary, AccordionDetails, Paper, Typography, Slider, Grid } from '@material-ui/core';
import { makeStyles, mergeClasses } from '@material-ui/styles';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.secondary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        paddingBottom: theme.spacing(4),
        height: "100%"
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    content: {
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
    },
    skillCategory: {
        fontWeight: 600,
        paddingBottom: theme.spacing(1)
    },
    skillPanel: {
        width: '100%',
        padding: theme.spacing(2),
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    skill: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}))

export default function TechnicalSkills() {
    // for accordion panels
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const styles = useStyles();
    return(
        <Container className={styles.root}>
            <Container className={styles.heading} maxWidth="lg">
                    <Typography variant="h3">Skills</Typography>
            </Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box className={styles.skillPanel}>
                        <Typography variant="body1" className={styles.skillCategory}>Programming Languages</Typography>
                        <Container className={styles.skill}>
                            <Typography variant="body2">C++</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={5} max={5}
                            />
                        </Container>
                        
                        <Container className={styles.skill}>
                            <Typography variant="body2">Python</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">JavaScript</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">Java</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={3} max={5}
                            />
                        </Container>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={styles.skillPanel}>
                        <Typography variant="body1" className={styles.skillCategory}>Backend Skills</Typography>

                        <Container className={styles.skill}>
                            <Typography variant="body2">Express.js</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">OOP Design</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">MySQL</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">Python-Django</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={3} max={5}
                            />
                        </Container>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={styles.skillPanel}>
                    <Typography variant="body1" className={styles.skillCategory}>Frontend Skills</Typography>
                        <Container className={styles.skill}>
                            <Typography variant="body2">React.js</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={5} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">Material Design</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={5} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">Bootstrap</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">HTML + CSS</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={styles.skillPanel}>
                        <Typography variant="body1" className={styles.skillCategory}>Dev Tools and Other Skills</Typography>
                        <Container className={styles.skill}>
                            <Typography variant="body2">Git Version Control</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">Linux Terminal</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={3} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">Pandas</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={3} max={5}
                            />
                        </Container>
                        <Container className={styles.skill}>
                            <Typography variant="body2">Video Editing</Typography>    
                            <Rating
                            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
                            readOnly defaultValue={4} max={5}
                            />
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
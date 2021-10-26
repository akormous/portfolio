import React, { useState } from 'react';
import { Container, Accordion, Box, AccordionSummary, AccordionDetails, Paper, Typography, Slider, Grid } from '@material-ui/core';
import { makeStyles, mergeClasses } from '@material-ui/styles';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import SkillRating from './SkillRating';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgba(0, 0, 0, 0.10)',
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        height: "100%",
        width: "100%",
        'transition': 'all 0.20s',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.40)'
        }
    },
    skillCategory: {
        fontWeight: 600,
        paddingBottom: theme.spacing(1)
    },
    skillPanel: {
        width: '100%',
        padding: theme.spacing(2),
        alignItems: 'start',
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

            <Box className={styles.skillPanel}>
                <Typography variant="body1" className={styles.skillCategory}>Programming Languages</Typography>
                <SkillRating skill="C++" rating={6} />
                <SkillRating skill="Python" rating={6} />
                <SkillRating skill="JavaScript" rating={6} />
                <SkillRating skill="Java" rating={5} />
                
            </Box>
        
            <Box className={styles.skillPanel}>
                <Typography variant="body1" className={styles.skillCategory}>Backend Skills</Typography>
                <SkillRating skill="Express.js" rating={6} />
                <SkillRating skill="OOP Design" rating={5} />
                <SkillRating skill="MySQL" rating={5} />
                <SkillRating skill="Python-Django" rating={4} />

            </Box>
        
            <Box className={styles.skillPanel}>
            <Typography variant="body1" className={styles.skillCategory}>Frontend Skills</Typography>
                <SkillRating skill="React.js" rating={6} />
                <SkillRating skill="Material Design" rating={7} />
                <SkillRating skill="Bootstrap" rating={6} />
                <SkillRating skill="HTML + CSS" rating={6} />
            </Box>
        
            <Box className={styles.skillPanel}>
                <Typography variant="body1" className={styles.skillCategory}>Dev Tools and Other Skills</Typography>
                <SkillRating skill="Git Version Control" rating={5} />
                <SkillRating skill="Linux Terminal" rating={5} />
                <SkillRating skill="Pandas" rating={4} />
                <SkillRating skill="Video Editing" rating={5} />
            </Box>
        </Container>
    );
}
import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SkillRating from './SkillRating';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        height: "100%",
        width: "100%",
    },
    skillCategory: {
        fontWeight: 600,
        paddingBottom: theme.spacing(1)
    },
    skillPanel: {
        width: '100%',
        alignItems: 'start',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(4)
    },
    skill: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}))

export default function TechnicalSkills() {

    const styles = useStyles();
    return(
        <Container className={styles.root} disableGutters>

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
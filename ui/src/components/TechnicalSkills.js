import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SkillRating from './SkillRating';
import skillsData from './data/skills.json';

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
    const skillKeys = Object.keys(skillsData);
    return(
        <Container className={styles.root} disableGutters>
            {skillKeys.map((key) => (
                <Box className={styles.skillPanel}>
                    <Typography variant="body1" className={styles.skillCategory}>{key}</Typography>
                    {skillsData[key].map((skill) => (
                        <SkillRating skill={skill.name} rating={skill.rating} />
                    ))}
                </Box>
            ))}
        </Container>
    );
}
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Link, makeStyles, TextField, Box } from "@material-ui/core";
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
        background: theme.palette.lightbackground.default,
        color: theme.palette.lightbackground.text,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        paddingBottom: theme.spacing(12),
        height: "100%",
        width: "100%"
    },
    contactIntro: {
        fontWeight: '500'
    },
    form: {
        marginTop: theme.spacing(4),
        border: '1px',
        borderColor: theme.palette.primary.dark,
    },
    inputField: {
        marginBottom: theme.spacing(2)
    },
    textField: {
        color: theme.palette.lightbackground.text,
    },
    button: {
        color: theme.palette.lightbackground.default,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    }
    
}));

export default function Contact() {
    const styles = useStyles();
    return(
        <Paper className={styles.root}>
            <Heading content="Contact" />
            <Typography variant="body1" className={styles.contactIntro}>
                    Let's create something cool together!
            </Typography>
            <Container align="center" maxWidth='lg'>
                
                <Container maxWidth="xs" className={styles.form}>
                    <TextField
                    focused
                    fullWidth
                    className={styles.inputField}
                    id="name"
                    label="Name"
                    variant="standard"
                    InputProps={{
                        className: styles.textField
                    }}
                    />
                    <TextField
                    focused
                    fullWidth
                    className={styles.inputField}
                    id="email"
                    label="Email"
                    variant="standard"
                    InputProps={{
                        className: styles.textField
                    }}
                    />
                    <TextField
                    focused
                    fullWidth
                    className={styles.inputField}
                    id="message"
                    label="Message"
                    variant="standard"
                    multiline
                    rows={4}
                    InputProps={{
                        className: styles.textField
                    }}
                    />
                </Container>
                <Button
                className={styles.button} 
                variant="contained"
                >
                    Submit
                </Button>

            </Container>
        </Paper>
    );
}
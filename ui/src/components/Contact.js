import { Link, makeStyles, Snackbar, TextField } from "@material-ui/core";
import { Paper, Container, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import Heading from "./Heading";
import emailjs from 'emailjs-com';

const EMAILJS_USER_ID="user_G2Z9EERI7U2dqcMkGsbAr";

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

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        setOpen(false);
    };
    
    let resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
    function handleSubmit(e) {
        e.preventDefault();
        const params = {
            name: name,
            email: email,
            message: message
        }
        
        emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, params, EMAILJS_USER_ID)
        .then((result) => {
            console.log(result.text);
            setOpen(true);
        }, (error) => {
            console.log(error.text);
        });;
        
        setOpen(true);
        resetForm();
    }

    return(
        <Paper className={styles.root} id="contact">
            <Heading content="Contact me" />
            <Typography align="center" variant="body1" className={styles.contactIntro}>
                    Get in touch, just say hi in the form below :)<br />
                    or you can send an email at <Link href="mailto:iamakshatchauhan@gmail.com">iamakshatchauhan@gmail.com</Link>
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
                    onChange={e => setName(e.target.value)}
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
                    onChange={e => setEmail(e.target.value)}
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
                    onChange={e => setMessage(e.target.value)}
                    />
                </Container>
                <Button
                className={styles.button} 
                variant="contained"
                onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </Button>
            </Container>
            <Snackbar open={open} autoHideDuration={3000} message="Message sent. I will respond within 24 hours!" onClose={handleClose} />
        </Paper>
    );
}
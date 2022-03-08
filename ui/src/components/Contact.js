import { Link, makeStyles, Snackbar, TextField } from "@material-ui/core";
import { Paper, Container, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import Heading from "./Heading";
import emailjs from 'emailjs-com';
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.lightbackground.default,
        color: theme.palette.lightbackground.text,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
        height: "100%",
        width: "100%",
        paddingBlock: theme.spacing(14)
    },
    contactIntro: {
        fontWeight: '500',
        marginBlock: theme.spacing(4)
    },
    form: {
        border: '1px',
        borderColor: theme.palette.primary.dark,
    },
    inputField: {
        marginBlock: theme.spacing(2)
    },
    textField: {
        color: theme.palette.lightbackground.text,
    },
    button: {
        color: theme.palette.lightbackground.default,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 0,
        boxShadow: '0 0 0 0',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            boxShadow: '0 0 0 0',
            color: theme.palette.primary.yellow
        },
    },
    erralert: {
        color: 'white',
    }
    
}));

// bool function: for email validation
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export default function Contact() {
    const styles = useStyles();

    const [name,setName] = useState("");    // name
    const [email, setEmail] = useState(""); // email
    const [message, setMessage] = useState(""); // message

    const [open, setOpen] = useState(false);    // for success message
    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const [errmsg, setErrMsg] = useState("");    // for error message
    const [erropen, setErrOpen] = useState(false);  
    const handleErrClose = (event, reason) => {
        setErrOpen(false);
    };
    
    // reset the form
    let resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
    // handle submit of contact form
    function handleSubmit(e) {
        e.preventDefault();
        // form validation
        // if any of the fields is empty
        if(name === "" || email === "" || message === "") {
            setErrOpen(true);
            setErrMsg("Please enter:" + 
                        (name === "" ? " Name" : "") + 
                        (email === "" ? " Email" : "") + 
                        (message === "" ? " Message" : "") + ".") ;
            return;
        }
        if(!validateEmail(email)) {
            setErrOpen(true);
            setErrMsg("Invalid Email.");
            return;
        }
        const params = {
            name: name,
            email: email,
            message: message
        }
        emailjs.send(process.env.GATSBY_EMAILJS_SERVICE_ID, process.env.GATSBY_EMAILJS_TEMPLATE_ID, params, process.env.GATSBY_EMAILJS_USER_ID)
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
            <Heading content="Contact" />
            <Typography align="center" variant="body1" className={styles.contactIntro}>
                    For business inquiries, or want to say hi <br />
                    Just drop a message below ! 😃<br />
                    Alternatively, email at <br /> <Link href="mailto:iamakshatchauhan@gmail.com">iamakshatchauhan@gmail.com</Link>
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
                    type="email"
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
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert className={styles.erralert} severity="success">Message sent. Akshat will respond within 24 hours.</Alert>
            </Snackbar>
            <Snackbar open={erropen} autoHideDuration={3000} onClose={handleErrClose} >
                <Alert className={styles.erralert} severity="error">{errmsg}</Alert>
            </Snackbar>
        </Paper>
    );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        textTransform: 'uppercase',
        letterSpacing: '0.25rem',
        padding: 0
    },
}));

export default function Heading(props) {
    const styles = useStyles();
    return(
        <Container className={styles.heading} maxWidth='lg'>
            <Typography variant="h2">{props.content}</Typography>
        </Container>
    );
}
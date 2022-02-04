import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        textTransform: 'uppercase',
        letterSpacing: '0.25rem'
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
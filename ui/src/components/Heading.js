import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    },
}));

export default function Heading(props) {
    const styles = useStyles();
    return(
        <Container className={styles.heading} maxWidth='lg'>
            <Typography variant="h3">{props.content}</Typography>
        </Container>
    );
}
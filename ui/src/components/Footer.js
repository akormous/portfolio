import { makeStyles } from "@material-ui/core";
import { Paper, Container, Typography, Grid } from "@material-ui/core";
import React from "react";
import SocialLinks from "./SocialLinks";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.dark,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        display: 'flex',
        height: "100%",
        width: "100%",
        paddingBlock: theme.spacing(14)
    },
    footerContainer: {
        paddingBlock: theme.spacing(4)
    },
    footerGrid: {
        alignItems: 'center',
    },
    footerGridItem: {
        display: 'flex',
        justifyContent: 'start'
    },
    builtWith: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.primary.dark,
        cursor: 'default',
        'text-shadow': '-1px 1px 0 #fff, 1px 1px 0 #fff, 1px -1px 0 #fff, -1px -1px 0 #fff',
        transition: 'all 0.15s',
        '&:hover': {
            color: 'white'
        }
    },
    logoItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    logo: {
        fontWeight: 500,
        padding: theme.spacing(2)
    },
    socialsItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
}));

export default function Footer() {
    const styles = useStyles();
    const year = new Date().getFullYear();
    return (
        <Paper className={styles.root}>            
            <Container className={styles.footerContainer} maxWidth='lg'>
                <Grid container>
                    <Grid item className={styles.logoItem} xs={12} md={6}>
                        <Typography className={styles.logo} variant="caption">AKSHAT CHAUHAN © {year}</Typography>
                    </Grid>
                    <Grid item className={styles.socialsItem} xs={12} md={6}>
                        <SocialLinks fontSize="small" />
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}
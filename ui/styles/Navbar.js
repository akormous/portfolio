import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.background,
        color: theme.palette.primary.main,
        position: 'fixed',
        height: '66.5px',
        justifyContent: 'flex-end',
    },
    gridContainer: {
        justifyContent: 'center'
    },
    links: {
        paddingTop: '0px',
        paddingBottom: '0px',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    linkButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: '100%',
        paddingTop: '0px',
        borderBottom: '2px solid',
        borderBottomColor: theme.palette.primary.background,
        '&:hover': {
            borderBottomColor: theme.palette.secondary.main
        }
    },
    linkButtonText: {
        fontWeight: 200,
        fontSize: '0.8rem',
    },
    normalLinks: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '0px',
        paddingBottom: '0px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    menuButton: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '0px',
        paddingBottom: '10px',
        maxWidth: '60px',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    themeButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '0px',
        paddingBottom: '10px',
        maxWidth: '60px'
    },
    themeIcon: {
        color: theme.palette.primary.main,
        fontSize: 'large',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));
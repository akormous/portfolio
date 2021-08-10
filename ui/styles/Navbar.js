import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    /*
    AppBar
    */
    root: {
        background: theme.palette.primary.background,
        color: theme.palette.primary.main,
        position: 'fixed',
        height: '66.5px',
        justifyContent: 'flex-end',
    },
    /*
    Grid container
    */
    gridContainer: {
        justifyContent: 'center'
    },
    /*
    Links (horizontal)
    */
    links: {
        paddingTop: '0px',
        paddingBottom: '0px',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
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
    /*
    Drawer
    */
    drawerButton: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '0px',
        paddingBottom: '10px',
        maxWidth: '60px',
        //minWidth: '0px',
        [theme.breakpoints.up('md')]: {
            display: 'none',
            width: '0px'
        },
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    drawerPaper: {
        background: theme.palette.primary.background,
        width: 200,
    },
    /*
    Links in Drawer
    */
    menuButton: {
        color: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: theme.spacing(6),
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.primary.background,
        '&:hover': {
            borderBottomColor: theme.palette.secondary.main
        }
    },
    /*
    Theme toggle
    */
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
        fontSize: '20px',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));
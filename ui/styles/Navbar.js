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
        
    },
    normalLinks: {
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    linkButton: {
        
    },
    /*
    Drawer
    */
    drawerButton: {
        display: 'flex',
        justifyContent: 'center',
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
}));
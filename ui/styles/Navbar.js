import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.background,
        color: theme.palette.primary.main,
        position: 'fixed',
        height: '100px'
    },
    links: {
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
    },
    normalLinks: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    themeIcon: {
        color: theme.palette.primary.main
    }
}));
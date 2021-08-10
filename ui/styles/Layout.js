import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.component,
        color: theme.palette.primary.main,
        height: '100vh',
        borderRadius: 0,
        marginTop: '66.5px',
    },
    intro: {
        position: 'absolute',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',
        minHeight: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
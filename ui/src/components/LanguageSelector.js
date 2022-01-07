import { Box, Chip, Hidden, Dialog, makeStyles, DialogContent } from "@material-ui/core";
import { ToggleButtonGroup } from "@material-ui/lab";
import React from "react";
import intros from "./data/intros.json"
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    dialogroot: {
        //backgroundColor: 'rgba(0,0,0,0.25)',
    },
    dialogcontent: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(3),
        backgroundColor: 'rgba(0,0,0,0.25)',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    }
}))

export default function LanguageSelector(props) {
    const styles = useStyles();
    const languages = Object.keys(intros);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Box className={styles.root} spacing={1}>
        <Hidden smDown>
            <ToggleButtonGroup>
                {languages.map((lang) => (
                <Chip
                size="small"
                variant="outlined"
                label={intros[lang].label}
                onClick={ () => props.setIntro(lang) }
                />
            ))}
            </ToggleButtonGroup>
        </Hidden>
        <Hidden mdUp>
            <Chip
            variant="outlined"
            label="Translate"
            icon={<TranslateIcon fontSize="small"/>}
            onClick={handleOpen}
            />
                <Dialog 
                open={open}
                onClose={handleClose}
                className={styles.dialogroot}
                >
                    <DialogContent
                    className={styles.dialogcontent}
                    >
                    {languages.map((lang) => (
                    <Chip
                    size="medium"
                    variant="outlined"
                    label={intros[lang].label}
                    onClick={ () => { props.setIntro(lang); handleClose(); } }
                    />
                    ))}

                </DialogContent>
                </Dialog>
        </Hidden>
        </Box>
    )
}
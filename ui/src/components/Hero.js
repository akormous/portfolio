import React, { useState, useEffect, useCallback } from "react"
import { makeStyles } from "@material-ui/styles"
import { Box, Paper, Typography, Fade } from "@material-ui/core"
//import {sleep, randomCharacter} from '../utility/common'
import Video from "./Video"

import intros from "./data/intros.json"
import LanguageSelector from "./LanguageSelector"

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        minHeight: '90vh',
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        backgrooundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    intro: {
        position: 'absolute',
        zIndex: '1',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',
        minHeight: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.25)'
    },
}));



export default function Hero() {
    const styles = useStyles();
    // name and tagline that will be displayed
    const [tagline, setTagline] = useState("");
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    
    // when the component renders
    const [shouldShow, setShouldShow] = useState(false);
   

    /** resolves the name aka Glitch effect
    const resolveName = async (f_name, l_name) => {
        for(var i = 0; i < Math.max(f_name.length, l_name.length); ++i) {
            for(var j = 0; j < 10; j++) {
                await sleep(0.5);
                setFName(randomCharacter() + f_name.slice(f_name.length - i, f_name.length));
                setLName(l_name.slice(0, i) + randomCharacter());
            }
        }
        setFName(f_name);
        setLName(l_name);
    }
    */

    // set intro - sets tagline and name
    const setIntro = useCallback ( (lang) => {
        setTagline(intros[lang].tagline);
        setFName(intros[lang].f_name);
        setLName(intros[lang].l_name);
    }, []);

    /** cycles through multiple languages
        const cycleLanguages = async () => {
            for(var lang in intros) {
                if(!intros.hasOwnProperty(lang))
                    continue;

                var intro = intros[lang];
                setIntro(lang);

                await sleep(3000);
            }
            setIntro("english");
        }
    */
    // when the component finishes rendering
    useEffect(() => {
        setShouldShow(true);
        setIntro("english");
    }, [setIntro]);
    return(
        <>
        <Fade in={shouldShow}>
        <Paper className={styles.root}>
        <Video />
            <Box className={styles.intro}>
                <Typography align='center' variant='body1'>{tagline}</Typography>
                <Typography align='center' variant="h1">{FName}<br />{LName}</Typography>
                <LanguageSelector setIntro={setIntro} />
            </Box>
        </Paper>
        </Fade>
      </>
    
    )
}
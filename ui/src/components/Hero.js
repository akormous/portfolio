import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Box, Paper, Typography, Zoom } from "@material-ui/core"
import {sleep, randomCharacter} from '../utility/common'
import Video from "./Video"

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        minHeight: '80vh',
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
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.25)'
    },

}));

const intros = {
    english: {
        f_name: "Akshat",
        l_name: "Chauhan",
        tagline: "Hi, my name is"
    },
    japanese: {
        f_name: "アクシャット",
        l_name: "チョウアン",
        tagline: "こんにちは、私の名前は"
    },
    hindi: {
        f_name: "अक्षत",
        l_name: "चौहान",
        tagline: "नमस्ते, मेरा नाम है"
    },
    russian: {
        f_name: "Акшат",
        l_name: "Чаухан",
        tagline: "Привет, меня зовут"
    },
};

export default function Hero() {
    const styles = useStyles();
    // name and tagline that will be displayed
    const [tagline, setTagline] = useState("");
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    
    // when the component renders
    const [shouldShow, setShouldShow] = useState(false);
   

    // resolves the name aka Glitch effect
    const resolveName = async (f_name, l_name) => {
        for(var i = 0; i < Math.max(f_name.length, l_name.length); ++i) {
            for(var j = 0; j < 10; j++) {
                await sleep(5);
                setFName(randomCharacter() + f_name.slice(f_name.length - i, f_name.length));
                setLName(l_name.slice(0, i) + randomCharacter());
            }
        }
        setFName(f_name);
        setLName(l_name);
    }
    
    // cycles through multiple languages
    const cycleLanguages = async () => {
        for(var lang in intros) {
            if(!intros.hasOwnProperty(lang))    continue;
            var intro = intros[lang];
            setTagline(intro.tagline);
            resolveName(intro.f_name, intro.l_name);
            await sleep(5000);
        }
        setTagline(intros.english.tagline);
        resolveName(intros.english.f_name, intros.english.l_name);
    }

    // when the component finishes rendering
    useEffect(() => {
        setShouldShow(true);
        cycleLanguages();
    }, []);
    return(
        <>
        <Paper className={styles.root}>
        <Video />
            <Zoom in={shouldShow}>
                <Box className={styles.intro}>
                    <Typography align='center' variant='h6'>{tagline}</Typography>
                    <Typography align='center' variant="h1">{FName}<br />{LName}</Typography>
                </Box>
            </Zoom>
        </Paper>
      </>
    
    )
}
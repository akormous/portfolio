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


export default function Hero() {
    const styles = useStyles();
    // name that will be displayed
    let f_name = "Akshat";
    let l_name = "Chauhan";
    const [displayFName, setDisplayFName] = useState("");
    const [displayLName, setDisplayLName] = useState("");
    
    // when the component renders
    const [shouldShow, setShouldShow] = useState(false);
   

    // resolves the name aka Glitch effect
    const resolveName = async () => {
        for(var i = 0; i < Math.max(f_name.length, l_name.length); ++i) {
            for(var j = 0; j < 10; j++) {
                await sleep(5);
                setDisplayFName(randomCharacter() + f_name.slice(f_name.length - i, f_name.length));
                setDisplayLName(l_name.slice(0, i) + randomCharacter());
            }
        }
        setDisplayFName(f_name);
        setDisplayLName(l_name);
    }
    
    // when the component finishes rendering
    useEffect(() => {
        setShouldShow(true);
        resolveName();
    }, []);
    return(
        <>
        <Paper className={styles.root}>
        <Video />
            <Zoom in={shouldShow}>
                <Box className={styles.intro}>
                    <Typography align='center' variant='h6'>{"Programmer, Engineer, Gamer"}</Typography>
                    <Typography align='center' variant="h1">{displayFName}<br />{displayLName}</Typography>
                </Box>
            </Zoom>
        </Paper>
      </>
    
    )
}
import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Box, Paper, Typography, Zoom } from "@material-ui/core"
import {sleep, randomCharacter} from '../utility/common'
import Video from "./Video"

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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
                setDisplayFName(f_name.slice(0, i) + randomCharacter());
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
        <Video />
        <Paper className={styles.root}>
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
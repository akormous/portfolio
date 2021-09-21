import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Paper, Typography, Container, Grid, Button, Zoom } from "@material-ui/core"
import BG from '../images/sample_bg.jpg'
import {sleep, randomCharacter} from '../utility/common'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '90vh',
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    },
    container: {
        height: '100%'
    },
    content: {
        alignItems: 'center',
        height: '100%'
    },

}));


export default function Hero() {
    const styles = useStyles();
    // name that will be displayed
    let name = "Hi, I am Akshat";
    const [displayName, setDisplayName] = useState("");
    
    // when the component renders
    const [shouldShow, setShouldShow] = useState(false);
   

    // resolves the name aka Glitch effect
    const resolveName = async () => {
        for(var i = 0; i < name.length; ++i) {
            for(var j = 0; j < 10; j++) {
                await sleep(5);
                setDisplayName(name.slice(0, i) + randomCharacter());
            }
        }
        setDisplayName(name);
    }
    
    // when the component finishes rendering
    useEffect(() => {
        setShouldShow(true);
        resolveName();
    }, []);
    return(
      <Paper className={styles.root}>
          <Container className={styles.container} maxWidth='xl'>
            <Grid  className={styles.content} container alignItems='center'>
                
                    <Grid item sm={12}>
                        <Typography variant="h1">{displayName}</Typography>
                    </Grid>
                <Zoom in={shouldShow}>
                    <Grid item>
                        <Button onClick={() => resolveName()}>Tap to reveal name</Button>
                    </Grid>
                </Zoom>
            </Grid>
          </Container>
          
      </Paper>
    
    )
}
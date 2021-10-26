import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import { Rating } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    skill: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}));

export default function SkillRating(props) {
    const styles = useStyles();
    return(
        <Container className={styles.skill}>
            <Typography variant="body2">{props.skill}</Typography>    
            <Rating
            icon={<FiberManualRecordSharpIcon fontSize='small'/>}
            readOnly defaultValue={props.rating} max={7}
            />
        </Container>
    );
}
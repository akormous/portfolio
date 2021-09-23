import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({

}));

export default function Experience() {
    return (
        <Box>
            <Typography variant="h3">Amadeus</Typography>
            <Typography variant="body">Software Engineer</Typography>
            <Typography variant="subtitle1">Aug 2021 - Present</Typography>
        </Box>
    );
}
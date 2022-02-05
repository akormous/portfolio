import React from "react";
import {someColors} from "../theme.js";
/* import icons */
import FlightSharpIcon from '@material-ui/icons/FlightSharp';
import BarChartSharpIcon from '@material-ui/icons/BarChartSharp';

/*
COMMON UTILITY FUNCTIONS
*/

/* sleep(n) : sleep for n microseconds */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* randomString(len) : returns a random string / nonsense of length len */
export const randomString = (len) => {
    var characters = "abcdefghijklmnopqrstuvwxyz1234567890";
    var result = "";  
    for(var i = 0; i < len; ++i) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result;
}

/* randomCharacter() : returns a random character */
export const randomCharacter = () => {
    var characters = "abcdefghijklmnopqrstuvwxyz1234567890";
    return characters.charAt(Math.floor(Math.random() * characters.length))
}

/* getRandomColor(): returns a random color from the the someColors array defined in theme.js */
export function getRandomColor() {
    const random = Math.floor(Math.random() * someColors.length);
    return someColors[random];
}

/*  */
export function getIconFromKey(key) {
    switch(key) {
        case "flight": return <FlightSharpIcon />;
        case "data": return <BarChartSharpIcon />;
        default : return <BarChartSharpIcon />;
    }
}
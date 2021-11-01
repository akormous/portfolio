import { createTheme, responsiveFontSizes } from '@material-ui/core'
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
const h1 = {
  fontWeight: 700,
  [breakpoints.up("xs")]: {
    fontSize: "3rem"
  },
  [breakpoints.up('md')]: {
    fontSize: '6rem',
  },
}

const h2 = {
  fontWeight: 600,
  [breakpoints.up("xs")]: {
    fontSize: "2rem"
  },
}

let theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#0f1416',
          light: '#353a3c',
          dark: '#000000',
        },
        secondary: {
          main: '#546e7a',
          light: '#819ca9',
          dark: '#29434e',
          extralight: '#bababa'
        },
        background: {
          default: '#000000',
          paper: '#272626',
        },
        lightbackground: {
          default: '#f5f5f5',
          paper: '#f5f5f5',
          text: '#000000'
        }
        
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Montserrat"',
        'Roboto',
        '"Montserrat"',
        'Montserrat',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: h1,
      h2: h2,
    },
})
theme = responsiveFontSizes(theme);
export default theme;
import { createTheme } from '@material-ui/core'
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

const h3 = {
  fontWeight: 500,
  [breakpoints.up("xs")]: {
    fontSize: "2rem"
  },
  [breakpoints.up('md')]: {
    fontSize: '4rem',
  },
}

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#0f1416',
          light: '#353a3c',
          dark: '#000000'
        },
        secondary: {
          main: '#546e7a',
          light: '#819ca9',
          dark: '#29434e'
        },
        background: {
          default: '#000000',
          paper: '#272626',
        },
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
      h3: h3,
    },
})

export default theme;
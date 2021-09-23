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

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#08012f',
          light: '#2a1ea4',
        },
        secondary: {
          main: '#ffffff',
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
      h1: h1
    },
})

export default theme;
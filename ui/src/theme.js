import { createTheme } from '@material-ui/core'

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#08012f',
          light: '#2a1ea4',
        },
        secondary: {
          main: '#464444',
        },
        background: {
          default: '#373636',
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
    },
})

export default theme;
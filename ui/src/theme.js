import { createTheme, responsiveFontSizes } from '@material-ui/core'

const h1 = {
  fontWeight: 800,
  fontSize: '5rem',
}

const h2 = {
  fontWeight: 600,
  fontSize: '3rem'
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
        },
        gatsby: '#663399',
        python: '#306998',
        react: '#4c768d',
        tensorflow: '#de7e00',
        html: '#e44d26',
        css: '#214ce5',
        bootstrap: '#563D7C',
        
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
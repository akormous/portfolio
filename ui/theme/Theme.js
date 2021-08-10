/* All themes are defined here */
import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';

const h1 = {
  fontWeight: 700,

}
const h4 = {
  fontWeight: 600,
  fontStyle: 'italic'
}
const h6 = {
  fontWeight: 400
}
const body1 = {
  fontWeight: 600,
  fontSize: '0.75rem'
}

/* Dark Theme */
export let darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
          main: '#FFFFFF',
          background: '#000000',
          component: '#525252',
          appbar: '#252525',
          appbartext: '#FFFFFF',
        },
        secondary: {
          main: '#FF0000',
          helper: '#FF0000',
          helperColor: '#FFFFFF'
        },
      },
      typography: {
          fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Montserrat"',
              'Montserrat',
              '"Montserrat"',
              'Montserrat',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
            h6: h6,
            h4: h4,
            h1: h1,
            body1: body1,
      }
})

/* Light Theme */
export let lightTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: '#FF4FFF',
        background: '#FFFFFF',
        component: '#EEEDED',
        appbar: '#005fb8',
        appbartext: '#FFFFFF',
      },
      secondary: {
        main: '#0F3057',
        helper: '#005fb8',
        helperColor: '#FFFFFF'
      },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Montserrat"',
            'Montserrat',
            '"Montserrat"',
            'Montserrat',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h6: h6,
        h4: h4,
        h1: h1,
        body1: body1,
    }
});

darkTheme = responsiveFontSizes(darkTheme);
lightTheme = responsiveFontSizes(lightTheme);
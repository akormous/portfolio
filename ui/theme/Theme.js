/* All themes are defined here */
import {createTheme} from '@material-ui/core/styles';

const h4 = {
  fontWeight: 600
}
const h6 = {
  fontWeight: 400
}

/* Dark Theme */
export const darkTheme = createTheme({
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
      }
})

/* Light Theme */
export const lightTheme = createTheme({
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
    }
});
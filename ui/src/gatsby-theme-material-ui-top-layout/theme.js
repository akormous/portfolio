import { createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#080516',
        },
        secondary: {
          main: '#6d6d6d',
        },
        background: {
          paper: '#1a1a1a',
        },
        text: {
          primary: '#fbf8f8',
        },
        
    },
    typography: {
        fontFamily: [
            'Droid Sans',
            'sans-serif'
        ].join(','),
    },
})

export default theme;

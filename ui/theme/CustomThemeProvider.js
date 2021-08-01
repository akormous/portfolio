import React, { useState, useContext } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { getTheme } from './base';

export const ThemeContext = React.createContext({
    currentTheme: null,
    setTheme: null,
});

const CustomThemeProvider = (props) => {
    const { children } = props;
    /* Get the current activated theme */
    var [themeName, setThemeName] = useState(ThemeContext.currentTheme);
    /* If the current theme is undefined / null which means that the app is just starting */
    if(themeName == null)
        themeName = 'darkTheme'

    /* Retrieve the theme object by theme name */
    const theme = getTheme(themeName);

    /* Updating the ThemeContext */
    var contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default CustomThemeProvider;
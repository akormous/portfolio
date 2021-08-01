import { darkTheme, lightTheme } from './Theme';

const themes = {
    darkTheme,
    lightTheme
}

export function getTheme(theme) {
    return themes[theme];
}
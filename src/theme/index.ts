import { createMuiTheme } from '@material-ui/core';

// declare module '@material-ui/core/styles/createPalette' {
//   interface Palette {}
//   interface PaletteOptions {}
// }

// declare module '@material-ui/core/styles/createMuiTheme' {
//   interface Theme {}
//   interface ThemeOptions {}
// }

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif"
  },
  palette: {
    primary: {
      main: '#ee6457'
    },
    secondary: {
      main: '#034c5f'
    },
    grey: {
      '500': '#adb5bd'
    }
  }
});

export { muiTheme };

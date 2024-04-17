import { createTheme } from '@mui/material/styles';

const colors = {
  mainBackground: '#ebeae8',
  paperBackground: '#fcfcf7',
  primaryColor: '#a19e92',
  textPrimary: '#171610',
  textSecondary: '#29271e',
};

const neutralTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: colors.mainBackground,
      paper: colors.paperBackground,
    },
    primary: {
      main: colors.primaryColor,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: 'Montserrat, Open Sans, Arial, sans-serif',
  },
});

export default neutralTheme;

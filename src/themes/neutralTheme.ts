import { createTheme } from '@mui/material/styles';

const colors = {
  mainBackground: '#f5f1e9',
  paperBackground: '#ffffff',
  primaryColor: '#36290c',
  textPrimary: '#4d4739',
  textSecondary: '#dec17e',
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

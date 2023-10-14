import { createTheme } from '@mui/material/styles';

const colors = {
  mainBackground: '#cad7ed',
  paperBackground: '#ffffff',
  secondaryBackground: '#121212',
  primaryColor: '#4773ba',
  textPrimary: '#333333',
  textSecondary: '#4773ba',
};

const colorfulTheme = createTheme({
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

export default colorfulTheme;

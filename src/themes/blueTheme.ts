import { createTheme } from '@mui/material/styles';

const colors = {
  mainBackground: '#8ea8d1',
  paperBackground: '#ffffff',
  secondaryBackground: '#121212',
  primaryColor: '#4773ba',
  textPrimary: '#333333',
  textSecondary: '#4773ba',
};

const blueTheme = createTheme({
  palette: {
    mode: 'dark',
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

export default blueTheme;

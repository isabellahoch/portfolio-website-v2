import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import THEMES from './themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEMES.DARK}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

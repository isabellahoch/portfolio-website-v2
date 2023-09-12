/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import ResumeViewer from './components/ResumeViewer';
import Projects from './components/Projects';
import About from './components/About';
import { type RootState } from './reducers';
import THEMES from './themes';

const App: React.FC = () => {
  type ThemeName = 'NEUTRAL' | 'DARK' | 'COLORFUL';
  const currentTheme: ThemeName = useSelector((state: RootState) => state.theme.currentTheme as ThemeName) ?? 'DARK';

  return (
    <ThemeProvider theme={THEMES[currentTheme]}>
      <CssBaseline />

      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column' }} className="App">
          <Header />
          <Box sx={{ marginBottom: '1em' }} />
          <Routes>
            <Route
              path="/assets/resume"
              element={<ResumeViewer defaultDownloadName="Hochschild, Isabella Resume.pdf" fileUrl="/assets/resumes/projects.pdf" />}
            />
            <Route path="/portfolio" Component={Projects} />
            <Route path="/about" Component={About} />
            <Route path="/" Component={Home} />
          </Routes>
          <Chatbot />
          <Box sx={{ padding: '1em' }} />
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

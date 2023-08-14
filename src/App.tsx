import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import Projects from './components/Projects';
import About from './components/About';

const App: React.FC = () => (
  <BrowserRouter>
    <Box sx={{ display: 'flex' }} className="App">
      <Header />
      <Routes>
        <Route path="/projects" Component={Projects} />
        <Route path="/about" Component={About} />
        <Route path="/" Component={Home} />
      </Routes>
      <Chatbot />
    </Box>
  </BrowserRouter>
);

export default App;

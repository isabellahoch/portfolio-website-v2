import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <Box sx={{ display: 'flex' }} className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;

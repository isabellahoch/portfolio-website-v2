import React from 'react';
import { Box } from '@mui/material';
import '../../index.css';

const Home: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} className="container">
    <h1>Hi, I&#39;m Isabella Hochschild 👋</h1>
    <p>Welcome to my portfolio website! It is currently under construction 🚧</p>
    <p>
      I&#39;m in the process of migrating my portfolio from
      {' '}
      <a href="https://github.com/isabellahoch/flask-portfolio">Flask</a>
      {' '}
      to
      {' '}
      <a href="https://github.com/isabellahoch/portfolio-website-v2">React</a>
      !
    </p>
    <p>
      You can view the 5-year old soon-to-be-deprecated version
      {' '}
      (maintaining backwards compatability until 2024)
      {' '}
      <a href="https://ieh-portfolio.onrender.com/">here</a>
      .
    </p>
    <p>Updated version expected August 2023 :)</p>
  </Box>
);

export default Home;

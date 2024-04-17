import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import '../../index.css';
import GitHubActivity from '../GitHubActivity';
import { fetchProjects } from '../../actions/portfolioActions';
import { fetchAbout, fetchBadges } from '../../actions/infoActions';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchProjects());
    dispatch<any>(fetchAbout());
    dispatch<any>(fetchBadges(''));
  }, [dispatch]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} className="container">
      <h1>Hi, I&#39;m Isabella Hochschild 👋</h1>
      <Box sx={{ padding: '0px 10vw', marginBottom: '-50px' }}>
        <p>      
          Welcome to my portfolio website! It is currently under construction 🚧 as I migrate my
          {' '}
          <a href="https://github.com/isabellahoch/flask-portfolio">5+ year old version in Flask/Python</a>
          {' '}
          to a classic MERN tech stack.
          {' '}
          In the meantime, please feel free to browse an animated chart of my GitHub commit history,
          {' '}
          strike up a conversation with my AI chatbot (bottom right corner),
          {' '}
          or follow my progress on GitHub:
          {' '}
          <a href="https://github.com/isabellahoch/portfolio-website-v2">@isabellahoch/portfolio-website-v2</a>
          <br/><br/><br/>
        </p>
      </Box>

      <GitHubActivity />
    </Box>
  );
};

export default Home;

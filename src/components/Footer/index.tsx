import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ThemeToggle from '../ThemeToggle';
// import SocialMediaIcons from '../SocialMediaIcons';

const githubRepoLink = 'https://github.com/isabellahoch/portfolio-website-v2';

const Footer: React.FC = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center', // center text
      }}
    >
      <Box sx={{
        borderTop: `4px solid ${theme.palette.primary.main}`, // add a thick top border to serve as a dividing line
        marginTop: '2rem', // add margin to the top
        marginLeft: '1em', // left margin
        marginRight: '1em', // right margin
        padding: '2em', // add padding to the content
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center', // center text
      }}
      >
        <ThemeToggle />
        <Box sx={{ marginTop: '2rem', display: 'flex', flexDirection: 'row' }}>
          <Typography variant="body1" color="inherit">
            Designed & coded with
            {' '}
            <span style={{ color: 'red' }}>&#10084;</span>
            {' '}
            by Isabella Hochschild
          </Typography>
          {/* <SocialMediaIcons /> */}
        </Box>
        {/* <Box sx={{ marginTop: '1rem' }} /> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '1rem', // Add spacing between text and GitHub icon
          }}
        >
          <IconButton
            color="inherit"
            aria-label="GitHub Repo"
            component={Link}
            href={githubRepoLink}
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon />
          </IconButton>
          <Link
            href={githubRepoLink}
            target="_blank"
            rel="noopener"
            style={{
              textDecoration: 'underline', // Add underline
              fontSize: '1rem', // Set font size to body1
            }}
          >
            View Source Code
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

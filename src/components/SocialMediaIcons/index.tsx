import React from 'react';
import { IconButton, Grid, Link } from '@mui/material';
import {
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

const SocialMediaIcons: React.FC = () => (
  <Grid container spacing={2} justifyContent="center" alignItems="center">
    <Grid item>
      <Link href="https://twitter.com/isabellahoch" target="_blank" rel="noopener noreferrer">
        <IconButton color="primary" aria-label="Twitter">
          <Twitter />
        </IconButton>
      </Link>
    </Grid>
    <Grid item>
      <Link href="https://instagram.com/isabellahochschild" target="_blank" rel="noopener noreferrer">
        <IconButton color="primary" aria-label="Instagram">
          <Instagram />
        </IconButton>
      </Link>
    </Grid>
    <Grid item>
      <Link href="https://www.linkedin.com/in/isabellahochschild/" target="_blank" rel="noopener noreferrer">
        <IconButton color="primary" aria-label="LinkedIn">
          <LinkedIn />
        </IconButton>
      </Link>
    </Grid>
  </Grid>
);

export default SocialMediaIcons;

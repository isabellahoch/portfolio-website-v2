import React from 'react';
import {
  Box, Typography,
} from '@mui/material';

const Contact: React.FC = () => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
  }}
  >
    <Typography>
      You can reach me at
      {' '}
      <a href="mailto:isabellahochschild@gmail.com">isabellahochschild@gmail.com</a>
      !
    </Typography>
  </Box>
);

export default Contact;

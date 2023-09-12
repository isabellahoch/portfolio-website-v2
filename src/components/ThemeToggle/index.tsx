import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';
import { type RootState } from '../../reducers';
import { setTheme } from '../../actions/themeActions';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const handleThemeChange = (theme: string): void => {
    dispatch<any>(setTheme(theme));
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => { handleThemeChange('NEUTRAL'); }}
        disabled={currentTheme === 'NEUTRAL'}
      >
        Neutral Theme
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => { handleThemeChange('DARK'); }}
        disabled={currentTheme === 'DARK'}
        sx={{ marginLeft: '1rem' }}
      >
        Dark Theme
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => { handleThemeChange('COLORFUL'); }}
        disabled={currentTheme === 'COLORFUL'}
        sx={{ marginLeft: '1rem' }}
      >
        Colorful Theme
      </Button>
    </Box>
  );
};

export default ThemeToggle;

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import {
  Box, Typography, CircularProgress, Paper,
} from '@mui/material';
import fetchDuolingoStreakLength from '../../utils/duolingo';

const DuolingoStreak: React.FC = () => {
  const [streakLength, setStreakLength] = useState<number | null>(null);

  useEffect(() => {
    async function fetchDuolingoStreak() {
      try {
        const length = await fetchDuolingoStreakLength('isabellahawk');
        setStreakLength(length);
      } catch (error) {
      // Handle errors if needed
      }
    }

    fetchDuolingoStreak();
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: '16px', display: 'flex', alignItems: 'center' }}>
      {streakLength !== null ? (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ marginRight: '8px' }}>
              Duolingo Streak:
            </Typography>
            <Typography variant="h5" component="span">
              {streakLength}
            </Typography>
          </Box>
          <Box sx={{ marginLeft: '16px' }}>
            <img
              src="duolingo-icon.png" // Replace with the actual Duolingo icon image URL
              alt="Duolingo Icon"
              width={32}
              height={32}
            />
          </Box>
        </>
      ) : (
        <CircularProgress />
      )}
    </Paper>
  );
};

export default DuolingoStreak;

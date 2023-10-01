/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  ResponsiveContainer, AreaChart, Area, ReferenceDot, XAxis, Label,
} from 'recharts';
import {
  type ActivityResult, getActivity, monthNames,
} from '../../utils/github';

const GitHubActivity: React.FC = () => {
  const [activityData, setActivityData] = useState<ActivityResult>(
    { history: [], contributions: 0 },
  );
  const [totalPeriodActivity, setTotalPeriodActivity] = useState<number>(0);
  const [dayOne, setDayOne] = useState<string>('');
  const [animationStarted, setAnimationStarted] = useState<boolean>(false); // State for animation

  useEffect(() => {
    getActivity().then((result) => {
      setActivityData(result);
      console.log(result.history);
      setDayOne(`${monthNames[(new Date(result.history[0].x)).getMonth()]} ${(new Date(result.history[0].x)).getDate()}`);
      setTotalPeriodActivity(result.history.reduce((sum, val) => sum + val.y, 0));
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    // Start the animation after data is loaded
    if (activityData.history.length > 0 && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [activityData.history, animationStarted]);

  if (activityData.history.length === 0) {
    return (
      <Box sx={{ height: '400px' }} />
    );
  }

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '2vw',
    }}
    >
      <ResponsiveContainer width="80%" height={400}>
        <AreaChart
          data={activityData.history}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="basis"
            dataKey="y"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorGradient)"
            animationBegin={animationStarted ? 0 : undefined}
            animationDuration={5000}
          />
          <ReferenceDot
            x={activityData.history[activityData.history.length - 1].x}
            y={activityData.history[activityData.history.length - 1].y}
            r={10}
            fillOpacity={1}
            fill="#8884d8"
            stroke="#8884d8"
          >
            <Label
              position="right"
              content={(
                <span>
                  {totalPeriodActivity !== 0
                    ? [`${activityData.contributions} total contributions ·`,
                      `${totalPeriodActivity} contributions`,
                      `since ${dayOne}`,
                    ]
                    : [
                      'Loading activity data...',
                    ]}
                </span>
            )}
            />
          </ReferenceDot>
          <XAxis
            dataKey="name"
            axisLine={false}
            interval={0}
          />
        </AreaChart>
      </ResponsiveContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" height="50" width="50" alt="github logo" />
          <a href="https://github.com/isabellahoch"><h4>@isabellahoch</h4></a>
        </Box>
        <span>
          <Typography variant="body1" component="span" style={{ fontWeight: 'bold' }}>
            {activityData.contributions}
          </Typography>
          {' contributions this year'}
        </span>
        <span>
          <Typography variant="body1" component="span" style={{ fontWeight: 'bold' }}>
            {totalPeriodActivity}
          </Typography>
          {` contributions since ${dayOne}`}
        </span>
      </Box>

    </Box>
  );
};

export default GitHubActivity;

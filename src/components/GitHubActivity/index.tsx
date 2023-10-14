/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import {
  ResponsiveContainer, AreaChart, Area, Line, ReferenceDot, XAxis, Label,
} from 'recharts';
import {
  type ActivityResult, getActivity, monthNames,
} from '../../utils/github';

const GitHubActivity: React.FC = () => {
  const theme = useTheme(); // Get the current theme

  const [activityData, setActivityData] = useState<ActivityResult>(
    { history: [], contributions: 0 },
  );
  const [totalPeriodActivity, setTotalPeriodActivity] = useState<number>(0);
  const [dayOne, setDayOne] = useState<string>('');
  const [animationStarted, setAnimationStarted] = useState<boolean>(false); // State for animation

  useEffect(() => {
    getActivity().then((result) => {
      setActivityData(result);
      setDayOne(`${monthNames[(new Date(result.history[0].x)).getMonth()]} ${(new Date(result.history[0].x)).getDate()}`);
      setTotalPeriodActivity(result.history.reduce((sum, val) => sum + val.y, 0));
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
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
              <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.8} />
              <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0} />
            </linearGradient>
          </defs>
          <ReferenceDot
            x={activityData.history[activityData.history.length - 1].x}
            y={activityData.history[activityData.history.length - 1].y}
            r={6}
            fill={theme.palette.primary.main}
            stroke="none"
            style={{ color: theme.palette.primary.main, transition: '1s' }}
          >
            <Label
              position="right"
              content={(
                <g transform={`translate(${25},${12.5})`}>
                  <text x={0} y={-5 * 3} dy={0} fill="var(--text-color)">
                    <tspan key={0} textAnchor="left" x="0" dy={0}>
                      {activityData.contributions}
                      {' '}
                      total contributions
                    </tspan>
                    <tspan key={0} textAnchor="left" x="0" dy={20}>
                      {totalPeriodActivity}
                      {' '}
                      contributions
                    </tspan>
                    <tspan key={0} textAnchor="left" x="0" dy={40}>
                      since
                      {' '}
                      {dayOne}
                    </tspan>
                  </text>
                  {/* <text>
                    <tspan key={0} textAnchor="left" x="0" dy={0}>'Loading activity data...'</tspan>
                  </text> */}
                  <svg x="125" y="-14" width="20" height="20" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="var(--text-color)" />
                  </svg>
                </g>
            )}
            />
          </ReferenceDot>
          <Area
            type="monotone"
            dataKey="y"
            stroke={activityData.history.length === 0 ? 'transparent' : theme.palette.primary.main}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorGradient)"
            animationBegin={animationStarted ? 0 : undefined}
            animationDuration={5000}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke={theme.palette.primary.main}
            animationBegin={animationStarted ? 0 : undefined}
            animationDuration={5000}
            strokeWidth={3}
            dot={{ stroke: theme.palette.primary.main, strokeWidth: 8 }}
          />
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

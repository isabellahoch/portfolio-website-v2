/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Typography, Grid, useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import { type RootState } from '../../reducers';
import { fetchAbout, fetchBadges } from '../../actions/infoActions';
import BadgesSection from '../Badges';
import './index.css';

const About: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const aboutInfo = useSelector((state: RootState) => state.info.about);
  const badges = useSelector((state: RootState) => state.info.badges);
  const aboutImg = 'https://media.licdn.com/dms/image/D4E03AQEQzUh76ZsCNQ/profile-displayphoto-shrink_800_800/0/1688611928043?e=2147483647&v=beta&t=r0-Ry1QlNRzl1uaxxe6bKVc4w7lFydCzPeZAC3QUrF4';

  useEffect(() => {
    dispatch<any>(fetchAbout());
    dispatch<any>(fetchBadges(''));
  }, [dispatch]);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100vw',
    }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="aboutImgParent" style={{ borderColor: theme.palette.primary.main }}>
              <img src={aboutImg} alt="About" style={{ maxWidth: '100%' }} className="aboutImg" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', marginLeft: '1em',
            }}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" paragraph>
                {aboutInfo}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ padding: '1em' }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Skills
        </Typography>
        <BadgesSection badges={badges} />
      </Container>
    </Box>
  );
};

export default About;

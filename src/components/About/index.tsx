import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@mui/material';
import { type RootState } from '../../reducers';
import { fetchAbout, fetchBadges } from '../../actions/infoActions';
import BadgesSection from '../Badges';
import './index.css';

const About: React.FC = () => {
  const dispatch = useDispatch();
  const aboutInfo = useSelector((state: RootState) => state.info.about);
  const badges = useSelector((state: RootState) => state.info.badges);
  const aboutImg = 'https://media.licdn.com/dms/image/D4E03AQEQzUh76ZsCNQ/profile-displayphoto-shrink_800_800/0/1688611928043?e=2147483647&v=beta&t=r0-Ry1QlNRzl1uaxxe6bKVc4w7lFydCzPeZAC3QUrF4';

  useEffect(() => {
    dispatch<any>(fetchAbout());
    dispatch<any>(fetchBadges(''));
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className="aboutImgParent">
            <img src={aboutImg} alt="About" style={{ maxWidth: '100%' }} className="aboutImg" />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" gutterBottom>
            About
          </Typography>
          <Typography variant="body1" paragraph>
            {aboutInfo}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" component="h1" gutterBottom>
        Skills
      </Typography>
      <BadgesSection badges={badges} />
    </Container>
  );
};

export default About;

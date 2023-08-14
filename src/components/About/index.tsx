import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../reducers';
import { fetchAbout } from '../../actions/infoActions';

const About: React.FC = () => {
  const dispatch = useDispatch();
  const aboutInfo = useSelector((state: RootState) => state.info.about);

  useEffect(() => {
    dispatch<any>(fetchAbout());
  }, [dispatch]);

  return (
    <div>
      <h1>About</h1>
      <p>
        {aboutInfo}
      </p>
    </div>
  );
};

export default About;

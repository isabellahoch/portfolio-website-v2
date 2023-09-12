import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { type RootState } from '../../reducers';
import { fetchProjects } from '../../actions/portfolioActions';
import ProjectCard from './ProjectCard';
import './index.css';

const useStyles = makeStyles({
  masonryContainer: {
    display: 'flex',
    margin: '0 auto',
    width: '90%',
  },
});

const Projects: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projectInfo = useSelector((state: RootState) => state.portfolio.projects);

  useEffect(() => {
    dispatch<any>(fetchProjects());
  }, [dispatch]);

  return (
    <div>
      <h1>Projects</h1>
      <div className={classes.masonryContainer}>
        <TransitionGroup>
          <ResponsiveMasonry columnsCountBreakPoints={{
            350: 1, 750: 2, 900: 3, 1200: 4,
          }}
          >
            <Masonry>
              {projectInfo.map((project) => (
                <CSSTransition key={project.id} timeout={500} classNames="fade">
                  <ProjectCard key={project.id} project={project} />
                </CSSTransition>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Projects;

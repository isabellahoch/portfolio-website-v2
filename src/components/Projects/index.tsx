import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../reducers';
import { fetchProjects } from '../../actions/portfolioActions';
import { type Project } from '../../types';

const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const projectInfo = useSelector((state: RootState) => state.portfolio.projects);

  useEffect(() => {
    dispatch<any>(fetchProjects());
  }, [dispatch]);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectInfo.map((project: Project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

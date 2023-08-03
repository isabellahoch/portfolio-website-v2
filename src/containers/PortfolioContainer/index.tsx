import React, { useEffect } from 'react';
import { type Project } from '../../types';

interface Props {
  loading: boolean
  projects: Project[]
  fetchProjects: () => void
}

const PortfolioContainer: React.FC<Props> = ({
  loading,
  projects,
  fetchProjects,
}) => {
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return (
    <div>
      <h1>Portfolio Page</h1>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PortfolioContainer;

import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Markdown from 'react-markdown';
import { type Project } from '../../../types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px',
    transition: 'transform 1.5s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.3)',
      filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))',
      cursor: 'pointer',
    },
  },
  media: {
    height: 140,
  },
  badges: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
});

interface ProjectProps {
  project: Project
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={project.imageUrl}
        title={project.title}
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div"> */}
        <Markdown>{project.title}</Markdown>
        {/* </Typography> */}
        {(project.badges != null) && (
        <div className={classes.badges}>
          {project.badges.map((badge, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index}>{badge}</span>
          ))}
        </div>
        )}
        {/* <Typography variant="body2" color="text.secondary"> */}
        <Markdown>{project.description}</Markdown>
        {/* </Typography> */}
        <Button variant="contained" color="primary" href={project.githubUrl} target="_blank" endIcon={<GitHubIcon />}>
          GitHub
        </Button>
        {(project.liveUrl != null) && (
          <Button variant="contained" color="secondary" href={project.liveUrl} target="_blank">
            Live Demo
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

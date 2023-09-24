import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Markdown from 'react-markdown';
import Divider from '@mui/material/Divider';
import { type Project } from '../../../types';
import Badge from '../../Badges/Badge';

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
    paddingTop: '5%',
  },
  mediaWithImg: {
    // paddingTop: '56.25%', // 16:9 aspect ratio (9 / 16 * 100%)
    objectFit: 'contain',
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

  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (project.imageUrl !== '') {
      const img = new Image();
      img.src = project.imageUrl;
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
    }
  }, [project.imageUrl]);

  // calculate aspect ratio based on preloaded image dimensions
  const aspectRatio = imageDimensions.width / imageDimensions.height;

  // calculate paddingTop value to establish dynamic height based on aspect ratio
  const paddingTopValue = `${(1 / aspectRatio) * 100}%`;

  return (
    <Card className={classes.root}>
      {(project.imageUrl !== '') ? (
        <CardMedia
          className={classes.mediaWithImg}
          style={{ paddingTop: paddingTopValue }}
          image={project.imageUrl}
          title={project.title}
        />
      ) : (
        <CardMedia
          className={classes.media}
          title={project.title}
        />
      )}
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div"> */}
        <Markdown>{project.title}</Markdown>
        {/* </Typography> */}
        {/* <Typography variant="body2" color="text.secondary"> */}
        <Markdown>{project.description}</Markdown>
        { (project.badges != null) && (
          <Box>
            {
          Object.entries(project.badges).map(
            ([badgeKey, badgeValue]) => (
              <Badge
                key={badgeKey}
                badgeName={badgeKey}
                badgeUrl={badgeValue}
              />
            ),
          )
}
          </Box>
        )}
        <Divider />
        <Box sx={{ margin: '0.5em' }} />
        {/* </Typography> */}
        {(project.githubUrl != null) && (
        <Button sx={{ margin: '0.25em' }} variant="contained" color="primary" href={project.githubUrl} target="_blank" endIcon={<GitHubIcon />}>
          GitHub
        </Button>
        )}
        {(project.liveUrl != null) && (
          <Button sx={{ margin: '0.25em' }} variant="contained" color="secondary" href={project.liveUrl} target="_blank">
            Live Demo
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

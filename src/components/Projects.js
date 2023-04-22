import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const Projects = ({ projects }) => {
  return (
    <Box>
      {projects.map((item, index) => (
        <Card key={index}>
          <CardContent>
            <Typography>{item.name}</Typography>
            <Typography>{item.description}</Typography>
            <Typography>{item.link}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Projects;

import React from 'react';
import { Box, Typography } from '@mui/material';

const TitlePage = ({ name }) => {
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography>{name}</Typography>
    </Box>
  );
};

export default TitlePage;

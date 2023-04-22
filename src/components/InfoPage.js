import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';

const InfoPage = ({ labels, pages, projects }) => {
  const [value, setValue] = useState(labels[0]);
  const [pageNum, setPageNum] = useState(0);

  const changePageNum = (val) => {
    const i = labels.indexOf(val);
    setPageNum(i);
  }
  return (
    <Box sx={{ height: '90vh' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, val) => {
          setValue(val);
          changePageNum(val);
        }}
      >
        {labels.map((item, index) => (
          <BottomNavigationAction key={index} label={item} value={item} />
        ))}
      </BottomNavigation>
      <Box component={pages[pageNum]} projects={projects}></Box>
    </Box>
  );
};

export default InfoPage;

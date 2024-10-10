import { Backdrop, Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Backdrop
      sx={{ 
        color: '#fff', 
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.8)'  
      }}
      open={true}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <CircularProgress color="inherit" />
      </Box>
    </Backdrop>
  );
};

export default Loader;

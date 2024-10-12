import { Backdrop, Box, CircularProgress } from '@mui/material';
import React from 'react';
const Loader = () => {
  return (
    <Backdrop
      sx={{ 
        color: "#fff", 
        zIndex: (theme) => theme.zIndex.drawer + 198787897897897, 
        // backgroundColor: 'transparent'  
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

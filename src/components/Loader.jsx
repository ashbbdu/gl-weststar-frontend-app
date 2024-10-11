import { Backdrop, Box } from '@mui/material';
import React from 'react';
import loaderSvg from "../assets/Hourglass.gif";
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
        {/* <CircularProgress color="inherit" /> */}
        <img src={loaderSvg} alt='loader-img' />
      </Box>
    </Backdrop>
  );
};

export default Loader;

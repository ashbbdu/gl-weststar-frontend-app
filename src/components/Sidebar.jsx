// src/components/Sidebar.jsx
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sideBarMenuItems } from '../constants';

const Sidebar = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Change the breakpoint as needed



  const drawerContent = (
    <div className='mt-10'>
      <List>
        {sideBarMenuItems.map((res) => (
          <Link className='menu-items' to={res.url}>
            <ListItem button key={res.id}>
            <ListItemText primary={res.title} />
          </ListItem>
          </Link>
        ))}
      </List>
      {/* <Divider /> */}
    </div>
  );

  return (
    <div className='sidebar'>
        <Drawer
      
      anchor="left"
      open={open || !isSmallScreen}
      onClose={toggleDrawer(false)}
      variant={isSmallScreen ? "temporary" : "persistent"} 
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
        },
      }}
    >
      {drawerContent}
    </Drawer>
    </div>
  );
};

export default Sidebar;

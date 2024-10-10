// src/components/Sidebar.jsx
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sideBarMenuItems } from '../constants';
import { logout } from '../services/authApi';

const Sidebar = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Change the breakpoint as needed

  const handleLogout = () => {
    dispatch(logout(navigate))
  }

  const drawerContent = (
    <div className='mt-10'>
      <List>
        {sideBarMenuItems.map((res) => (
          <Link className='menu-items' key={res.id} to={res.url}>
            <ListItem button >
            <ListItemText primary={res.title} />
          </ListItem>
          </Link>
          
        ))}
       <Link onClick={handleLogout} className='menu-items' to={"/"}>
            <ListItem button>
            <ListItemText primary={"Logout"} />
          </ListItem>
          </Link>
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

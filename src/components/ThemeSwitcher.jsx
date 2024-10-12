import { Button, Grid, Popover } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const themes = [
  { name: 'light', color: '#f0f0f0' }, 
  { name: 'dark', color: '#333' }, 
  { name: 'red', color: '#f44336' }, 
  { name: 'blue', color: '#2196f3' }, 
  { name: 'green', color: '#4caf50' }
];

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Open Popover anchored to the button
  };

  const handleClose = () => {
    setAnchorEl(null); // Close Popover
  };

  const handleThemeChange = (theme) => {
    dispatch(toggleTheme(theme));
    handleClose(); // Close Popover after theme selection
  };

  const open = Boolean(anchorEl);
  const id = open ? 'theme-switcher-popover' : undefined;

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClick}
        style={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        Change Theme
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Grid
          container
          direction="row" // Horizontal alignment
          spacing={2} // Space between buttons
          sx={{
            padding: 2,
            justifyContent: 'center', // Center-align the buttons in the row
          }}
        >
          {themes.map((theme) => (
            <Grid item key={theme.name}>
              <Button
                variant="contained"
                onClick={() => handleThemeChange(theme.name)}
                style={{
                  backgroundColor: theme.color,
                  borderRadius: '50%', // Circular shape
                  width: 40, // Circular button width
                  height: 40, // Circular button height
                  minWidth: 0, // Remove default button width
                  padding: 0, // No extra padding
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Popover>
    </div>
  );
};

export default ThemeSwitcher;

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
    setAnchorEl(event.currentTarget); 
  };

  const handleClose = () => {
    setAnchorEl(null); 
  };

  const handleThemeChange = (theme) => {
    dispatch(toggleTheme(theme));
    handleClose();
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
          direction="row" 
          spacing={2}
          sx={{
            padding: 2,
            justifyContent: 'center', 
          }}
        >
          {themes.map((theme) => (
            <Grid item key={theme.name}>
              <Button
                variant="contained"
                onClick={() => handleThemeChange(theme.name)}
                style={{
                  backgroundColor: theme.color,
                  borderRadius: '50%',
                  width: 40, 
                  height: 40,
                  minWidth: 0, 
                  padding: 0,
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

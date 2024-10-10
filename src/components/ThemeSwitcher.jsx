// src/components/ThemeSwitcher.js
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

const themes = ['light', 'dark', 'red', 'blue', 'yellow', 'green'];

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleThemeChange = (theme) => {
    dispatch(toggleTheme(theme));
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{ position: 'fixed', bottom: 20, right: 20 }}>
        Change Theme
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select a Theme</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {themes.map((theme) => (
              <Grid item xs={6} key={theme}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleThemeChange(theme)}
                  style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : theme === 'dark' ? '#333' : theme }}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </Button>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ThemeSwitcher;

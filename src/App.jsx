

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import ThemeSwitcher from './components/ThemeSwitcher';
import { selectTheme } from './redux/themeSlice';
import Routing from './routing/Routing';
const App = () => {
  const { loading } = useSelector(state => state.auth)
  const themeChoice = useSelector(selectTheme);

  const themes = {
    light: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(25, 118, 210, 0.85)' }, // Softened blue with opacity
        background: { default: '#f0f2f5' }, // Light gray background for a cleaner look
        text: { primary: '#333' }, // Darker text for better contrast
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: { main: 'rgba(144, 202, 249, 0.85)' }, // Softer light blue with opacity
        background: { default: '#1e1e1e' }, // Deep dark gray for modern dark theme
        text: { primary: '#e0e0e0' }, // Light gray text for readability on dark background
      },
    },
    red: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(244, 67, 54, 0.85)' }, // Softened red with opacity
        background: { default: '#ffebee' }, // Light red tint background for subtlety
        text: { primary: '#b71c1c' }, // Darker red text for better contrast
      },
    },
    blue: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(33, 150, 243, 0.85)' }, // Softened blue with opacity
        background: { default: '#e3f2fd' }, // Light blue tint background
        text: { primary: '#0d47a1' }, // Darker blue for better readability
      },
    },
    yellow: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(255, 235, 59, 0.85)' }, // Softened yellow with opacity
        background: { default: '#fffde7' }, // Light yellow tint for background
        text: { primary: '#fbc02d' }, // Medium yellow for contrast
      },
    },
    green: {
      palette: {
        mode: 'light',
        primary: { main: 'rgba(76, 175, 80, 0.85)' }, // Softened green with opacity
        background: { default: '#e8f5e9' }, // Light green tint for background
        text: { primary: '#1b5e20' }, // Dark green text for contrast
      },
    },
  };
  

  const theme = createTheme(themes[themeChoice] || themes.light);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
  
      <ThemeSwitcher />
      <div className=''>
       {loading &&  <div>Loading....</div>}
        <ToastContainer />
         <Routing /> 
      </div>
    </ThemeProvider>
  );
};

export default App;

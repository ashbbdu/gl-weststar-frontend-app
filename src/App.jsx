

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Loader from './components/Loader';
import ThemeSwitcher from './components/ThemeSwitcher';
import { themes } from './constants';
import { selectTheme } from './redux/themeSlice';
import Routing from './routing/Routing';
const App = () => {
  const { loading } = useSelector(state => state.auth)
  const themeChoice = useSelector(selectTheme);

   const theme = createTheme(themes[themeChoice] || themes.light);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
  
      <ThemeSwitcher />
      <div className=''>
       {loading &&  <Loader />}
        <ToastContainer />
         <Routing /> 
      </div>
    </ThemeProvider>
  );
};

export default App;

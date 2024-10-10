import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const PrivateRoute = ({ children }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)')
  // const { token } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  if (token !== null)
    return (
      <>
        <div className="d-flex w-100">
        <AppBar position="static">
        <Toolbar>
          {isSmallScreen && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Sidebar open={drawerOpen} toggleDrawer={toggleDrawer} />
          <div className="w-100 main-container">
            {" "}
            {children}
          </div>
        </div>
        {/* <div className="header-container">
          <Header />
        </div> */}
      </>
    );
  else return <Navigate to="/" />;
};

export default PrivateRoute;
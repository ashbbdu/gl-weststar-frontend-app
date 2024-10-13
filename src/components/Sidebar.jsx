import ColorLensIcon from '@mui/icons-material/ColorLens';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sideBarMenuItems } from "../constants";
import { toggleTheme } from "../redux/themeSlice";
import { logout } from "../services/authApi";

// Theme options for switching
const themes = [
  { name: 'light', color: '#f0f0f0' }, 
  { name: 'dark', color: '#333' }, 
  { name: 'red', color: '#f44336' }, 
  { name: 'blue', color: '#2196f3' }, 
  { name: 'green', color: '#4caf50' }
];

const Sidebar = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [activeItem, setActiveItem] = useState(() => {
    const savedItem = localStorage.getItem("activeSidebarItem");
    const matchedItem = sideBarMenuItems.find((item) => item.url === location.pathname);
    return savedItem ? savedItem : matchedItem?.id || sideBarMenuItems[0].id;
  });

  const [anchorEl, setAnchorEl] = useState(null); // For theme popover

  useEffect(() => {
    const matchedItem = sideBarMenuItems.find((item) => item.url === location.pathname);
    if (matchedItem) {
      setActiveItem(matchedItem.id);
    }
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem("activeSidebarItem", activeItem);
  }, [activeItem]);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  // Theme switcher popover handling
  const handleThemeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleThemeClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme) => {
    dispatch(toggleTheme(theme));
    handleThemeClose();
  };

  const themeOpen = Boolean(anchorEl);
  const themeId = themeOpen ? "theme-switcher-popover" : undefined;

  const drawerContent = (
    <div className="mt-10">
      <List
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          padding: 0,
        }}
      >
        <div>
          {sideBarMenuItems.map((res) => (
            <Link
              className="menu-items"
              key={res.id}
              to={res.url}
              onClick={() => handleItemClick(res.id)}
            >
              <ListItem
                button
                selected={activeItem === res.id}
                sx={{
                  padding: "16px",
                  backgroundColor:
                    activeItem === res.id
                      ? (theme) => theme.palette.primary.main
                      : "inherit",
                  color:
                    activeItem === res.id
                      ? (theme) => theme.palette.text.secondary
                      : "inherit",
                  "&:hover": {
                    backgroundColor:
                      activeItem === res.id
                        ? (theme) => theme.palette.primary.main
                        : (theme) => theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {<res.icon />}
                </ListItemIcon>
                <ListItemText primary={res.title} />
              </ListItem>
            </Link>
          ))}
        </div>
        <div>
          <ListItem button onClick={handleThemeClick}>
            <ListItemIcon sx={{ color: "primary.main" }}>
              <ColorLensIcon />
            </ListItemIcon>
            <ListItemText sx={{cursor : "pointer"}} primary={"Change Theme"} />
          </ListItem>

          {/* Theme Switcher Popover */}
          <Popover
            id={themeId}
            open={themeOpen}
            anchorEl={anchorEl}
            onClose={handleThemeClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Grid
              container
              direction="row"
              spacing={2}
              sx={{
                padding: 2,
                justifyContent: "center",
              }}
            >
              {themes.map((theme) => (
                <Grid item key={theme.name}>
                  <Button
                    variant="contained"
                    onClick={() => handleThemeChange(theme.name)}
                    style={{
                      backgroundColor: theme.color,
                      borderRadius: "50%",
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

          {/* Logout Button */}
          <Link onClick={handleLogout} className="menu-items" to={"/"}>
            <ListItem button>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </Link>
        </div>
      </List>
    </div>
  );

  return (
    <div className="sidebar">
      <Drawer
        anchor="left"
        open={open || !isSmallScreen}
        onClose={toggleDrawer(false)}
        variant={isSmallScreen ? "temporary" : "persistent"}
        sx={{
          "& .MuiDrawer-paper": {
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

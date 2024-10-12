import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sideBarMenuItems } from "../constants";
import { logout } from "../services/authApi";

const Sidebar = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [activeItem, setActiveItem] = useState(sideBarMenuItems[0].id);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const handleItemClick = (id) => {
    setActiveItem(id); 
  };

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
                  padding : "16px",
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

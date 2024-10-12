import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sideBarMenuItems } from "../constants";
import { logout } from "../services/authApi";

const Sidebar = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // To track current URL
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  // Get the saved active item from localStorage or use the current URL's path
  const [activeItem, setActiveItem] = useState(() => {
    const savedItem = localStorage.getItem("activeSidebarItem");
    const matchedItem = sideBarMenuItems.find((item) => item.url === location.pathname);
    return savedItem ? savedItem : matchedItem?.id || sideBarMenuItems[0].id;
  });

  // Set active item on first render based on the current route
  useEffect(() => {
    const matchedItem = sideBarMenuItems.find((item) => item.url === location.pathname);
    if (matchedItem) {
      setActiveItem(matchedItem.id);
    }
  }, [location.pathname]); // Update active item whenever the URL changes

  // Save activeItem to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("activeSidebarItem", activeItem);
  }, [activeItem]);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const handleItemClick = (id) => {
    setActiveItem(id); // Update the active item state
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
              onClick={() => handleItemClick(res.id)} // Call handleItemClick when clicked
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

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sideBarMenuItems } from "../constants";
import { logout } from "../services/authApi";
const Sidebar = ({ open, toggleDrawer }) => {
  const firstName = "Ashish";
  const lastName ="Srivastava"
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:600px)"); //

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const drawerContent = (
    <div className="mt-10">
    
      <List style={{display : "flex" , flexDirection : "column" , justifyContent :  "space-between" , height :  "100vh"}}>
        <div>
        {sideBarMenuItems.map((res) => (
          <Link className="menu-items" key={res.id} to={res.url}>
            <ListItem button>
              <ListItemIcon sx={{color : "primary.main"}}>{<res.icon />}</ListItemIcon>
              <ListItemText primary={res.title} />
            </ListItem>
          </Link>
        ))}
      </div>
        {/* <Divider /> */}
        <div>
        <Link onClick={handleLogout} className="menu-items" to={"/"}>
          <ListItem button>
            <ListItemIcon sx={{color : "primary.main"}}>{<ExitToAppIcon />}</ListItemIcon>
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

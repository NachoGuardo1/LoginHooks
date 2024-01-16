import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

export const AvatarMenuUser = () => {
  const { userData, userLogged, onLogout } = useContext(authContext);
  const navigate = useNavigate();

  // MENUUSER
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <Avatar
          sx={{
            width: { xs: 24, md: 30 },
            height: { xs: 24, md: 30 },
            bgcolor: blue[700],
          }}
        >
          {userLogged ? (
            <Typography variant="body1" textAlign="center">
              {userData.nombre.slice(0, 1)}
              {userData.apellido.slice(0, 1)}
            </Typography>
          ) : null}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {userLogged ? (
          <Box>
            <MenuItem onClick={handleClose}>
              <Typography variant="caption" fontWeight={600}>
                {userData.nombre + " " + userData.apellido}
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" sx={{ mr: 1 }} />
                Settings
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon onClick={onLogout}>
                <Logout fontSize="small" sx={{ mr: 1 }} />
                Logout
              </ListItemIcon>
            </MenuItem>
          </Box>
        ) : (
          <MenuItem onClick={handleClose}>
            <ListItemIcon onClick={() => navigate("/login")}>
              <Logout fontSize="small" sx={{ mr: 1 }} />
              Login
            </ListItemIcon>
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

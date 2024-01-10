import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { productsContext } from "../context/ProductsContext";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DialogCart } from "./DialogCart";

export const NavBarApp = () => {
  const navigate = useNavigate();
  const { userData, userLogged, onLogout } = useContext(authContext);
  const { favs } = useContext(productsContext);

  // MENUUSER
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //DRAWER
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" color="inherit" sx={{ marginBottom: 3 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* BOX lg */}
            <Box
              sx={{
                width: "100%",
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              }}
            >
              {/* LOGO */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AdbIcon sx={{ mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
              </Box>
              {/* LINKS */}
              <Box>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/link1"
                  sx={{
                    mr: 2,
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "text.primary",
                    textDecoration: "none",
                  }}
                >
                  Link 1
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/link2"
                  sx={{
                    mr: 2,
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "text.primary",
                    textDecoration: "none",
                  }}
                >
                  Link 2
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/link3"
                  sx={{
                    mr: 2,
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "text.primary",
                    textDecoration: "none",
                  }}
                >
                  Link3
                </Typography>
              </Box>
              {/* ACTIONS */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleClick}
                >
                  <Avatar sx={{ width: 24, height: 24 }}>
                    {userLogged
                      ? `  ${userData.nombre.slice(
                          0,
                          1
                        )}${userData.apellido.slice(0, 1)}`
                      : null}
                  </Avatar>
                </IconButton>
                {favs.length !== 0 ? (
                  <IconButton
                    onClick={() => navigate("/favs")}
                    size="small"
                    edge="start"
                    color="inherit"
                  >
                    <Badge variant="dot" color="secondary">
                      <FavoriteIcon fontSize="small" />
                    </Badge>
                  </IconButton>
                ) : (
                  <IconButton
                    disabled
                    size="small"
                    edge="start"
                    color="inherit"
                  >
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                )}
                <DialogCart />
              </Box>
            </Box>
            {/* BOX SM */}
            <Box
              sx={{
                width: "100%",
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* MENU */}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              {/* LOGO */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AdbIcon sx={{ mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  LOGO
                </Typography>
              </Box>
              {/* ACTIONS */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleClick}
                >
                  <Avatar sx={{ width: 24, height: 24 }} />
                </IconButton>
                {favs.length !== 0 ? (
                  <IconButton
                    onClick={() => navigate("/favs")}
                    size="small"
                    edge="start"
                    color="inherit"
                  >
                    <Badge variant="dot" color="secondary">
                      <FavoriteIcon fontSize="small" />
                    </Badge>
                  </IconButton>
                ) : (
                  <IconButton
                    disabled
                    size="small"
                    edge="start"
                    color="inherit"
                  >
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                )}
                <DialogCart />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
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
              <Avatar sx={{ mr: 1, width: 24, height: 24 }} /> Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemButton onClick={onLogout}>
                <Logout fontSize="small" />
                Logout
              </ListItemButton>
            </MenuItem>
          </Box>
        ) : (
          <MenuItem onClick={handleClose}>
            <ListItemButton onClick={() => navigate("/login")}>
              <Logout fontSize="small" />
              Login
            </ListItemButton>
          </MenuItem>
        )}
      </Menu>
      <Drawer
        anchor="left"
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: { xs: 150, sm: 200 } }}>
          <ListItem>Link 1</ListItem>
          <ListItem>Link 2</ListItem>
          <ListItem>Link 3</ListItem>
        </List>
      </Drawer>
    </>
  );
};

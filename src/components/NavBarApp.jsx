import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { Badge, Divider, ListItemButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logout from "@mui/icons-material/Logout";
import { productsContext } from "../context/ProductsContext";
import { DialogCart } from "./DialogCart";

export const NavBarApp = () => {
  const navigate = useNavigate();
  const { userData, userLogged, onLogout } = React.useContext(authContext);
  const { favs, cart } = React.useContext(productsContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  //Handle Nav
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  //Handle user
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            {/* LINKS XS */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Link 1</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Link 2</Typography>
                </MenuItem>{" "}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Link 3</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            {/* LINKS LG */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Link 1
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Link 2
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Link 3
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar variant="rounded" sx={{ width: 32, height: 32 }}>
                    {userLogged
                      ? `  ${userData.nombre.slice(
                          0,
                          1
                        )}${userData.apellido.slice(0, 1)}`
                      : null}
                  </Avatar>
                </IconButton>
                {/* BTN FAV */}
                {favs.length !== 0 ? (
                  <IconButton onClick={() => navigate("/favs")}>
                    <Badge variant="dot" color="secondary">
                      <FavoriteIcon fontSize="small" />
                    </Badge>
                  </IconButton>
                ) : (
                  <IconButton disabled>
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                )}
                {/* BTN CART */}
                <DialogCart />
              </Tooltip>
              {/* MENU USER */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {!userLogged ? (
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Log in
                    </Button>
                  </MenuItem>
                ) : (
                  <Box>
                    <MenuItem>
                      <Typography variant="body1">
                        {userData.nombre}
                        {userData.apellido}
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseUserMenu}>
                      <ListItemButton
                        onClick={() => {
                          onLogout();
                        }}
                      >
                        <Logout fontSize="small" />
                        Logout
                      </ListItemButton>
                    </MenuItem>
                  </Box>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

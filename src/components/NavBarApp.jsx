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
import { HeaderHome } from "./HeaderHome";
import { SearchNav } from "./SearchNav";
import SearchIcon from "@mui/icons-material/Search";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import DiamondIcon from "@mui/icons-material/Diamond";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { DrawerSearcMob } from "./DrawerSearcMob";

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
  //SEARCHMOBILE
  const [search, setSearch] = useState(null);
  const handleSearch = () => {
    setSearch(!search);
  };

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
                <SearchNav />
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
              <Box>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 0.5 }}
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  onClick={handleSearch}
                >
                  <SearchIcon fontSize="small" />
                </IconButton>
              </Box>
              {/* LOGO */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
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
        <HeaderHome />
        {search && <DrawerSearcMob />}
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
          <ListItem>
            <Typography variant="h6" fontWeight={650} fontSize="18px">
              MENU
            </Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <IconButton>
              <WomanIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" fontWeight={600}>
                WOMENS
              </Typography>
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <ManIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" fontWeight={600}>
                MENS
              </Typography>
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <DiamondIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" fontWeight={600}>
                JEWELERY
              </Typography>
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <PhoneIphoneIcon fontSize="small" sx={{ mr: 1 }} />
              <Typography variant="body2" fontWeight={600}>
                ELECTRONICS
              </Typography>
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

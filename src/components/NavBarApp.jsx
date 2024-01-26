import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { DialogCart } from "./DialogCart";
import { HeaderHome } from "./HeaderHome";
import SearchIcon from "@mui/icons-material/Search";
import { DrawerSearcMob } from "./DrawerSearcMob";
import { AvatarMenuUser } from "./AvatarMenuUser";
import { MenuDrawerLinks } from "./DrawerLinks";
import { FavsLink } from "./FavsLink";
import { Outlet } from "react-router-dom";
import { SearcApp } from "./SearcApp";

export const NavBarApp = () => {
  //SEARCHMOBILE
  const [search, setSearch] = useState(null);
  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <AppBar position="sticky" color="inherit">
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
                <StorefrontIcon sx={{ mr: 1 }} />
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
                  U-STORE
                </Typography>
              </Box>
              {/* SEARCH */}
              <Box>
                <SearcApp />
              </Box>
              {/* ACTIONS */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <AvatarMenuUser />
                <FavsLink />
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
                <MenuDrawerLinks />
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
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  U-STORE
                </Typography>
              </Box>
              {/* ACTIONS */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <AvatarMenuUser />
                <FavsLink />
                <DialogCart />
              </Box>
            </Box>
          </Toolbar>
        </Container>
        <HeaderHome />
        {search && <DrawerSearcMob />}
      </AppBar>
      <Outlet />
    </>
  );
};

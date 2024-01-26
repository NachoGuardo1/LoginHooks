import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider, IconButton, Menu } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";

export const FilterMenu = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        display: "flex",
        justifyContent: "end",
        marginRight: 3,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Order By
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </ListSubheader>
      }
    >
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom" }}
        open={openMenu}
        onClose={handleClose}
      >
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Price" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Highest prices first" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Lowest prices first" />
            </ListItemButton>{" "}
          </List>
        </Collapse>
        <Divider />
        <ListItemButton onClick={() => setOpen2(!open2)}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Rating" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Top-rated first" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Lowest-rated first" />
            </ListItemButton>{" "}
          </List>
        </Collapse>
        <Divider />
      </Menu>
    </List>
  );
};

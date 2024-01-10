import {
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import React, { useContext, useState } from "react";
import { productsContext } from "../context/ProductsContext";
import { TableCart } from "./TableCart";
import CloseIcon from "@mui/icons-material/Close";

export const DialogCart = () => {
  const { cart, total } = useContext(productsContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3" fontSize="20px" fontWeight={600}>
            My Shopping Cart
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ paddingX: "3px" }}>
          <DialogContentText>
            <TableCart />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Typography variant="caption" fontWeight={600}>
            Grand Total: ${total.toFixed(2)}
          </Typography>
        </DialogActions>
      </Dialog>

      {cart.length !== 0 ? (
        <IconButton onClick={handleClickOpen}>
          <Badge badgeContent={cart.length} color="primary">
            <LocalMallIcon fontSize="small" />
          </Badge>
        </IconButton>
      ) : (
        <IconButton disabled>
          <LocalMallIcon fontSize="small" />
        </IconButton>
      )}
    </>
  );
};

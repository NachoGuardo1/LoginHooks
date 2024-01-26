import {
  Badge,
  Box,
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
import { DialogConfirmation } from "./DialogConfirmation";

export const DialogCart = () => {
  const { cart, total, cleanCart } = useContext(productsContext);
  const [open, setOpen] = useState(false);
  const [openClean, setOpenClean] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          My Shopping Cart
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {cart.length > 0 ? (
          <>
            <DialogContent sx={{ paddingX: "3px" }}>
              <DialogContentText>
                <TableCart />
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
            >
              <Typography variant="caption" fontWeight={600}>
                Grand Total: ${total.toFixed(2)}
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setOpenClean(true)}
                >
                  Empty Cart
                </Button>
                <DialogConfirmation
                  title="Are you sure?"
                  functionConfirm={cleanCart}
                  openClean={openClean}
                  setOpenClean={setOpenClean}
                />
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    alert("Page in maintenance");
                  }}
                >
                  Proceed to pay
                </Button>
              </Box>
            </DialogActions>
          </>
        ) : (
          <Typography variant="body2" textAlign="center" gutterBottom>
            Your cart is empty.
          </Typography>
        )}
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

import { Badge, Dialog, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext, useState } from "react";
import { productsContext } from "../context/ProductsContext";

export const DialogCart = () => {
  const { cart } = useContext(productsContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        Carrito
      </Dialog>
      {cart.length !== 0 ? (
        <IconButton onClick={handleClickOpen}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </IconButton>
      ) : (
        <IconButton disabled>
          <ShoppingCartIcon fontSize="small" />
        </IconButton>
      )}
    </>
  );
};

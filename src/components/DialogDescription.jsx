import { Dialog, Fab } from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";

export const DialogDescription = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Fab size="small" onClick={handleClickOpen}>
        <Visibility size="small" />
      </Fab>
      <Dialog onClose={handleClose} open={open}>
        {product.description}
      </Dialog>
    </>
  );
};

import { Box, Dialog, Fab, Paper, Typography } from "@mui/material";
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
      <Dialog onClose={handleClose} open={open} component={Paper}>
        <Box
          sx={{
            padding: 2,
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
          >
            <img src={product.image} style={{ width: 300, height: 300 }} />
          </Box>
          <Typography
            variant="h2"
            fontSize="25px"
            fontWeight={600}
            textAlign="start"
            color="text.primary"
            gutterBottom
          >
            {product.title}
          </Typography>
          <Typography
            variant="body1"
            fontSize="13px"
            fontWeight={500}
            textAlign="start"
            color="text.secondary"
            gutterBottom
          >
            CATEGORY: {product.category}
          </Typography>
          <Typography
            variant="h1"
            fontSize="30px"
            fontWeight={600}
            color="error"
            textAlign="start"
            gutterBottom
          >
            ${product.price}
          </Typography>
          <Typography
            variant="body1"
            fontSize="14px"
            fontWeight={300}
            textAlign="start"
            color="text.primary"
          >
            {product.description}
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { ProductsService } from "../services/ProductsService";
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Dialog,
  Fab,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Visibility from "@mui/icons-material/Visibility";

export const ProductList = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const response = await ProductsService.GET();
    setProductos(response.data);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justifyContent="center" gap={4} marginTop={4}>
      {productos.map((product) => (
        <Grid item xs={8} sm={5} md={4} lg={3}>
          <Card key={product.id} sx={{ maxHeight: 450 }}>
            {/* BTN FAV Y MORE */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "end",
                margin: 1,
              }}
            >
              {/* <Fab size="small" color="error">
                <FavoriteIcon size="small" />
              </Fab> */}
              <Fab size="small">
                <FavoriteBorderIcon color="error" size="small" />
              </Fab>
              <Fab size="small" onClick={handleClickOpen}>
                <Visibility size="small" />
              </Fab>
            </Box>
            {/* IMAGEN */}
            <CardMedia
              component="img"
              sx={{ height: 200, width: "100%", objectFit: "contain" }}
              image={product.image}
            />
            <Grid container padding={2}>
              {/* TITULO Y PRECIO */}
              <Grid item xs={10}>
                <Typography
                  variant="h3"
                  textAlign="start"
                  color="text.primary"
                  fontSize="14px"
                  marginBottom={3}
                >
                  {product.title}
                </Typography>
                <Typography variant="body1" color="error">
                  ${product.price}
                </Typography>
              </Grid>
              {/* CARRITO  */}
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                }}
              >
                <IconButton aria-label="share">
                  <Badge badgeContent={3}>
                    <AddShoppingCartIcon color="success" />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
          </Card>
          <Collapse timeout="auto" unmountOnExit>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Collapse>
          <Dialog onClose={handleClose} open={open}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            labore aut similique, mollitia quia quas voluptate nobis animi ipsam
            assumenda odit, explicabo dolor! Harum odio incidunt recusandae
            fuga? Deserunt, assumenda.
          </Dialog>
        </Grid>
      ))}
    </Grid>
  );
};

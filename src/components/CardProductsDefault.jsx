import React, { useContext } from "react";
import {
  Badge,
  Box,
  Card,
  CardMedia,
  Fab,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { productsContext } from "../context/ProductsContext";
import { DialogDescription } from "./DialogDescription";
import { RatingProduct } from "./RatingProduct";

export const CardProductsDefault = ({ product }) => {
  const { addToCart, removeFromCart, cart, favs, addToFavs, removeFromFavs } =
    useContext(productsContext);
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };
  return (
    <Card sx={{ maxHeight: 450 }}>
      {/* BTN FAV Y MORE */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "end",
          margin: 1,
        }}
      >
        {favs.find((item) => item._id === product._id) ? (
          <Fab
            size="small"
            color="error"
            onClick={() => removeFromFavs(product._id)}
          >
            <FavoriteIcon size="small" />
          </Fab>
        ) : (
          <Fab size="small" onClick={() => addToFavs(product)}>
            <FavoriteBorderIcon color="error" size="small" />
          </Fab>
        )}
        <DialogDescription product={product} />
      </Box>
      {/* IMAGEN */}
      <CardMedia
        component="img"
        sx={{ height: 200, width: "100%", objectFit: "contain" }}
        image={product.image}
      />
      {/* TITULO Y PRECIO */}
      <Grid container padding={2}>
        <Grid item xs={10}>
          <Typography
            variant="h3"
            textAlign="start"
            color="text.secondary"
            fontSize="14px"
            fontWeight={600}
            marginBottom={1}
          >
            {truncateTitle(product.title, 20)}
          </Typography>
          <RatingProduct marginBottom={1} rate={product.rating} />
          <Typography
            variant="body1"
            color="error"
            fontSize="14px"
            fontWeight={600}
          >
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
          {cart.find((item) => item._id === product._id) ? (
            <IconButton
              aria-label="share"
              onClick={() => removeFromCart(product._id)}
            >
              <Badge>
                <RemoveShoppingCartIcon color="error" />
              </Badge>
            </IconButton>
          ) : (
            <IconButton aria-label="share" onClick={() => addToCart(product)}>
              <Badge>
                <AddShoppingCartIcon color="success" />
              </Badge>
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

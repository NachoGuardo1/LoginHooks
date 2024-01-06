import React, { useContext, useEffect, useState } from "react";
import { ProductsService } from "../services/ProductsService";
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

import { useNavigate } from "react-router-dom";
import { ProductsReducer } from "../reducers/ProductsReducer";
import { productsContext } from "../context/ProductsContext";
import { DialogDescription } from "./DialogDescription";

export const ProductList = () => {
  const [state, dispatch] = ProductsReducer();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cart, favs, addToFavs, removeFromFavs } =
    useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await ProductsService.GET();
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      navigate("/error");
    }
  };

  return (
    <Grid container justifyContent="center" gap={4} marginTop={4}>
      {state.loading
        ? "loading.."
        : state.products.map((product) => (
            <Grid item xs={8} sm={5} md={4} lg={3} key={product.id}>
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
                  {favs.find((item) => item.id === product.id) ? (
                    <Fab
                      size="small"
                      color="error"
                      onClick={() => removeFromFavs(product.id)}
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
                <Grid container padding={2}>
                  {/* TITULO Y PRECIO */}
                  <Grid item xs={10}>
                    <Typography
                      variant="h3"
                      textAlign="start"
                      color="text.secondary"
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
                    {cart.find((item) => item.id === product.id) ? (
                      <IconButton
                        aria-label="share"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Badge>
                          <RemoveShoppingCartIcon color="error" />
                        </Badge>
                      </IconButton>
                    ) : (
                      <IconButton
                        aria-label="share"
                        onClick={() => addToCart(product)}
                      >
                        <Badge>
                          <AddShoppingCartIcon color="success" />
                        </Badge>
                      </IconButton>
                    )}
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
    </Grid>
  );
};

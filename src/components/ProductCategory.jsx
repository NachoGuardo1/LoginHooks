import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsService } from "../services/ProductsService";
import {
  Badge,
  Box,
  Card,
  CardMedia,
  Container,
  Fab,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { SkeletonCard } from "./SkeletonCard";
import { DialogDescription } from "./DialogDescription";
import { productsContext } from "../context/ProductsContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { RatingProduct } from "./RatingProduct";

export const ProductCategory = () => {
  const { addToCart, removeFromCart, cart, favs, addToFavs, removeFromFavs } =
    useContext(productsContext);
  const { category } = useParams();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductCategory();
  }, [category]);
  const getProductCategory = async () => {
    try {
      const resp = await ProductsService.GET_IN_CATEGORIES(category);
      setProducts(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };
  return (
    <Grid container justifyContent="center" gap={2} marginTop={3}>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        : products.map((product) => (
            <Grid item xs={10} sm={5.5} md={3.5} lg={2.5} key={product.id}>
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
                    <RatingProduct marginBottom={1} />
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

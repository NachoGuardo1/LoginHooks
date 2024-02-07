import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsService } from "../services/ProductsService";
import {
  Badge,
  Box,
  Card,
  CardMedia,
  Divider,
  Fab,
  Grid,
  IconButton,
  Pagination,
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
import { ProductsReducer } from "../reducers/ProductsReducer";
import { FilterMenu } from "./FilterMenu";

export const ProductCategory = () => {
  const { addToCart, removeFromCart, cart, favs, addToFavs, removeFromFavs } =
    useContext(productsContext);
  const { category } = useParams();
  const [state, dispatch] = ProductsReducer();
  const navigate = useNavigate();

  const [term, setTerm] = useState("");
  const [direction, setDirection] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalProds, setTotalProds] = useState(0);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const productsQuantityPage = 4;
  const skip = (currentPage - 1) * productsQuantityPage;
  const limit = productsQuantityPage;
  const totalPages = Math.ceil(totalProds / productsQuantityPage);

  useEffect(() => {
    getProductCategory();
  }, [category, term, direction, currentPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const getProductCategory = async () => {
    try {
      const resp = await ProductsService.GET_IN_CATEGORIES(
        category,
        skip,
        limit,
        term,
        direction
      );
      const { total, products } = resp.data;
      setTotalProds(total);
      dispatch({ type: "FETCH_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      navigate("/error");
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  const handleTerm = (term, direction) => {
    setTerm(term);
    setDirection(direction);
    setCurrentPage(1);
  };

  return (
    <>
      <Box
        sx={{
          padding: 3,
          width: "100%",
          height: "auto",
          textAlign: "start",
        }}
      >
        <Divider textAlign="left">
          <Typography
            color={"text.secondary"}
            fontWeight={550}
            fontFamily={"monospace"}
          >
            {category.toUpperCase()}{" "}
          </Typography>
        </Divider>
        <Box display="flex" justifyContent="end">
          <FilterMenu handleTerm={handleTerm} />
        </Box>
      </Box>
      <Grid container justifyContent="center" gap={2} marginTop={3}>
        {state.loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : state.products.map((product) => (
              <Grid item xs={5.5} sm={5.5} md={3.5} lg={2.5} key={product._id}>
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
                    sx={{
                      height: { xs: 100, sm: 200 },
                      width: "100%",
                      objectFit: "contain",
                    }}
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
      <Box display="flex" justifyContent="center" marginY={4}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </>
  );
};

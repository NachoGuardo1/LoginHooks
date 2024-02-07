import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsService } from "../services/ProductsService";
import { Box, Button, Container, Typography } from "@mui/material";
import { SkeletonCard } from "./SkeletonCard";
import { RatingProduct } from "./RatingProduct";
import { productsContext } from "../context/ProductsContext";
import { ProductsReducer } from "../reducers/ProductsReducer";

export const ProductsDetails = () => {
  const { productId } = useParams();
  const [state, dispatch] = ProductsReducer();
  const { cart, addToCart, removeFromCart } = useContext(productsContext);
  const navigate = useNavigate();
  useEffect(() => {
    getProductById();
  }, [productId]);
  const getProductById = async () => {
    try {
      const resp = await ProductsService.GET_BY_ID(productId);
      dispatch({ type: "FETCH_SUCCESS", payload: resp.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      navigate("/error");
    }
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      {state.loading ? (
        <SkeletonCard />
      ) : (
        <Box
          sx={{
            padding: 5,
            maxWidth: "md",
            display: { xs: "block", md: "flex" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
          >
            <img
              src={state.products.image}
              style={{
                width: { xs: 150, sm: 300 },
                height: 300,
                objectFit: "contain",
              }}
            />
          </Box>
          <Box padding={3}>
            <Typography
              variant="h2"
              fontSize="25px"
              fontWeight={600}
              textAlign="start"
              color="text.primary"
              gutterBottom
            >
              {state.products.title}
            </Typography>
            <Typography
              variant="body1"
              fontSize="13px"
              fontWeight={500}
              textAlign="start"
              color="text.secondary"
              gutterBottom
            >
              CATEGORY: {state.products.category}
            </Typography>
            <Typography
              variant="h1"
              fontSize="30px"
              fontWeight={600}
              color="error"
              textAlign="start"
              gutterBottom
            >
              ${state.products.price}
            </Typography>
            <RatingProduct rate={state.products.rating} />
            <Typography
              variant="body1"
              fontSize="14px"
              fontWeight={300}
              textAlign="start"
              color="text.primary"
              gutterBottom
            >
              {state.products.description}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "end", mt: 3 }}>
              {cart.find((item) => item._id === state.products._id) ? (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeFromCart(state.products._id)}
                >
                  REMOVE FROM CART
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => addToCart(state.products)}
                >
                  ADD TO CART
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

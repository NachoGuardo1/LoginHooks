import React, { useEffect } from "react";
import { ProductsService } from "../services/ProductsService";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductsReducer } from "../reducers/ProductsReducer";
import { SkeletonCard } from "./SkeletonCard";
import { CardProductsDefault } from "./CardProductsDefault";

import { BestSellers } from "./BestSellers";

export const ProductList = () => {
  const [state, dispatch] = ProductsReducer();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await ProductsService.GET_LIMIT(4);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.products });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      navigate("/error");
    }
  };

  return (
    <>
      <Divider textAlign="left" sx={{ marginY: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          All products
          <Button onClick={() => navigate("/allprods")}>
            <Typography
              variant="caption"
              sx={{
                ml: 3,
                fontFamily: "monospace",
                fontWeight: 550,
                color: "inherit",
              }}
            >
              See All
            </Typography>
          </Button>
        </Typography>
      </Divider>
      <Grid container justifyContent="center" gap={2} marginTop={3}>
        {state.loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : state.products.map((prod) => (
              <Grid item xs={5.5} sm={5.5} md={3.5} lg={2.5} key={prod._id}>
                <CardProductsDefault product={prod} />
              </Grid>
            ))}
      </Grid>
      <BestSellers />
    </>
  );
};

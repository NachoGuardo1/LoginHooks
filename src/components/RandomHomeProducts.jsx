import React, { useEffect, useState } from "react";
import { CardProductsDefault } from "./CardProductsDefault";
import { useNavigate } from "react-router-dom";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { SkeletonCard } from "./SkeletonCard";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ProductsService } from "../services/ProductsService";
import { ProductsReducer } from "../reducers/ProductsReducer";

export const RandomHomeProducts = () => {
  const [state, dispatch] = ProductsReducer();

  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const resp = await ProductsService.GET_SORT_PRODUCTS();
      dispatch({ type: "FETCH_SUCCESS", payload: resp.data });
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
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Top Sells
          <IconButton disabled>
            <StarBorderIcon />
          </IconButton>
        </Typography>
      </Divider>
      <Grid container justifyContent="center" gap={2} marginTop={3}>
        {state.loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : state.products.slice(4, 8).map((prod) => (
              <Grid item xs={10} sm={5.5} md={3.5} lg={2.5} key={prod.id}>
                <CardProductsDefault product={prod} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

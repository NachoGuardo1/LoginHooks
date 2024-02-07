import React, { useEffect } from "react";
import { CardProductsDefault } from "./CardProductsDefault";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { SkeletonCard } from "./SkeletonCard";
import { ProductsReducer } from "../reducers/ProductsReducer";
import { ProductsService } from "../services/ProductsService";
import { useNavigate } from "react-router-dom";

export const BestSellers = () => {
  const [state, dispatch] = ProductsReducer();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await ProductsService.GET_SORT_TERM("rating", "0", "4");
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
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Best sellers
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
          : state.products.map((prod) => (
              <Grid item xs={5.5} sm={5.5} md={3.5} lg={2.5} key={prod._id}>
                <CardProductsDefault product={prod} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

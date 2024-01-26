import React, { useEffect, useState } from "react";
import { ProductsService } from "../services/ProductsService";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductsReducer } from "../reducers/ProductsReducer";
import { SkeletonCard } from "./SkeletonCard";
import { CardProductsDefault } from "./CardProductsDefault";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { BestSellers } from "./BestSellers";

export const ProductList = () => {
  const [state, dispatch] = ProductsReducer();
  const navigate = useNavigate();
  const [expandAll, setExpandAll] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await ProductsService.GET();
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
          All products
          <IconButton onClick={() => setExpandAll(!expandAll)}>
            {expandAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Typography>
      </Divider>
      <Grid container justifyContent="center" gap={2} marginTop={3}>
        {state.loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : expandAll
          ? state.products.map((prod) => (
              <Grid item xs={10} sm={5.5} md={3.5} lg={2.5} key={prod._id}>
                <CardProductsDefault product={prod} />
              </Grid>
            ))
          : state.products.slice(0, 4).map((prod) => (
              <Grid item xs={10} sm={5.5} md={3.5} lg={2.5} key={prod._id}>
                <CardProductsDefault product={prod} />
              </Grid>
            ))}
      </Grid>
      <BestSellers />
    </>
  );
};

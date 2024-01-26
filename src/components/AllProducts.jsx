import React, { useEffect, useState } from "react";
import { ProductsService } from "../services/ProductsService";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductsReducer } from "../reducers/ProductsReducer";
import { SkeletonCard } from "./SkeletonCard";
import { CardProductsDefault } from "./CardProductsDefault";
import { FilterMenu } from "./FilterMenu";
import Pagination from "@mui/material/Pagination";

export const AllProducts = () => {
  const [state, dispatch] = ProductsReducer();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalProds, setTotalProds] = useState(0);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  const productsQuantityPage = 4;
  const skip = (currentPage - 1) * productsQuantityPage;
  const limit = productsQuantityPage;
  const totalPages = totalProds / productsQuantityPage;

  const getProducts = async () => {
    try {
      const response = await ProductsService.GET_PAGINATION(skip, limit);
      const { total, products } = response.data;
      setTotalProds(total);
      dispatch({ type: "FETCH_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      navigate("/error");
    }
  };
  return (
    <>
      <Divider textAlign="left" sx={{ marginTop: 3 }}>
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
        </Typography>
      </Divider>
      <Box display="flex" justifyContent="end">
        <FilterMenu />
      </Box>
      <Grid container justifyContent="center" gap={2} marginTop={3}>
        {state.loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : state.products.map((prod) => (
              <Grid item xs={10} sm={5.5} md={3.5} lg={2.5} key={prod._id}>
                <CardProductsDefault product={prod} />
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

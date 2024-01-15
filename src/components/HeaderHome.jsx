import React, { useEffect } from "react";

import { Box, IconButton, Skeleton, Typography } from "@mui/material";
import { ProductsService } from "../services/ProductsService";
import { CategoriesReducer } from "../reducers/CategoriesReducer";
import { useNavigate } from "react-router-dom";

export const HeaderHome = () => {
  const [state, dispatch] = CategoriesReducer();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const response = await ProductsService.GET_CATEGORIES();
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
      navigate("/error");
    }
  };
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "space-around",
      }}
    >
      {state.loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", width: 100 }}
              key={index}
            />
          ))
        : state.categories.map((category, index) => (
            <IconButton
              key={index}
              onClick={() => navigate(`/category/${category.toString()}`)}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                sx={{ fontFamily: "monospace" }}
              >
                {category.toUpperCase()}
              </Typography>
            </IconButton>
          ))}
    </Box>
  );
};

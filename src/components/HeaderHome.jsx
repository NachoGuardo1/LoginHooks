import React, { useEffect, useState } from "react";

import { Box, Button, Skeleton, Tab, Tabs } from "@mui/material";
import { ProductsService } from "../services/ProductsService";
import { CategoriesReducer } from "../reducers/CategoriesReducer";
import { useNavigate } from "react-router-dom";

export const HeaderHome = () => {
  const [state, dispatch] = CategoriesReducer();
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        display: { xs: "none", md: "block" },
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Box
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        width="100%"
        display="flex"
        justifyContent="center"
        gap={5}
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
              <Button
                key={index}
                onClick={() => navigate(`/category/${category.toString()}`)}
                sx={{
                  fontSize: "14px",
                  fontWeight: 550,
                  color: "text.primary",
                  fontFamily: "monospace",
                }}
              >
                {category}
              </Button>
            ))}
      </Box>
    </Box>
  );
};

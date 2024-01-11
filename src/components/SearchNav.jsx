import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductsReducer } from "../reducers/ProductsReducer";
import { ProductsService } from "../services/ProductsService";
import { useNavigate } from "react-router-dom";

export const SearchNav = () => {
  const [value, setValue] = useState(null);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await ProductsService.GET();
      setOptions(response.data);
    } catch (error) {
      navigate("/error");
      console.log(error);
    }
  };
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <Stack>
      <Autocomplete
        size="small"
        sx={{
          width: 300,
        }}
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        options={options}
        getOptionLabel={(option) => truncateTitle(option.title, 25)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

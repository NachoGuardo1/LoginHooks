import { Autocomplete, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductsService } from "../services/ProductsService";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

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

  const handleChange = (e, newValue) => {
    setValue(newValue);
    navigate(`/details/${newValue.id.toString()}`);
  };

  return (
    <Stack>
      <Autocomplete
        size="small"
        sx={{
          width: 300,
        }}
        value={value}
        onChange={handleChange}
        options={options}
        getOptionLabel={(option) => truncateTitle(option.title, 25)}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
};

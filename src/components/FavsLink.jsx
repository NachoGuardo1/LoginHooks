import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { Badge, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

export const FavsLink = () => {
  const { favs } = useContext(productsContext);
  const navigate = useNavigate();

  return (
    <>
      {favs.length !== 0 ? (
        <IconButton
          onClick={() => navigate("/favs")}
          size="small"
          edge="start"
          color="inherit"
        >
          <Badge variant="dot" color="primary">
            <FavoriteIcon fontSize="small" />
          </Badge>
        </IconButton>
      ) : (
        <IconButton disabled size="small" edge="start" color="inherit">
          <FavoriteIcon fontSize="small" />
        </IconButton>
      )}
    </>
  );
};

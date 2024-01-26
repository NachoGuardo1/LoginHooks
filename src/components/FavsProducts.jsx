import React, { useContext } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

import { productsContext } from "../context/ProductsContext";
import { CardProductsDefault } from "./CardProductsDefault";
import { useNavigate } from "react-router-dom";

export const FavsProducts = () => {
  const { favs } = useContext(productsContext);
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" gap={2} marginTop={3}>
      <Box
        sx={{
          padding: 3,
          width: "100%",
          height: "auto",
          textAlign: "start",
        }}
      >
        <Divider textAlign="left">
          <Typography
            color={"text.secondary"}
            fontWeight={550}
            fontFamily={"monospace"}
          >
            FAVORITE PRODUCTS
          </Typography>
        </Divider>
      </Box>
      {favs.length > 0 ? (
        favs.map((prod) => (
          <Grid item xs={10} sm={5.5} md={3.5} lg={2.5} key={prod._id}>
            <CardProductsDefault product={prod} />
          </Grid>
        ))
      ) : (
        <Grid
          item
          xs={10}
          sm={5.5}
          md={3.5}
          lg={2.5}
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            color={"text.primary"}
            fontWeight={550}
            fontFamily={"monospace"}
            variant="body2"
            textAlign="center"
          >
            You don't have favorite products
          </Typography>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </Grid>
      )}
    </Grid>
  );
};

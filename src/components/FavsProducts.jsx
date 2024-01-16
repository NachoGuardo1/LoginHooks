import React, { useContext } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";

import { productsContext } from "../context/ProductsContext";
import { CardProductsDefault } from "./CardProductsDefault";

export const FavsProducts = () => {
  const { favs } = useContext(productsContext);

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
      {favs ? (
        favs.map((prod) => (
          <Grid item xs={10} sm={5.5} md={3.5} lg={2.5} key={prod.id}>
            <CardProductsDefault product={prod} />
          </Grid>
        ))
      ) : (
        <Typography>vacio</Typography>
      )}
    </Grid>
  );
};

import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

export const CarouselCards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=6"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Carousel animation="fade" autoPlay={true} indicators height={300}>
      {products.map((product) => (
        <Card sx={{ maxHeight: 450 }} key={product.id}>
          {/* BTN FAV Y MORE */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "end",
              margin: 1,
            }}
          ></Box>
          {/* IMAGEN */}
          <CardMedia
            component="img"
            sx={{ height: 200, width: "100%", objectFit: "contain" }}
            image={product.image}
          />
          {/* TITULO  */}
          <Grid container padding={2}>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="center"
              direction="column"
            >
              <Typography
                variant="h3"
                textAlign="center"
                color="error"
                fontSize="14px"
                fontWeight={600}
              >
                {Math.floor(Math.random() * 45) + 1}% OFF
              </Typography>
              <Button>See More</Button>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Carousel>
  );
};

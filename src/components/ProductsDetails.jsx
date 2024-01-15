import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsService } from "../services/ProductsService";
import { Box, Button, Container, Typography } from "@mui/material";
import { SkeletonCard } from "./SkeletonCard";
import { RatingProduct } from "./RatingProduct";

export const ProductsDetails = () => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProductById();
  }, [productId]);
  const getProductById = async () => {
    try {
      const resp = await ProductsService.GET_BY_ID(productId);
      setSelectedProduct(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      {loading ? (
        <SkeletonCard />
      ) : (
        <Box
          sx={{
            padding: 2,
            maxWidth: "md",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
          >
            <img
              src={selectedProduct.image}
              style={{ width: 300, height: 300, objectFit: "contain" }}
            />
          </Box>
          <Typography
            variant="h2"
            fontSize="25px"
            fontWeight={600}
            textAlign="start"
            color="text.primary"
            gutterBottom
          >
            {selectedProduct.title}
          </Typography>
          <Typography
            variant="body1"
            fontSize="13px"
            fontWeight={500}
            textAlign="start"
            color="text.secondary"
            gutterBottom
          >
            CATEGORY: {selectedProduct.category}
          </Typography>
          <Typography
            variant="h1"
            fontSize="30px"
            fontWeight={600}
            color="error"
            textAlign="start"
            gutterBottom
          >
            ${selectedProduct.price}
          </Typography>
          <RatingProduct />
          <Typography
            variant="body1"
            fontSize="14px"
            fontWeight={300}
            textAlign="start"
            color="text.primary"
            gutterBottom
          >
            {selectedProduct.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end", mt: 3 }}>
            <Button variant="contained" color="success">
              ADD TO CART
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";

export const CarouselCards = () => {
  const navigate = useNavigate();

  return (
    <Carousel animation="fade" autoPlay={true} indicators={false}>
      <Box position="relative">
        <img
          src="https://themewagon.github.io/believe/images/slider-1.jpg"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <Box
          position="absolute"
          top="40%"
          left="5%"
          display="flex"
          flexDirection="column"
          textAlign="left"
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "14px", md: "24px" }}
            color="primary"
            fontWeight={750}
          >
            MEN'S
          </Typography>
          <Typography
            variant="h3"
            fontSize={{ xs: "14px", md: "24px" }}
            gutterBottom
            fontWeight={750}
            color="white"
          >
            FASHION
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            fontWeight={600}
            marginTop={2}
            color="white"
            display={{ xs: "none", md: "flex" }}
          >
            New & Fresh collection
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            gutterBottom
            fontWeight={600}
            marginBottom={3}
            color="white"
            display={{ xs: "none", md: "flex" }}
          >
            arrival in U-STORE
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => navigate(`/category/men's clothing`)}
          >
            SHOP NOW
          </Button>
        </Box>
        <Box
          position="absolute"
          top="40%"
          right="5%"
          display="flex"
          flexDirection="column"
          textAlign="right"
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "14px", md: "24px" }}
            color="error"
            fontWeight={750}
          >
            WOMEN'S
          </Typography>
          <Typography
            variant="h3"
            fontSize={{ xs: "14px", md: "24px" }}
            gutterBottom
            fontWeight={750}
            color="white"
          >
            FASHION
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            fontWeight={600}
            marginTop={2}
            color="white"
            display={{ xs: "none", md: "flex" }}
          >
            New & Fresh collection
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            gutterBottom
            fontWeight={600}
            marginBottom={3}
            color="white"
            display={{ xs: "none", md: "flex" }}
          >
            arrival in U-STORE
          </Typography>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => navigate(`/category/women's clothing`)}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
      <Box position="relative">
        <img
          src="https://themewagon.github.io/believe/images/slider-2.jpg"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <Box
          position="absolute"
          top="40%"
          left="5%"
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "14px", md: "24px" }}
            color="primary"
            fontWeight={750}
          >
            50% PRICE CUT
          </Typography>
          <Typography
            variant="h3"
            fontSize={{ xs: "14px", md: "24px" }}
            gutterBottom
            fontWeight={750}
            color="white"
          >
            FOR ELECTRONICS
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            fontWeight={600}
            marginTop={2}
            color="white"
            display={{ xs: "none", md: "flex" }}
          >
            New & Fresh collection
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            gutterBottom
            fontWeight={600}
            marginBottom={3}
            color="white"
            display={{ xs: "none", md: "flex" }}
          >
            arrival in U-STORE
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(`/category/electronics`)}
            size="small"
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
    </Carousel>
  );
};

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

export const CarouselCards = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   getRandom();
  // }, []);
  // const getRandom = async () => {
  //   try {
  //     const response = await ProductsService.GET_LIMIT();
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Carousel animation="fade" autoPlay={true} indicators={false}>
      <Box position="relative">
        <img
          src="https://themewagon.github.io/believe/images/slider-1.jpg"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <Box
          position="absolute"
          top="50%"
          left="5%"
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h3"
            fontSize={{ xs: "18px", md: "24px" }}
            color="primary"
            fontWeight={750}
          >
            MEN'S
          </Typography>
          <Typography
            variant="h3"
            fontSize={{ xs: "18px", md: "24px" }}
            gutterBottom
            fontWeight={750}
          >
            FASHION
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            fontWeight={600}
            marginTop={2}
          >
            New & Fresh collection
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            gutterBottom
            fontWeight={600}
            marginBottom={3}
          >
            arrival in believe store
          </Typography>

          <Button variant="contained" color="primary" size="small">
            SHOP NOW
          </Button>
        </Box>
        <Box
          position="absolute"
          top="50%"
          right="5%"
          display="flex"
          flexDirection="column"
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
          >
            FASHION
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            fontWeight={600}
            marginTop={2}
          >
            New & Fresh collection
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            gutterBottom
            fontWeight={600}
            marginBottom={3}
          >
            arrival in believe store
          </Typography>
          <Button variant="contained" color="error" size="small">
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
          top="50%"
          left="5%"
          display="flex"
          flexDirection="column"
        >
          <Typography
            variant="h3"
            fontSize="24px"
            color="primary"
            fontWeight={750}
          >
            50% PRICE CUT
          </Typography>
          <Typography
            variant="h3"
            fontSize="24px"
            gutterBottom
            fontWeight={750}
          >
            FOR ONLINE ORDER
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            fontWeight={600}
            marginTop={2}
          >
            New & Fresh collection
          </Typography>
          <Typography
            variant="h5"
            fontSize="14px"
            gutterBottom
            fontWeight={600}
            marginBottom={3}
          >
            arrival in believe store
          </Typography>
          <Button variant="contained" color="primary">
            SHOP NOW
          </Button>
        </Box>
      </Box>
    </Carousel>
  );
};

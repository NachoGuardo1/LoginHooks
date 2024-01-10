import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

export const SliderHome = () => {
  const items = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53S6TJ542L8kBsliHPLi2C3Cc-h8QG8OPFZJ12x4R5w&s",
      caption: "Caption 1",
    },
    {
      imageUrl:
        "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/12/20/16715408188469.jpg",
      caption: "Caption 2",
    },
  ];
  return (
    <>
      <Carousel
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
        sx={{ width: "100%" }}
        autoPlay
        animation="slide"
      >
        {items.map((item, index) => (
          <Paper key={index} sx={{ width: "100%", height: "300" }}>
            <img
              src={item.imageUrl}
              alt={`carousel-item-${index}`}
              style={{ width: "100%", height: 300 }}
            />
          </Paper>
        ))}
      </Carousel>
    </>
  );
};

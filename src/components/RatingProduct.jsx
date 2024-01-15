import { Rating } from "@mui/material";
import React from "react";

export const RatingProduct = () => {
  const value = 3 + Math.random() * 2;
  return (
    <Rating
      name="simple-controlled"
      value={value}
      readOnly
      precision={0.5}
      size="small"
    />
  );
};

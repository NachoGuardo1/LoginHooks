import { Rating } from "@mui/material";
import React from "react";

export const RatingProduct = ({ rate }) => {
  return (
    <Rating
      name="simple-controlled"
      value={rate}
      readOnly
      precision={0.5}
      size="small"
    />
  );
};

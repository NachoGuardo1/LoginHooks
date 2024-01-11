import React from "react";
import { ProductList } from "../components/ProductList";
import { CarouselCards } from "../components/Carousel";

export const HomePage = () => {
  return (
    <>
      <CarouselCards />
      <ProductList />
    </>
  );
};

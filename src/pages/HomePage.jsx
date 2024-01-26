import React from "react";
import { ProductList } from "../components/ProductList";
import { CarouselCards } from "../components/Carousel";
import { FilterMenu } from "../components/FilterMenu";

export const HomePage = () => {
  return (
    <>
      <CarouselCards />
      <ProductList />
    </>
  );
};

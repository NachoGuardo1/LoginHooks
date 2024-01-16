import React from "react";
import { ProductList } from "../components/ProductList";
import { CarouselCards } from "../components/Carousel";
import { RandomHomeProducts } from "../components/RandomHomeProducts";

export const HomePage = () => {
  return (
    <>
      <CarouselCards />
      <ProductList />
      <RandomHomeProducts />
    </>
  );
};

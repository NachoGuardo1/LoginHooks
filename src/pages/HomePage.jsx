import React from "react";
import { ProductList } from "../components/ProductList";
import { SliderHome } from "../components/SliderHome";

export const HomePage = () => {
  return (
    <>
      <SliderHome />
      <ProductList />
    </>
  );
};

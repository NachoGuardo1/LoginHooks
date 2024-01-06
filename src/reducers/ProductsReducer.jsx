import { useReducer } from "react";

const initialState = { loading: true, products: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        products: [],
      };

    default:
      return state;
  }
};

export const ProductsReducer = () => {
  return useReducer(reducer, initialState);
};

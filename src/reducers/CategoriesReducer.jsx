import { useReducer } from "react";

const initialState = { loading: true, categories: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        categories: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        categories: [],
      };

    default:
      return state;
  }
};

export const CategoriesReducer = () => {
  return useReducer(reducer, initialState);
};

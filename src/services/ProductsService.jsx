import axios from "axios";
import { sortBy } from "lodash";

export const ProductsService = {
  GET: () => {
    return axios.get(import.meta.env.VITE_URL + "products");
  },
  GET_CATEGORIES: () => {
    return axios.get(import.meta.env.VITE_URL + "products/categories");
  },
  GET_IN_CATEGORIES: (category, skip, limit, term, direction) => {
    return axios.get(
      import.meta.env.VITE_URL +
        "products/category/" +
        category +
        "?skip=" +
        skip +
        "&limit=" +
        limit +
        "&sortBy=" +
        term +
        "&sort=" +
        direction
    );
  },
  GET_BY_ID: (productId) => {
    return axios.get(import.meta.env.VITE_URL + "products/" + productId);
  },
  GET_LIMIT: (limit) => {
    return axios.get(import.meta.env.VITE_URL + "products?limit=" + limit);
  },
  GET_PAGINATION: (skip, limit, term, direction) => {
    return axios.get(
      import.meta.env.VITE_URL +
        "products?skip=" +
        skip +
        "&limit=" +
        limit +
        "&sortBy=" +
        term +
        "&sort=" +
        direction
    );
  },
  GET_QUERY: (searchTerm) => {
    return axios.get(
      import.meta.env.VITE_URL + "products?searchTerm=" + searchTerm
    );
  },
  GET_SORT_TERM: (sortTerm, skip, limit) => {
    return axios.get(
      import.meta.env.VITE_URL +
        "products?sortBy=" +
        sortTerm +
        "&sort=desc" +
        "&skip=" +
        skip +
        "&limit=" +
        limit
    );
  },

  POST: (data) => {
    return axios.post(import.meta.env.VITE_URL + "products", data);
  },
  PUT: () => {
    return axios.put("");
  },
  DELETE: () => {
    return axios.delete("");
  },
};

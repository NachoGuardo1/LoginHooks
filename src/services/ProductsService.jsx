import axios from "axios";

export const ProductsService = {
  GET: () => {
    return axios.get(import.meta.env.VITE_URL + "products");
  },
  GET_CATEGORIES: () => {
    return axios.get(import.meta.env.VITE_URL + "products/categories");
  },
  GET_IN_CATEGORIES: (category) => {
    return axios.get(
      import.meta.env.VITE_URL + "products/category/" + category
    );
  },
  GET_BY_ID: (productId) => {
    return axios.get(import.meta.env.VITE_URL + "products/" + productId);
  },
  GET_LIMIT: (limit) => {
    return axios.get(import.meta.env.VITE_URL + "products?limit=" + limit);
  },
  GET_PAGINATION: (skip, limit) => {
    return axios.get(
      import.meta.env.VITE_URL + "products?skip=" + skip + "&limit=" + limit
    );
  },
  GET_QUERY: (searchTerm) => {
    return axios.get(
      import.meta.env.VITE_URL + "products?searchTerm=" + searchTerm
    );
  },
  GET_SORT_TERM: (sortTerm) => {
    return axios.get(import.meta.env.VITE_URL + "products?sortBy=" + sortTerm);
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

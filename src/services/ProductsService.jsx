import axios from "axios";

export const ProductsService = {
  GET: () => {
    return axios.get(import.meta.env.VITE_URL_PRODUCTOS + "products");
  },
  GET_CATEGORIES: () => {
    return axios.get(
      import.meta.env.VITE_URL_PRODUCTOS + "products/categories"
    );
  },
  GET_IN_CATEGORIES: (category) => {
    return axios.get(
      import.meta.env.VITE_URL_PRODUCTOS + "products/category/" + category
    );
  },
  GET_BY_ID: (productId) => {
    return axios.get(
      import.meta.env.VITE_URL_PRODUCTOS + "products/" + productId
    );
  },
  GET_LIMIT: () => {
    return axios.get(import.meta.env.VITE_URL_PRODUCTOS + "products?limit=6");
  },
  POST: () => {
    return axios.post("");
  },
  PUT: () => {
    return axios.put("");
  },
  DELETE: () => {
    return axios.delete("");
  },
};

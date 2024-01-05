import axios from "axios";

export const ProductsService = {
  GET: () => {
    return axios.get(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
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

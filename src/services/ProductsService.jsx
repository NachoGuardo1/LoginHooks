import axios from "axios";

export const ProductsService = {
  GET: () => {
    return axios.get("https://fakestoreapi.com/products");
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

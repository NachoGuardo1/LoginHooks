import axios from "axios";

export const AuthService = {
  Login: (data) => {
    return axios.post(import.meta.env.VITE_URL + "auth/login", data);
  },
  Register: (data) => {
    return axios.post(import.meta.env.VITE_URL + "usuarios", data);
  },
};

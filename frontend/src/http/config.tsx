import axios from "axios";
import { logout } from "./Gamer";

const BASE_URL = "https://playtogetherhub.onrender.com";

export const httpService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Token: localStorage.getItem("token") ?? null,
    "Content-Type": "application/json",
  },
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

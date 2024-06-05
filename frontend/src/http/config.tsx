import axios from "axios";
import { logout } from "./Gamer";

const BASE_URL = "http://localhost:3001";

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
    if (error.response && error.response.status === 401) {
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
